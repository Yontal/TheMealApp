import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { useDispatch } from 'react-redux';

import { filterMeals } from '../store/actions/meals'

import COLOR from '../constants/COLORS'

const Filter = props => {
    return(
        <View style={styles.filterContainer}>
            <Text style={styles.filterLabel}>{props.label}</Text>
            <Switch value={props.value} onValueChange={props.onToggle} trackColor={{true: COLOR.primaryColor}} thumbColor={COLOR.primaryColor} />
        </View>
    );
}

const FilterScreen = props =>{
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
            const appliedFilters = {
                GlutenFree: isGlutenFree,
                LactoseFree: isLactoseFree,
                Vegan: isVegan,
                Vegetarian: isVegetarian
            };
            dispatch(filterMeals(appliedFilters));
        },
        [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]
    );
    useEffect(()=>{
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Apply filters:</Text>
            <Filter value={isGlutenFree} label="Gluten free:" onToggle={() => setIsGlutenFree(!isGlutenFree)} />
            <Filter value={isLactoseFree} label="Lactose free:" onToggle={() => setIsLactoseFree(!isLactoseFree)} />
            <Filter value={isVegan} label="Vegan:" onToggle={() => setIsVegan(!isVegan)} />
            <Filter value={isVegetarian} label="Vegetarian:" onToggle={() => setIsVegetarian(!isVegetarian)} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
    },
    filterContainer:{
        flexDirection: 'row',
        width: '80%',
        marginVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

FilterScreen.navigationOptions = (navData) => {
    return{
        headerTitle: 'Filter',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                onPress={() => navData.navigation.toggleDrawer()}
                iconName='ios-menu'
                title="Menu" 
                 />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                onPress={navData.navigation.getParam('save')}
                iconName='ios-save'
                title="Save" 
                 />
            </HeaderButtons>
        )
    }
}

export default FilterScreen;