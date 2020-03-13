import React from 'react';
import { Platform, Text } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen'
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
            tabBarColor: COLOR.primaryColor,
            tabBarLabel: (<Text style={{fontFamily: 'open-sans'}}>Meals</Text>)
        }
    },
    Favorite: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}  />},
            tabBarColor: COLOR.accentColor,
            tabBarLabel: (<Text style={{fontFamily: 'open-sans'}}>Favorites</Text>)
        }
    }  
}

const BottomTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(BottomTabNavRouteConfig,{
    activeColor: "white",
    shifting: true,
}) 
:
createBottomTabNavigator(BottomTabNavRouteConfig, {
    tabBarOptions:{
        activeTintColor: COLOR.accentColor,
    }
})

const FilterStackNavigator = createStackNavigator({
        Filter: FilterScreen,
    },
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: COLOR.primaryColor,
            },
            headerTintColor: 'white',
            headerTitleStyle:{
                fontFamily: 'open-sans-bold',
            },
            headerTitleStyle:{
                fontFamily: 'open-sans-bold',
            }
        }
    })

const MainNavigator = createDrawerNavigator({
    MealFavs:{screen: BottomTabNavigator, navigationOptions: {drawerLabel: 'Meals'}},
    Filter: FilterStackNavigator
},{
    contentOptions:{
        activeTintColor: COLOR.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
        }
    },
})


export default createAppContainer(MainNavigator);