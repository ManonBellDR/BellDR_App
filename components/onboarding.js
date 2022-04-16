
import React, { useState } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from '../assets/slides'
import colors from '../assets/colors'

export default function Onboarding(props) {
    
    
    const handelDone =()=>{
        props.handelDone();
    }
    
  
    const onSkip = () => {
        props.handelDone();
    };

    const renderDoneButton = () => {
        return (
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonsText}>Done</Text>
          </View>
        );
      };
      const renderNextButton = () => {
        return (
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonsText}>Next</Text>
          </View>
        );
      };
      const renderSkipButton = () => {
        return (
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonsText}>Skip</Text>
          </View>
        );
      };
      const RenderItem = ({ item }) => {
        return (
           
            <View  style={styles.Sprite}>
            <View style={styles.imageContainer}>
              <Image
                  style={styles.heroImage}
                  source={item.image}
              />
            </View>
    
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.lineDivision} />
              <Text style={styles.paragraph}>
              {item.text}
              </Text>
            </View>

          </View>
        );
      };

  return (
    <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          dotStyle={styles.Step}
          activeDotStyle={styles.StepSelected}
          onDone={handelDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
  )
}



const styles = StyleSheet.create({
    Sprite: {
      flex:1,
 
    },
    imageContainer:{
      height: '48%', 
      justifyContent:"flex-end",
      alignItems: "center",
  
    },
    textContainer:{
      height: '41%', 
      alignItems: "center",
      paddingHorizontal:32
    },
    buttomBar: {
      height: '11%', 
      justifyContent: 'space-between',
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal:32
    },
    navDots:{
      width:"26%",
      justifyContent: 'space-between',
      flexDirection: "row",
    },
  
    heroImage: {
      width:170,
      height:148,
      marginBottom:31,
      resizeMode: 'contain',
      alignContent:'center'
    },
  
    title: {
      fontFamily: "LatoBold",
      fontWeight:'700',
      fontSize:28,
      textAlign: "center",
      color:colors.blue,
      width:225,
      paddingBottom:17
    },
  
    lineDivision: {
      backgroundColor: colors.blue,
      width: 289,
      height: 1,
    },
  
    paragraph: {
      paddingTop:17,
      fontFamily: "LatoMedium",
      fontWeight:'500',
      fontSize:15,
      textAlign: "center",
      color:colors.blue,
    },
  
    buttonsText: {
      fontSize: 15,
      fontFamily: "LatoBold",
      fontWeight: "700",
      color: colors.blue,
      
    },
  
    Step: {
      backgroundColor: colors.grey,
      width: 10,
      height: 10,
      borderRadius: 2,
    },
  
    StepSelected: {
      backgroundColor: colors.blue,
      width: 10,
      height: 10,
      borderRadius: 2,
    },
    buttonStyle:{
        height: 56,
        alignItems: "center",
        justifyContent:"center",
        paddingHorizontal:32,
        paddingBottom:5
    }
  })
  