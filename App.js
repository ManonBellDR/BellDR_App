import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
      'regular':require('./assets/Fonts/Rajdhani-Regular.ttf'),
      'bold': require('./assets/Fonts/Rajdhani-Bold.ttf'),
      'light':require('./assets/Fonts/Rajdhani-Light.ttf'),
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

      <Text><Text style={styles.bell}>Bell</Text><Text style={styles.dr}>DR</Text> React Native App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell:{
    fontFamily:'bold',
    fontSize:30,
    color:"#00930A",
  },
  dr:{
    fontFamily:'medium',
    fontSize:30,
    color:"#006472",
    fontWeight:'800'
  },
});
