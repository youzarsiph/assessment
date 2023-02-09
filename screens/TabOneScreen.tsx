import Hero from "../components/Hero";
import Button from "../components/Button";
import MenuItem from "../components/MenuItem";
import { RootTabScreenProps } from "../types";
import { FlashList } from "@shopify/flash-list";
import * as SecureStore from "expo-secure-store";
import { StyleSheet, View, Text, ScrollView } from "react-native";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  let firstName = SecureStore.getItemAsync("firstName");
  let email = SecureStore.getItemAsync("email");

  const item = {
    title: "Greek Salad",
    price: 12.99,
    source: require("../assets/images/items/GreekSalad.png"),
    description: "Famous Greek Salad",
  };

  const popularItems = [
    {
      title: "Lemon Dessert",
      price: 6.99,
      source: require("../assets/images/items/Lemon.png"),
      description: "Famous Greek Salad",
    },
    {
      title: "Pasta",
      price: 18.99,
      source: require("../assets/images/items/Pasta.png"),
      description: "Famous Greek Salad",
    },
    {
      title: "Bruschetta",
      price: 7.99,
      source: require("../assets/images/items/Bruschetta.png"),
      description: "Famous Greek Salad",
    },
  ];

  return (
    <ScrollView>
      <Hero />
      <View style={styles.titleBar}>
        <Text style={styles.title}>Specials Of This Week</Text>
      </View>
      <View style={styles.container}>
        <MenuItem {...item} />
      </View>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Popular</Text>
      </View>
      <View style={styles.container}>
        <FlashList
          data={popularItems}
          estimatedItemSize={10}
          renderItem={(item) => <MenuItem {...item.item} />}
        />
        <Button
          outline
          color="secondary"
          onPress={() => {
            navigation.navigate("TabTwo");
          }}
        >
          Explore Our Menu
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    minWidth: "10%",
  },
  titleBar: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
