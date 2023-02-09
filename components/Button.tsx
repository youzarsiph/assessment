import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  outline?: boolean;
  color?: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  let style = { ...styles.container };
  let textStyle = { ...styles.text };

  if (props.outline) {
    switch (props.color) {
      case "secondary":
        style = { ...style, ...styles.outlineSecondary };
        textStyle = { ...textStyle, ...styles.textOutlineSecondary };
        break;

      default:
        style = { ...style, ...styles.outlinePrimary };
        textStyle = { ...textStyle, ...styles.textOutlinePrimary };
        break;
    }
  } else {
    switch (props.color) {
      case "secondary":
        style = { ...style, ...styles.secondary };
        textStyle = { ...textStyle, ...styles.textSecondary };
        break;

      default:
        style = { ...style, ...styles.primary };
        textStyle = { ...textStyle, ...styles.textPrimary };
        break;
    }
  }

  return (
    <TouchableOpacity {...props} activeOpacity={0.9} style={style}>
      <Text style={textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primary: {
    backgroundColor: "#495e57",
  },
  textPrimary: {
    color: "#fff",
  },
  outlinePrimary: {
    borderWidth: 1,
    borderColor: "#495e57",
    backgroundColor: "#fff",
  },
  textOutlinePrimary: {
    color: "#495e57",
  },
  secondary: {
    backgroundColor: "#f4ce14",
  },
  textSecondary: {
    color: "#000",
  },
  outlineSecondary: {
    borderWidth: 1,
    borderColor: "#f4ce14",
    backgroundColor: "#fff",
  },
  textOutlineSecondary: {
    color: "#f4ce14",
  },
});
