import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

import COLOR from '../constants/COLORS';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals:{
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: COLOR.primaryColor,
        },
        headerTintColor: 'white',
        headerTitleStyle:{
            fontFamily: 'open-sans-bold',
        }
    }
});

const FavoriteStackNavigator = createStackNavigator({
        Favorite: {
            screen: FavoriteScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: COLOR.accentColor,
            },
            headerTintColor: 'white',
            headerTitleStyle:{
                fontFamily: 'open-sans-bold',
            }
        }
    }
)

const BottomTabNavRouteConfig = {
    Meals:{
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => { return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />},
            tabBarColor: COLOR.primaryColor
        }
    },
    Favorite: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}  />},
            tabBarColor: COLOR.accentColor
        }
    }  
}

const BottomTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(BottomTabNavRouteConfig,{
    activeColor: "white",
    shifting: true
}) 
:
createBottomTabNavigator(BottomTabNavRouteConfig, {
    tabBarOptions:{
        activeTintColor: COLOR.accentColor,
    }
})


export default createAppContainer(BottomTabNavigator);