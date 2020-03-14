import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals'

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  if(!appLoaded){
    return (<AppLoading startAsync={fetchFonts} onFinish={() => setAppLoaded(true)} />);
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
