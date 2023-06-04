/**
 * Login screen
 */

import React from "react";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Button, TextInput } from "react-native-paper";
import Styles from "../styles";
import { Hero, Screen } from "../components";

const Login = () => {
  // Router
  const router = useRouter();

  // State
  const [state, setState] = React.useState<{
    email: string;
    username: string;
  }>({
    username: "",
    email: "",
  });

  return (
    <Screen options={{ title: "Login" }}>
      <ScrollView>
        <View style={Styles.content}>
          <Hero />

          <View style={{ gap: 16 }}>
            <TextInput
              value={state.username}
              mode={"outlined"}
              label={"Username"}
              placeholder={"Required"}
              onChangeText={(value) => setState({ ...state, username: value })}
            />

            <TextInput
              value={state.email}
              mode={"outlined"}
              label={"Password"}
              placeholder={"Required"}
              onChangeText={(value) => setState({ ...state, email: value })}
            />

            <Button
              mode="contained"
              disabled={state.username === "" && state.email === ""}
              onPress={() => {
                (async () => {
                  await SecureStore.setItemAsync(
                    "data",
                    JSON.stringify({
                      username: state.username,
                      firstName: "",
                      lastName: "",
                      email: state.email,
                      phoneNumber: "",
                      notifications: {
                        status: true,
                        password: true,
                        offers: true,
                        newsletter: true,
                      },
                    })
                  );

                  router.replace("/");
                })();
              }}
            >
              Login
            </Button>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Login;
