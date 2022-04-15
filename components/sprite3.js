import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Sprite3() {
  return (
    <View style={styles.Sprite3}>
      <View style={styles.Group450}>
        <Image
          style={styles._31}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yvbil15k0g-23%3A66?alt=media&token=15431326-41b0-4ccc-9efc-a17f46a1bef5",
          }}
        />
        <Text style={styles.Txt950}>Automation & efficiency </Text>
        <View style={styles.Rectangle2} />
        <Text style={styles.Txt875}>
          Smart agriculture sensors don't only help you automate various
          business processes (e.g. pest control) but keep them efficient by
          helping you to allocate resources in the right way.
        </Text>
        <View style={styles.Group643}>
          <Text style={styles.Txt128}>Skip</Text>
          <View style={styles.Step1} />
          <View style={styles.Step2} />
          <View style={styles.Step3} />
          <View style={styles.Step4} />
          <View style={styles.Step5} />
          <Text style={styles.Txt986}>Next</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Sprite3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 124,
    paddingBottom: 36,
    paddingLeft: 31,
    paddingRight: 30,
    backgroundColor: "rgba(252,251,251,1)",
    width: 370,
    height: 640,
  },
  Group450: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  _31: {
    width: 164.38,
    height: 145,
    marginBottom: 23,
  },
  Txt950: {
    fontSize: 28,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 234,
    height: 73,
    marginBottom: 15,
  },
  Rectangle2: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 289,
    height: 1,
    marginBottom: 16,
  },
  Txt875: {
    fontSize: 15,
    fontFamily: "LatoMedium",
    fontWeight: "500",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 296,
    height: 167,
    marginBottom: 19,
  },
  Group643: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Txt128: {
    fontSize: 15,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 75,
  },
  Step1: {
    backgroundColor: "rgba(17,18,109,0.39)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step2: {
    backgroundColor: "rgba(17,18,109,0.39)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step3: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step4: {
    backgroundColor: "rgba(17,18,109,0.39)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step5: {
    backgroundColor: "rgba(17,18,109,0.39)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 82,
  },
  Txt986: {
    fontSize: 15,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
