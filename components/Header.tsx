import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export default function Header(props: BottomTabHeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/images/header.png")}
      />
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Modal");
        }}
        style={{ borderRadius: 100 }}
      >
        <Image
          style={styles.profileImg}
          source={require("../assets/images/profile.jpg")}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 40,
  },
  img: {
    height: 45,
    width: 160,
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
});
