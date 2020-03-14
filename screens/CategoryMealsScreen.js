import React from 'react';
import MealList from '../components/MealList';
import {View, Text, StyleSheet} from 'react-native';


import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props =>{

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const catId = props.navigation.getParam('CategoryId');
    const displayedMeals = availableMeals.filter(item =>
      item.categoryIds.indexOf(catId) >= 0
    );

    if(displayedMeals.length === 0 || !displayedMeals){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>No meals found. Try to change filters setting.</Text>
            </View>
        );
    }
    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
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

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('CategoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return{
        headerTitle: selectedCategory.title,
    };   
}

export default CategoryMealsScreen;