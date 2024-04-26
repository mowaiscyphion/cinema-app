import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SpashScreen from './src/component/SpashScreen';
import MyStack from './src/navigations/MyStack';

const App = () => {
  const [splash, setSplash] = useState(true)
  setTimeout(() => {
    if (splash) {
      setSplash(false);
    }
  }, 4000);

  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
        {splash ?
          <SpashScreen />
          :
          <NavigationContainer >
            <MyStack />
          </NavigationContainer>}
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})