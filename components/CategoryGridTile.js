import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'

const CategoryGridTile = props => {
    return(
        <View style={styles.gridItem} >
            <TouchableNativeFeedback 
                onPress={props.onPress} >
                <View style={{...styles.container, ...{backgroundColor: props.color,}}}>
                    <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );    
}


const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        overflow:'hidden',
        elevation: 3,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
    }
})

export default CategoryGridTile;