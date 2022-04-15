import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Sprite5() {
  return (
    <View style={styles.Sprite5}>
      <View style={styles.Group519}>
        <Image
          style={styles._51}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/a8eo09wv7b9-23%3A68?alt=media&token=27e468df-4964-483d-b574-20c72948bae2",
          }}
        />
        <Text style={styles.Txt2710}>Smart agriculture with BellDR</Text>
        <View style={styles.Rectangle4} />
        <Text style={styles.Txt671}>
          As all these IoT-based smart agriculture sensors work closely with
          software, the data is recorded, analyzed, and visualized in a
          user-friendly way. Correspondingly, by keeping all the necessary data
          in one place, be it weather conditions or health of the cattle, you
          can easily monitor the current situation in your business.
        </Text>
        <View style={styles.Group1}>
          <Text style={styles.Txt698}>Get Started</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Sprite5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 123,
    paddingBottom: 18,
    paddingLeft: 32,
    paddingRight: 30,
    backgroundColor: "rgba(252,251,251,1)",
    width: 360,
    height: 640,
  },
  Group519: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  _51: {
    width: 146.67,
    height: 143,
    marginBottom: 26,
  },
  Txt2710: {
    fontSize: 28,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 216,
    height: 73,
    marginBottom: 15,
  },
  Rectangle4: {
    backgroundColor: "rgba(17,18,109,1)",
    width: 289,
    height: 1,
    marginBottom: 16,
  },
  Txt671: {
    fontSize: 15,
    fontFamily: "LatoMedium",
    fontWeight: "500",
    color: "rgba(17,18,109,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 296,
    height: 167,
  },
  Group1: {
    paddingTop: 15,
    paddingBottom: 14,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 10,
    backgroundColor: "rgba(17,18,109,1)",
    width: 251,
    height: 56,
  },
  Txt698: {
    fontSize: 20,
    fontFamily: "LatoBold",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
