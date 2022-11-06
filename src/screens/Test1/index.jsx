import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { CircleButton } from "../../componets/CircleButton";
import { TitleBallon } from "../../componets/TitleBallon";
import { globalStyle } from "../../global/global-style";

import { styles } from "./styles";

export function Test1() {
	const navigation = useNavigation();

	return (
		<View style={[globalStyle.container, styles.container]}>
			<TitleBallon title={"Teste 1"} fontSize={36} />

			<View>
				<Text style={[globalStyle.text, { marginBottom: 30 }]}>
					SORRIA! (para o espelho ou para alguém)
				</Text>

				<Text style={styles.textPoints}>
					Com qual imagem seu sorriso se assemelha?
				</Text>

				<View style={styles.buttons}>
					<CircleButton
						mode="dark"
						onPress={() =>
							navigation.navigate("Test2", { value: 0 })
						}
					>
						<Text style={styles.text}>
							Os dois lados estão iguais
						</Text>
					</CircleButton>
					<CircleButton
						mode="dark"
						onPress={() =>
							navigation.navigate("Test2", { value: 1 })
						}
					>
						<Text style={styles.text}>
							Os lados estão diferentes
						</Text>
					</CircleButton>
				</View>

				<View style={styles.buttons}>
					<Image
						source={require("../../assets/rosto-certo.png")}
						style={{ width: 150, height: 150 }}
					/>
					<Image
						source={require("../../assets/rosto-errado.png")}
						style={{ width: 150, height: 150 }}
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
