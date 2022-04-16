import React from "react"
import { StyleSheet, Image, Text, View, Button, TouchableHighlight } from "react-native"
import colors from '../assets/colors'

export default function GetStarted(props) {
  const handelBack =()=>{
    props.handelBack();
}

  return (
    
      <View style={styles.Sprite}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.heroImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/a8eo09wv7b9-23%3A68?alt=media&token=27e468df-4964-483d-b574-20c72948bae2",
            }}
          />
        </View>
        <View style={styles.textContainer}>

          <Text style={styles.title}>Smart agriculture with <Text style={styles.bell}>Bell</Text><Text style={styles.dr}>DR</Text></Text>
          <View style={styles.lineDivision} />
          <Text style={styles.paragraph}>
            IoT in agriculture is able to transform a variety of business processes and help entrepreneurs make the right decisions.
          </Text>
            <TouchableHighlight 
              style={styles.getStarted}
              underlayColor={colors.grey}
              onPress={handelBack}
            >
              <View>
              <Text style={styles.bottonText}>Get Started</Text>
              </View>
            </TouchableHighlight>
        </View>
      
        
      </View>

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
    paddingBottom: 70,
    fontFamily: "LatoMedium",
    fontWeight:'500',
    fontSize:15,
    textAlign: "center",
    color:colors.blue,
  },
  
  getStarted: {
    paddingTop: 15,
    paddingBottom: 14,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 10,
    backgroundColor: "rgba(17,18,109,1)",
    width: 251,
    height: 56,
  },
  bottonText: {
    fontSize: 20,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  bell:{
    fontFamily:'bold',
    fontSize:30,
    fontSize:35,
    color:colors.green,
  },
  dr:{
    fontFamily:'medium',
    fontSize:30,
    fontSize:35,
    color:colors.blue,
    fontWeight:'800'
  },
})
