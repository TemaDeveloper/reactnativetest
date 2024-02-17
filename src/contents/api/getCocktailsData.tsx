import React, { useState, useEffect } from 'react'
import { COCKTAIL_API_KEY } from '@env'

export const getCocktailsData = () => {

    const [cocktails, setCocktails] = useState([])

    const fetchCocktails = async () => {
  
          const res = await fetch(
            COCKTAIL_API_KEY
          )
          const data = await res.json()
          setCocktails(data)
        
      }


useEffect(() => {
    ;(async () => {
        await fetchCocktails()
    }
    
)})
return [cocktails]
}