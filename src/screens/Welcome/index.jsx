import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { CircleButton } from "../../componets/CircleButton";
import { FooterPlant } from "../../componets/FooterPlant";

import { styles } from "./styles";

export function Welcome() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>BEM VINDOS AO NOSSO APLICATIVO!</Text>
			<Text style={styles.text}>COMO PODEMOS TE AJUDAR? </Text>

			<View style={styles.buttons}>
				<CircleButton onPress={() => navigation.navigate("Sumary")}>
					<Text style={styles.textButton}>
						Quero saber os sinais e sintomas do AVC
					</Text>
				</CircleButton>

				<CircleButton
					onPress={() => navigation.navigate("Recommendations")}
				>
					<Text style={styles.textButton}>Fazer o teste</Text>
				</CircleButton>
			</View>
			<FooterPlant />
		</View>
	);
}
