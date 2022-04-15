import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Sprite2() {
  return (
    <View style={styles.Sprite2}>
      <View style={styles.Group565}>
        <Image
          style={styles._21}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wtd9qlwd4b-23%3A65?alt=media&token=b85d33f1-c86a-491d-b717-3ad9902d837f",
          }}
        />
        <Text style={styles.Txt172}>Control over the risks</Text>
        <View style={styles.Rectangle3} />
        <Text style={styles.Txt723}>
          Tons of gathered and analyzed data gives you an opportunity to foresee
          the amount of product you'll produce for a set period of time. As an
          example, you can work out a modernized product distribution scheme
          based on the forecast to improve sales. This way, you minimize the
          risks of financial losses caused by unsold production.
        </Text>
        <View style={styles.Group246}>
          <Text style={styles.Txt1019}>Skip</Text>
          <View style={styles.Step1} />
          <View style={styles.Step2} />
          <View style={styles.Step3} />
          <View style={styles.Step4} />
          <View style={styles.Step5} />
          <Text style={styles.Txt813}>Next</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Sprite2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 122,
    paddingBottom: 36,
    paddingLeft: 31,
    paddingRight: 30,
    backgroundColor: "rgba(252,251,251,1)",
    width: 370,
    height: 640,
  },
  Group565: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  _21: {
    width: 151,
    height: 145.64,
    marginBottom: 24,
  },
  Txt172: {
    fontSize: 28,
    fontFamily: "LatoBold, sans-serif",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 199,
    height: 73,
    marginBottom: 15,
  },
  Rectangle3: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 289,
    height: 1,
    marginBottom: 16,
  },
  Txt723: {
    fontSize: 15,
    fontFamily: "LatoMedium, sans-serif",
    fontWeight: "500",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 296,
    height: 167,
    marginBottom: 19,
  },
  Group246: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Txt1019: {
    fontSize: 15,
    fontFamily: "LatoBold, sans-serif",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 75,
  },
  Step1: {
    backgroundColor: "rgba(162,163,198,1)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step2: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step3: {
    backgroundColor: "rgba(162,163,198,1)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step4: {
    backgroundColor: "rgba(162,163,198,1)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step5: {
    backgroundColor: "rgba(162,163,198,1)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 82,
  },
  Txt813: {
    fontSize: 15,
    fontFamily: "LatoBold, sans-serif",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
