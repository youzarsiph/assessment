/**
 * Account screen
 */

import React from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Image, ScrollView, View } from "react-native";
import { Button, Checkbox, List, Text, TextInput } from "react-native-paper";
import Styles from "../styles";
import { Screen } from "../components";

const Account = () => {
  // Router
  const router = useRouter();

  // Loading
  const [loading, setLoading] = React.useState<boolean>(true);

  // State
  const [state, setState] = React.useState<{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    notifications: {
      status: boolean;
      password: boolean;
      offers: boolean;
      newsletter: boolean;
    };
  }>({
    username: "youzarsiph",
    firstName: "Yousef",
    lastName: "Abu Shanab",
    email: "youzarsiph@littlelemon.com",
    phoneNumber: "0123456789",
    notifications: {
      status: true,
      password: true,
      offers: true,
      newsletter: true,
    },
  });

  React.useEffect(() => {
    (async () => {
      const data = await SecureStore.getItemAsync("data");

      data !== null
        ? setState(JSON.parse(data))
        : setState({
            username: "youzarsiph",
            firstName: "Yousef",
            lastName: "Abu Shanab",
            email: "youzarsiph@littlelemon.com",
            phoneNumber: "0123456789",
            notifications: {
              status: true,
              password: true,
              offers: true,
              newsletter: true,
            },
          });

      setLoading(false);
    })();
  }, []);

  // Message
  const [message, setMessage] = React.useState<string>("");
  const [displayMessage, setDisplayMessage] = React.useState<boolean>(false);

  return (
    <Screen
      loading={loading}
      message={message}
      options={{ title: "Account" }}
      displayMessage={displayMessage}
      onDismissMessage={() => setDisplayMessage(false)}
    >
      <ScrollView>
        <View style={[Styles.content, { gap: 16 }]}>
          <Text variant="titleLarge">Personal information</Text>

          <View
            style={{
              columnGap: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "47%" }}>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: "100%", height: 150, borderRadius: 10 }}
              />
            </View>
            <View style={{ width: "47%", rowGap: 16 }}>
              <Button mode="contained" onPress={() => {}}>
                Change
              </Button>
              <Button mode="outlined" onPress={() => {}}>
                Remove
              </Button>
            </View>
          </View>

          <TextInput
            mode="outlined"
            label={"Username"}
            placeholder={"Your username"}
            value={state.username}
            onChangeText={(value) => setState({ ...state, username: value })}
          />
          <TextInput
            mode="outlined"
            label={"First name"}
            placeholder={"Your first name"}
            value={state.firstName}
            onChangeText={(value) => setState({ ...state, firstName: value })}
          />
          <TextInput
            mode="outlined"
            label={"Last name"}
            placeholder={"Your last name"}
            value={state.lastName}
            onChangeText={(value) => setState({ ...state, lastName: value })}
          />
          <TextInput
            mode="outlined"
            label={"Email"}
            placeholder={"your.name@example.com"}
            value={state.email}
            onChangeText={(value) => setState({ ...state, email: value })}
          />
          <TextInput
            mode="outlined"
            label={"Phone number"}
            placeholder={"Your phone number"}
            value={state.phoneNumber}
            onChangeText={(value) => setState({ ...state, phoneNumber: value })}
          />
        </View>

        <List.Section title="Notifications">
          <Checkbox.Item
            label="Order status"
            status={state.notifications.status ? "checked" : "unchecked"}
            onPress={() =>
              setState({
                ...state,
                notifications: {
                  ...state.notifications,
                  status: !state.notifications.status,
                },
              })
            }
          />
          <Checkbox.Item
            label="Password changes"
            status={state.notifications.password ? "checked" : "unchecked"}
            onPress={() =>
              setState({
                ...state,
                notifications: {
                  ...state.notifications,
                  password: !state.notifications.password,
                },
              })
            }
          />
          <Checkbox.Item
            label="Special offers"
            status={state.notifications.offers ? "checked" : "unchecked"}
            onPress={() =>
              setState({
                ...state,
                notifications: {
                  ...state.notifications,
                  offers: !state.notifications.offers,
                },
              })
            }
          />
          <Checkbox.Item
            label="Newsletter"
            status={state.notifications.newsletter ? "checked" : "unchecked"}
            onPress={() =>
              setState({
                ...state,
                notifications: {
                  ...state.notifications,
                  newsletter: !state.notifications.newsletter,
                },
              })
            }
          />
        </List.Section>

        <View style={[Styles.content, { marginBottom: 16, rowGap: 16 }]}>
          <View
            style={{
              columnGap: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              mode="contained"
              style={{ width: "47%" }}
              onPress={() => {
                (async () => {
                  await SecureStore.setItemAsync("data", JSON.stringify(state));

                  // Display success message
                  setMessage("Changes saved");
                  setDisplayMessage(true);
                })();
              }}
            >
              Save Changes
            </Button>
            <Button
              mode="outlined"
              style={{ width: "47%" }}
              onPress={() => router.back()}
            >
              Discard Changes
            </Button>
          </View>

          <Button
            mode="contained-tonal"
            onPress={() => {
              (async () => {
                await SecureStore.deleteItemAsync("data");
              })();

              router.replace("/login");
            }}
          >
            Logout
          </Button>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Account;
