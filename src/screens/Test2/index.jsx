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
export function Test2() {
	const { params } = useRoute();
	const navigation = useNavigation();

	return (
		<>
			<View style={[globalStyle.container, styles.container]}>
				<TitleBallon title={"Teste 2"} fontSize={36} />

				<View>
					<Text style={[globalStyle.text, { marginBottom: 30 }]}>
						FECHE OS OLHOS E ESTENDA OS BRAÇOS PARA FRENTE
					</Text>

					<Text style={styles.textPoints}>
						Como seus braços ficaram?
					</Text>

					<View style={styles.buttons}>
						<CircleButton
							mode="dark"
							onPress={() =>
								navigation.navigate("Test3", {
									value: params.value + 0,
								})
							}
						>
							<Text style={styles.text}>
								Os dois não mexem, ou se mexem igualmente
							</Text>
						</CircleButton>
						<CircleButton
							mode="dark"
							onPress={() =>
								navigation.navigate("Test3", {
									value: params.value + 1,
								})
							}
						>
							<Text style={styles.text}>
								Tive fraqueza e os braços não estão iguais
							</Text>
						</CircleButton>
					</View>

					<View style={styles.buttons}>
						<Image
							source={require("../../assets/corpo-certo.png")}
							style={{ resizeMode: "contain", height: 140 }}
						/>
						<Image
							source={require("../../assets/corpo-errado.png")}
							style={{ width: 150, height: 150 }}
						/>
					</View>
				</View>

				<Image
					source={require("../../assets/grama.png")}
					style={styles.footer}
				/>
			</View>
		</>
	);
}
