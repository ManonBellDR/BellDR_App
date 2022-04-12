import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    bold: require('./assets/Fonts/Rajdhani-Bold.ttf'),
    light:require('./assets/Fonts/Rajdhani-Light.ttf'),
    Medium:require('./assets/Fonts/Rajdhani-Medium.ttf'),
    semiBold:require('./assets/Fonts/Rajdhani-SemiBold.ttf'),
  });