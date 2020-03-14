import React, { useEffect, useCallback } from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
    StyleSheet
        } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text style={{fontFamily: 'open-sans'}}>{props.children}</Text>
      </View>
    );
  };

const MealDetailScreen = props =>{
    const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => (meal.id.indexOf(props.navigation.getParam('id')) >= 0  ));

    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(selectedMeal.id));
    }, [dispatch]);

    useEffect(() => {
        props.navigation.setParams({
            toggleFavorite: toggleFavoriteHandler,
        })
    }, [toggleFavoriteHandler]);

    return(
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
    return {
        headerTitle: navigationData.navigation.getParam('title'),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite!"
                    iconName="ios-star"
                    onPress={toggleFavorite} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
      },
      details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
      },
      listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
      }
});

export default MealDetailScreen;