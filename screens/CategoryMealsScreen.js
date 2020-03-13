import React from 'react';
import MealList from '../components/MealList'


import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props =>{

    const catId = props.navigation.getParam('CategoryId');
    const displayedMeals = MEALS.filter(item =>
      item.categoryIds.indexOf(catId) >= 0
    );
    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
}


CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('CategoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return{
        headerTitle: selectedCategory.title,
    };   
}

export default CategoryMealsScreen;