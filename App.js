import Auth from "@react-native-firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SpashScreen from './src/component/SpashScreen';
import MyStack from './src/navigations/MyStack';


const App = () => {
  const [splash, setSplash] = useState(true)
  const [isUserLogged, setIsUserLogged] = useState(false);


  useEffect(() => {
    const unsubscribe = Auth().onAuthStateChanged(user => {
      if (user !== null) {
        setIsUserLogged(true);
      } else {
        setIsUserLogged(false);
      }
    });

    // Clean up subscription
    return unsubscribe;
  }, []);


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
            <MyStack isUser={isUserLogged} />
          </NavigationContainer>}
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})