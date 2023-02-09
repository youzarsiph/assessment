import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

export default function Input(props: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.placeholder}</Text>
      <TextInput {...props} style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#495e57",
  },
});
