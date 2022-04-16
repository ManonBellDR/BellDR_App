import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './assets/colors'
import Onboarding from './components/onboarding';
import GetStarted from './components/getstarted'


export default function App() {
  const [showRealApp, setShowRealApp] = useState(true);
  
  const handelOnbardFinished = () => {
    setShowRealApp(false);
  };

  const handelOnbardBack = () => {
    setShowRealApp(true);
  };
  const [loaded] = useFonts({
      'bold': require('./assets/Fonts/Rajdhani-Bold.ttf'),
      'medium':require('./assets/Fonts/Rajdhani-Medium.ttf'),
      'semiBold':require('./assets/Fonts/Rajdhani-SemiBold.ttf'),
      'LatoBold':require('./assets/Fonts/Lato-Bold.ttf'),
      'LatoMedium':require('./assets/Fonts/Lato-Medium.ttf')

  });

  if (!loaded){
    return ( 
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00930A" />
      </View>
      );
  } 

  return (
  <>
      {showRealApp ? (
        <View style={styles.container}>
          <Onboarding handelDone={handelOnbardFinished}/>
          <StatusBar style="auto" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
        <GetStarted handelBack={handelOnbardBack}/>
        <StatusBar style="auto" />
         
        </SafeAreaView>
      )}
      
    </>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
          backgroundColor: colors.lightGray,
          // alignItems: 'center',
          // justifyContent: 'space-around',
          // paddingBottom: 100,
    
  },
  bell:{
    fontFamily:'bold',
    fontSize:35,
    color:"#00930A",
  },
  dr:{
    fontFamily:'medium',
    fontSize:35,
    color:"#006472",
    fontWeight:'800'
  },
  bodyText:{
    fontFamily:'semiBold',
    fontSize:18,
  },
  title:{
    fontFamily:'bold',
    fontSize:25,
  },
  subtitle:{
    fontFamily:'semiBold',
    fontSize:20,
  },
  content:{
    fontFamily:'medium',
    fontSize:16,

  }

});
