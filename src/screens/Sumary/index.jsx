import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../../global/global-style";

import { styles } from "./styles";

export function Sumary() {
  const navigation = useNavigation();

  return (
    <View style={[globalStyle.container, styles.container]}>
      <Text style={styles.text}>O QUE É O AVC / AVE</Text>
      <View style={styles.dashImage}>
        <ImageBackground
          imageStyle={{ resizeMode: "contain" }}
          source={require("../../assets/dash.jpg")}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              marginHorizontal: 30,
            }}
          >
            <Text style={styles.textDash}>
              AVC (Acidente Vascular Cerebral) é o rompimento ou entupimento das
              veias que levam sangue para o cérebro.
            </Text>

            <Text style={styles.textDash}>
              QUANTO MAIS CEDO DETECTADO E TRATATO, MELHORES AS CHANCES DE
              RECUPERAÇÃO!
            </Text>
          </View>
        </ImageBackground>
        <TouchableOpacity
          style={{
            height: "25%",
            justifyContent: "center",
            top: "-15%",
          }}
        >
          <View>
            <ImageBackground
              source={require("../../assets/arrow.png")}
              imageStyle={{
                resizeMode: "contain",
              }}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Text
                onPress={() => navigation.navigate("QuestionTest")}
                style={styles.textArrow}
              >
                SEGUIR
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
