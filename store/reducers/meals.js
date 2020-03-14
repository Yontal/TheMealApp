import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, FILTER_MEALS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >= 0){
                const updatedFavoriteMeals = [...state.favoriteMeals];
                updatedFavoriteMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavoriteMeals}
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            };
        case FILTER_MEALS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.GlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.LactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.Vegan && !meal.isVegan){
                    return false;
                }
                if(appliedFilters.Vegetarian && !meal.isVegetarian){
                    return false;
                }
                return true;
            }) 

            return {...state, filteredMeals: updatedFilteredMeals}
        default:
            return state;
    }
}

export default mealsReducer;
