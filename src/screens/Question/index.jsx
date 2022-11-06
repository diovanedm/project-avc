import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { CircleButton } from "../../componets/CircleButton";
import { FooterPlant } from "../../componets/FooterPlant";
import { globalStyle } from "../../global/global-style";

import { styles } from "./styles";

export function QuestionTest() {
	const navigation = useNavigation();

	return (
		<View style={[styles.container]}>
			<Text style={styles.text}>GOSTARIA DE REALIZAR O TESTE?</Text>

			<View style={styles.buttons}>
				<CircleButton
					onPress={() => navigation.navigate("Recommendations")}
				>
					<Text style={styles.textButton}>REALIZAR O TESTE</Text>
				</CircleButton>

				<CircleButton onPress={() => navigation.navigate("Welcome")}>
					<Text style={styles.textButton}>NÃO, OBRIGADO (A)</Text>
				</CircleButton>
			</View>
		</View>
	);
}
