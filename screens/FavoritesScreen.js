import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props =>{
    return(
        <MealList listData={MEALS} navigation={props.navigation} />
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorite meals'
}

export default FavoritesScreen;