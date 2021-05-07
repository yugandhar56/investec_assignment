/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import NameReducer from "./src/store/NameReducer";
import AppNavigator from "./src/navigation/AppNavigation";
import { View,Text ,StyleSheet} from 'react-native';

const rootReducer = combineReducers({
  names: NameReducer,
});

const store = createStore(rootReducer);



function App () {

  return (
    <Provider store={store}>
    <AppNavigator></AppNavigator>
        </Provider>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
