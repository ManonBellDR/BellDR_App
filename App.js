import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
      'bold': require('./assets/Fonts/Rajdhani-Bold.ttf'),
      'medium':require('./assets/Fonts/Rajdhani-Medium.ttf'),
      'semiBold':require('./assets/Fonts/Rajdhani-SemiBold.ttf')
  });

  if (!loaded){
    return ( 
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00930A" />
      </View>
      );
  } 

  return (
    <View style={styles.container}>

      <Text>
        <Text style={styles.bell}>Bell</Text>
        <Text style={styles.dr}>DR </Text>
        <Text style={styles.bodyText}>React Native App</Text>
      </Text>

      <Text style={styles.title}>Titulo del Articulo</Text>
      <Text style={styles.subtitle}>Sub-Titulo del Articulo</Text>
      <Text style={styles.content}>Delightful Onboarding for your React-Native app. Let your users get familiar with your app by giving a pleasurable introduction. The Onboarding component is easy to set up and but still customizable.</Text>

      <StatusBar style="auto" />
    </View>
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
