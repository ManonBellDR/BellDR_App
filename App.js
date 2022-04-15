import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View,ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';
import Sprite1 from './components/sprite1'
import Sprite2 from './components/sprite2'
import Sprite3 from './components/sprite3'
import Sprite4 from './components/sprite4'
import Sprite5 from './components/sprite5'
import Home from './components/home'

export default function App() {
  
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
    <ScrollView horizontal={true}> 

        <Sprite1 />
        <Sprite2 />
        <Sprite3 />
        <Sprite4 />
        <Sprite5 />
        <Home />
        <StatusBar style="auto" />
     </ScrollView >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    
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
