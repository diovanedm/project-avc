import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

export function FooterPlant() {
  return (
    <View style={styles.container}>
      <Image style={styles.plant} source={require("../../assets/planta.png")} />
      <Image
        style={[styles.plant, { transform: [{ scaleX: -1 }] }]}
        source={require("../../assets/planta2.png")}
      />
    </View>
  );
}
