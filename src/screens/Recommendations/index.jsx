import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { CircleButton } from "../../componets/CircleButton";
import { TitleBallon } from "../../componets/TitleBallon";
import { globalStyle } from "../../global/global-style";

import { styles } from "./styles";

export function Recommendations() {
	const navigation = useNavigation();

	return (
		<View style={[globalStyle.container, styles.container]}>
			<TitleBallon theme="dark" title={"TESTE DE\nSINTOMAS DE\nAVC"} />

			<View>
				<Text style={[globalStyle.text, { marginBottom: 30 }]}>
					Recomendações
				</Text>

				<View style={[styles.point, { marginBottom: 30 }]}>
					<Text style={{ color: "#3e8974", marginTop: 10 }}>
						{"\u2B24"}{" "}
					</Text>
					<Text style={styles.textPoints}>
						Realize acompanhado
						{"\n"}de alguém
					</Text>
				</View>

				<View style={[styles.point, { marginBottom: 30 }]}>
					<Text style={{ color: "#3e8974", marginTop: 10 }}>
						{"\u2B24"}{" "}
					</Text>
					<Text style={styles.textPoints}>
						Caso esteja sozinho (a),{"\n"}utilize um espelho
					</Text>
				</View>

				<View
					style={{
						width: "100%",
						alignItems: "center",
					}}
				>
					<CircleButton
						mode="dark"
						onPress={() => navigation.navigate("Test1")}
					>
						<Text style={styles.text}>Estou pronto</Text>
					</CircleButton>
				</View>
			</View>

			<Image
				source={require("../../assets/grama.png")}
				style={styles.footer}
			/>
		</View>
	);
}
