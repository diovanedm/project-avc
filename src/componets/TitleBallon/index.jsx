import React from "react";
import { ImageBackground, Text, View } from "react-native";

import { styles } from "./styles";

export function TitleBallon({ title, theme, fontSize = 24 }) {
	return (
		<View style={styles.container}>
			{theme === "dark" ? (
				<ImageBackground
					resizeMode="stretch"
					style={styles.image}
					source={require("../../assets/balao-titulo.png")}
				>
					<Text style={[styles.text, { fontSize: fontSize }]}>
						{title}
					</Text>
				</ImageBackground>
			) : (
				<ImageBackground
					resizeMode="stretch"
					style={styles.image}
					source={require("../../assets/balao-titulo-claro.png")}
				>
					<Text style={[styles.textDark, { fontSize: fontSize }]}>
						{title}
					</Text>
				</ImageBackground>
			)}
		</View>
	);
}
