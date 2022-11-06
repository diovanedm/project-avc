import React from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

export function CircleButton({
  children,
  styleContainer,
  mode = "light",
  ...rest
}) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View
        accessible
        accessibilityRole="button"
        style={[
          mode === "light" ? styles.container : styles.containerDark,
          styleContainer,
        ]}
      >
        {children}
      </View>
    </RectButton>
  );
}
