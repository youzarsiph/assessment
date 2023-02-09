import { View, Text, Image, StyleSheet } from "react-native";

interface MenuItemProps {
  title: string;
  price: number;
  source: (id: string) => any;
  description: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.desc}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={{ marginBottom: 16 }}>{props.description}</Text>
          <Text style={styles.price}>${props.price}</Text>
        </View>
        <Image style={styles.img} source={props.source} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
  },
  desc: {
    width: "60%",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  img: {
    width: "40%",
    height: 100,
    borderRadius: 10,
  },
});
