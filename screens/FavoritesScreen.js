import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const FavoritesScreen = props =>{
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    if(favoriteMeals.length === 0 || !favoriteMeals){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>No favorite meals yet. Start to add it!</Text>
            </View>
        );
    }
    return(
        <MealList listData={favoriteMeals} navigation={props.navigation} />
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'open-sans-bold',
    }
})

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorite meals'
}

export default FavoritesScreen;