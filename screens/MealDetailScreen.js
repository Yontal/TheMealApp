import React from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
    StyleSheet
        } from 'react-native';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text style={{fontFamily: 'open-sans'}}>{props.children}</Text>
      </View>
    );
  };

const MealDetailScreen = props =>{

    const selectedMeal = MEALS.find(meal => (meal.id.indexOf(props.navigation.getParam('id')) >= 0  ));
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