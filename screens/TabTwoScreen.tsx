import MenuItem from "../components/MenuItem";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

export default function TabTwoScreen() {
  const categories = ["Starters", "Mains", "Appetizers", "Desserts"];

  const menuitems = [
    {
      title: "Greek Salad",
      price: 12.99,
      source: require("../assets/images/items/GreekSalad.png"),
      description: "Greek Salad at your hands",
    },
    {
      title: "Bruschetta",
      price: 7.99,
      source: require("../assets/images/items/Bruschetta.png"),
      description: "Greek Salad at your hands",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.filters}>
        {categories.map((item) => {
          return (
            <View key={item}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  console.log(item);
                }}
                style={styles.filterItem}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.container}>
        <FlashList
          data={menuitems}
          renderItem={(item) => <MenuItem {...item.item} />}
          estimatedItemSize={10}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  filters: {
    paddingVertical: 16,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  filterItem: {
    marginLeft: 8,
    borderRadius: 20,
    color: "#495e57",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#495e5722",
  },
});
