import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"

export default function Sprite6() {
  return (
    <View style={styles.Sprite6}>
      <View style={styles.Group372}>
        <Image
          style={styles.LogoConColores1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/iy8f1aoz4sd-23%3A95?alt=media&token=c8dfe595-2f2e-40e6-9a87-f05463c17432",
          }}
        />
        <Text style={styles.Txt321}>Login Register Page here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Sprite6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 183,
    paddingBottom: 158,
    paddingLeft: 72,
    paddingRight: 70,
    backgroundColor: "rgba(252,251,251,1)",
    width: 360,
    height: 640,
  },
  Group372: {
    display: "flex",
    flexDirection: "column",
  },
  LogoConColores1: {
    width: 185,
    height: 177,
    marginBottom: 47,
  },
  Txt321: {
    fontSize: 28,
    fontFamily: "LatoBold, sans-serif",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 216,
    height: 73,
  },
})
