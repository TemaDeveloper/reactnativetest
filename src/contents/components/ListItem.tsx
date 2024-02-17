import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { cocktailType } from '../utilities/cocktailType'

const ListItem = (props) => {

    const {strDrink, strDrinkThumb, idDrink, type} = props
    const {item, title} = styles

    return(
        <View style = {item}>

            <MaterialIcons name={cocktailType[type]?.icon} size={50} color={'white'}/>
            <View>
                <Text style={title}>{strDrink}{"\n"}{idDrink}</Text>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    item: {
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'indianred'
    },

    title:{
        fontSize: 20,
        color: 'white'
    }

})
export default ListItem;
