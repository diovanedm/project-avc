import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.clouds}>
        <Image
          style={[styles.cloudImage, { right: 50, marginTop: 70 }]}
          source={require("../../assets/nuvem.png")}
        />

        <Image
          style={[styles.cloudImage, { left: 50 }]}
          source={require("../../assets/nuvem.png")}
        />
      </View>

      <View style={styles.center}>
        <Image
          style={styles.seniors}
          source={require("../../assets/idosos.png")}
        />

        <Text style={styles.text}>Detecção rápida de AVC</Text>
      </View>

      <View style={styles.footer}>
        <Image
          style={styles.plant}
          source={require("../../assets/planta.png")}
        />
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Image
          style={[styles.plant, { transform: [{ scaleX: -1 }] }]}
          source={require("../../assets/planta2.png")}
        />
      </View>
    </View>
  );
}
