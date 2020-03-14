import React from 'react';
import {StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const FavoritesScreen = props =>{
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    return(
        <MealList listData={favoriteMeals} navigation={props.navigation} />
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorite meals'
}

export default FavoritesScreen;