import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = props =>{
    const selectedMeal = MEALS.find(meal => (meal.id.indexOf(props.navigation.getParam('id')) >= 0  ));
    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const selectedMeal = MEALS.find(meal => (meal.id.indexOf(navigationData.navigation.getParam('id')) >= 0  ));
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite!"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Favorite!')
                    }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailScreen;