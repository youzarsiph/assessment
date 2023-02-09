import Button from "./Button";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Hero() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Little Lemon</Text>
        <Text style={{ ...styles.title, fontSize: 20, color: "#fff" }}>
          Chicago
        </Text>
        <Image
          style={styles.img}
          source={require("../assets/images/intro.jpg")}
        />
        <Text style={{ color: "#fff", marginBottom: 16 }}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </Text>
        <Button color="secondary">Search</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#495e57",
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f4ce14",
    marginBottom: 16,
  },
  img: {
    height: 340,
    width: "100%",
    borderRadius: 10,
    marginBottom: 16,
  },
});
