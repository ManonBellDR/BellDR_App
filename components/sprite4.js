import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Sprite4() {
  return (
    <View style={styles.Sprite4}>
      <View style={styles.Group889}>
        <Image
          style={styles._41}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9qjvv0jv0zv-23%3A67?alt=media&token=bd193950-e4fe-4fd5-ba2f-35586a97c37d",
          }}
        />
        <Text style={styles.Txt319}>Better product´s quality</Text>
        <View style={styles.Rectangle3} />
        <Text style={styles.Txt10107}>
          Smart agriculture technology allows you to improve the final product
          quality as all the issues are typically detected and mitigated
          beforehand, while all the other processes in your business can
          function as they usually do without being stopped or frozen.
        </Text>
        <View style={styles.Group811}>
          <Text style={styles.Txt281}>Skip</Text>
          <View style={styles.Step1} />
          <View style={styles.Step2} />
          <View style={styles.Step3} />
          <View style={styles.Step4} />
          <View style={styles.Step5} />
          <Text style={styles.Txt762}>Next</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Sprite4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 125,
    paddingBottom: 36,
    paddingLeft: 31,
    paddingRight: 30,
    backgroundColor: "rgba(252,251,251,1)",
    width: 370,
    height: 640,
  },
  Group889: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  _41: {
    width: 151,
    height: 144.43,
    marginBottom: 23,
  },
  Txt319: {
    fontSize: 28,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 227,
    height: 73,
    marginBottom: 15,
  },
  Rectangle3: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 289,
    height: 1,
    marginBottom: 16,
  },
  Txt10107: {
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
  Group811: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Txt281: {
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
    backgroundColor: "rgba(17,18,109,0.39)",
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 9,
  },
  Step4: {
    backgroundColor: "rgba(17,18,109,1)",
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
  Txt762: {
    fontSize: 15,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
