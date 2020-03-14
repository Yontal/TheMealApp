import React from 'react';
import MealList from '../components/MealList'


import { CATEGORIES } from '../data/dummy-data'
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props =>{

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const catId = props.navigation.getParam('CategoryId');
    const displayedMeals = availableMeals.filter(item =>
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