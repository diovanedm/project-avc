import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
	Image,
	Text,
	View,
	Linking,
	Alert,
	ActivityIndicator,
} from "react-native";
import { CircleButton } from "../../componets/CircleButton";
import { TitleBallon } from "../../componets/TitleBallon";
import { globalStyle } from "../../global/global-style";
import { styles } from "./styles";
import * as Location from "expo-location";
export function Test3() {
	const { params } = useRoute();
	const navigation = useNavigation();

	return (
		<View style={[globalStyle.container, styles.container]}>
			<TitleBallon title={"Teste 3"} fontSize={36} />

			<View>
				<Text style={[globalStyle.text, { marginBottom: 30 }]}>
					REPITA A FRASE: ”O RATO ROEU A ROUPA DO REI DE ROMA”
				</Text>

				<Text style={styles.textPoints}>
					Como as palavras foram pronunciadas?
				</Text>

				<View style={styles.buttons}>
					<CircleButton
						mode="dark"
						onPress={() =>
							navigation.navigate("Result", {
								value: params.value + 0,
							})
						}
					>
						<Text style={styles.text}>
							Foi repetida com clareza
						</Text>
					</CircleButton>
					<CircleButton
						mode="dark"
						onPress={() =>
							navigation.navigate("Result", {
								value: params.value + 1,
							})
						}
					>
						<Text style={styles.text}>
							Não falei corretamente ou não consegui falar
						</Text>
					</CircleButton>
				</View>

				<View style={styles.buttons}>
					<Image
						source={require("../../assets/fala-ok.png")}
						style={{ resizeMode: "contain", height: 100 }}
					/>
					<Image
						source={require("../../assets/fala-ruim.png")}
						style={{ resizeMode: "contain", height: 100 }}
					/>
				</View>
			</View>

			<Image
				source={require("../../assets/grama.png")}
				style={styles.footer}
			/>
		</View>
	);
}
