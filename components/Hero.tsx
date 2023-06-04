/**
 * Hero
 */

import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Hero = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        borderRadius: 10,
        marginVertical: 16,
        paddingVertical: 32,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.primary,
      }}
    >
      <Text variant="displayMedium" style={{ color: theme.colors.onPrimary }}>
        Little Lemon
      </Text>
      <Text style={{ color: theme.colors.onPrimary }}>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist
      </Text>
    </View>
  );
};

export default Hero;
