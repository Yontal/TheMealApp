import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile'

import COLOR from '../constants/COLORS';

import {CATEGORIES} from '../data/dummy-data';



const CategoriesScreen = props =>{

    const renderCategoryItem = (itemsData) => {
        return(
            <CategoryGridTile 
                onPress={() => props.navigation.navigate(
                    {routeName: 'CategoryMeals', 
                    params:{
                            CategoryId: itemsData.item.id,
                        }
                    })} 
                title={itemsData.item.title}
                color={itemsData.item.color} />
        );
    }

    return(
            <FlatList 
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => item.id}
                numColumns={2}
                contentContainerStyle={styles.container}
            />
    );
}

const styles = StyleSheet.create({

});

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

export default CategoriesScreen;