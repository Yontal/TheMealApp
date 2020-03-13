import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'


const FilterScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>This is filter screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
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
        )
    }
}

export default FilterScreen;