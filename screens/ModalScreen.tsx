import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

export default function ModalScreen() {
  // State
  const [orderStatus, setOrderStatus] = useState(true);
  const [passwordChanges, setPasswordChanges] = useState(true);
  const [specialOffers, setSpecialOffers] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

        <Text style={styles.title}>Personal Information</Text>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>Avatar</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.profileImg}
              source={require("../assets/images/profile.jpg")}
            />
            <View>
              <Button>Change</Button>
              <View style={{ marginVertical: 8 }}></View>
              <Button outline>Remove</Button>
            </View>
          </View>
        </View>
        <Input placeholder="First name">Yousef</Input>
        <Input placeholder="Last name">Abu Shanab</Input>
        <Input placeholder="Email">yousef.abushanab@example.com</Input>
        <Input placeholder="Phone number">(217) 555-0113</Input>

        <Text style={styles.title}>Email Notifications</Text>
        <View style={styles.row}>
          <Text>Order Status</Text>
          <Switch
            value={orderStatus}
            onChange={() => {
              setOrderStatus(!orderStatus);
            }}
          ></Switch>
        </View>
        <View style={styles.row}>
          <Text>Password changes</Text>
          <Switch
            value={passwordChanges}
            onChange={() => {
              setPasswordChanges(!passwordChanges);
            }}
          ></Switch>
        </View>
        <View style={styles.row}>
          <Text>Special offers</Text>
          <Switch
            value={specialOffers}
            onChange={() => {
              setSpecialOffers(!specialOffers);
            }}
          ></Switch>
        </View>
        <View style={styles.row}>
          <Text>Newsletter</Text>
          <Switch
            value={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          ></Switch>
        </View>

        <Button color="secondary">Logout</Button>

        <View style={{ marginVertical: 8 }}></View>

        <View style={[styles.row, { paddingHorizontal: 0 }]}>
          <Button>Save changes</Button>
          <Button outline>Discard changes</Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginRight: 16,
  },
  row: {
    marginBottom: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
