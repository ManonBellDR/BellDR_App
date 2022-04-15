import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Sprite1() {
  return (
    <View style={styles.Sprite1}>
      <View style={styles.Group438}>
        <Image
          style={styles._11}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u4v1wvcjal-21%3A64?alt=media&token=0af9531f-c1bf-42be-9658-e8a069864d4b",
          }}
        />
        <Text style={styles.Txt586}>Data that works for you</Text>
        <View style={styles.Rectangle4} />
        <Text style={styles.Txt1210}>
          As all these IoT-based smart agriculture sensors work closely with
          software, the data is recorded, analyzed, and visualized in a
          user-friendly way. Correspondingly, by keeping all the necessary data
          in one place, be it weather conditions or health of the cattle, you
          can easily monitor the current situation in your business.
        </Text>
        <View style={styles.Group669}>
          <Text style={styles.Txt658}>Skip</Text>
          <View style={styles.Step1} />
          <View style={styles.Step2} />
          <View style={styles.Step3} />
          <View style={styles.Step4} />
          <View style={styles.Step5} />
          <Text style={styles.Txt632}>Next</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Sprite1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 121,
    paddingBottom: 36,
    paddingLeft: 31,
    paddingRight: 30,
    backgroundColor: "rgba(252,251,251,1)",
    width: 360,
    height: 640,
  },
  Group438: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  _11: {
    width: 151,
    height: 148,
    marginBottom: 24,
  },
  Txt586: {
    fontSize: 28,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 226,
    height: 71,
    marginBottom: 16,
  },
  Rectangle4: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 289,
    height: 1,
    marginBottom: 16,
  },
  Txt1210: {
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
  Group669: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Txt658: {
    fontSize: 15,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 75,
  },
  Step1: {
    backgroundColor: "rgba(17,18,109,1)",
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
    marginRight: 72,
  },
  Txt632: {
    fontSize: 15,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
