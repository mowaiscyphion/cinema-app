import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import SpashScreen from './src/component/SpashScreen';

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
      <SafeAreaView style={{ flex: 1 }}>
        {splash ?
          <SpashScreen />
          :
          <>
            <Text>
              Hell
            </Text>
            {/* <IntroSlider setIsIntro={setIsIntro} /> */}
          </>}
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})