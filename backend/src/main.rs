
/* TEST: 
 * curl -k -X GET https://localhost:3000/user -d '{"token":"Hello there my fellow friend"}' -H "Content-Type: application/json" 
 */

use axum::{
    extract::Host, handler::HandlerWithoutStateExt, http::{StatusCode, Uri}, response::Redirect, routing::get, BoxError, Json, Router
};
use axum_server::tls_rustls::RustlsConfig;
use tokio::main;
use std::{net::SocketAddr, path::PathBuf};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[derive(Clone, Copy)]
struct Ports {
    http: u16,
    https: u16,
}

#[derive(serde::Deserialize, serde::Serialize)]
struct UserAuth {
    token: String
}


#[main]
async fn main() {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "example_tls_rustls=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    let ports = Ports {
        http: 7878,
        https: 3000,
    };

    // optional: spawn a second server to redirect http requests to this server
    tokio::spawn(redirect_http_to_https(ports));

    // configure certificate and private key used by https
    let config = RustlsConfig::from_pem_file(
        PathBuf::from("./")
            .join("certs")
            .join("mycert.pem"),
        PathBuf::from("./")
            .join("certs")
            .join("mykey.pem"),
    )
    .await
    .expect("No such files");

    let app = Router::new()
        .route("/", get(handler))
        .route("/user", get(user_info));

    // run https server
    let addr = SocketAddr::from(([127, 0, 0, 1], ports.https));
    tracing::debug!("listening on {}", addr);
    axum_server::bind_rustls(addr, config)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn user_info(Json(info): Json<UserAuth>) -> String {
    format!("Payload: \"{}\"", info.token)
}

async fn handler() -> &'static str {
    "Hello, World!"
}

async fn redirect_http_to_https(ports: Ports) {
    fn make_https(host: String, uri: Uri, ports: Ports) -> Result<Uri, BoxError> {
        let mut parts = uri.into_parts();

        parts.scheme = Some(axum::http::uri::Scheme::HTTPS);

        if parts.path_and_query.is_none() {
            parts.path_and_query = Some("/".parse().unwrap());
        }

        let https_host = host.replace(&ports.http.to_string(), &ports.https.to_string());
        parts.authority = Some(https_host.parse()?);

        Ok(Uri::from_parts(parts)?)
    }

    let redirect = move |Host(host): Host, uri: Uri| async move {
        match make_https(host, uri, ports) {
            Ok(uri) => Ok(Redirect::permanent(&uri.to_string())),
            Err(error) => {
                tracing::warn!(%error, "failed to convert URI to HTTPS");
                Err(StatusCode::BAD_REQUEST)
            }
        }
    };

    let addr = SocketAddr::from(([127, 0, 0, 1], ports.http));
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    tracing::debug!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, redirect.into_make_service())
        .await
        .unwrap();
}
