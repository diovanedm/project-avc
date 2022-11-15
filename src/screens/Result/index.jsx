import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
export function Result() {
	const { params } = useRoute();
	const navigation = useNavigation();

	const [text, setText] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		getResult();
	}, []);

	async function getResult() {
		try {
			console.log(params.value);
			if (params.value !== 0) {
				setText("PROCURE POR ATENDIMETO IMEDIATAMENTE");
				Alert.alert(
					"Aviso!",
					"Procure um profissional da saúde ou entre em contato com o pronto socorro",
					[
						{
							text: "Ir para o hospital",
							onPress: () => openMap(),
						},
						{
							text: "Ligar 192",
							onPress: () => callNumber(),
							style: "destructive",
						},
					]
				);
				return;
			}
			setText(
				"NÃO HÁ RISCO DE AVE. CASO TENHA DÚVIDA BUSQUE POR ATEDIMENTO"
			);
			Alert.alert("UFA 😅", "Está tudo bem, não é um AVC", [
				{
					text: "Voltar para o início",
					onPress: () => navigation.navigate("Welcome"),
				},
			]);
		} catch (error) {
			console.log(error);
		}
	}

	function callNumber() {
		const phone = 192;
		let phoneNumber = 192;
		if (Platform.OS !== "android") {
			phoneNumber = `telprompt:${phone}`;
		} else {
			phoneNumber = `tel:${phone}`;
		}
		Linking.canOpenURL(phoneNumber)
			.then((supported) => {
				if (!supported) {
					Alert.alert("Phone number is not available");
				} else {
					return Linking.openURL(phoneNumber);
				}
			})
			.catch((err) => console.log(err));
	}

	async function openMap() {
		try {
			setLoading(true);
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				Alert.alert("Permissão de acesso a localização negada");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			const { latitude, longitude } = location.coords;

			Linking.openURL(
				`https://www.google.com/maps/search/upas/@${latitude},${longitude}`
			);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<View style={[globalStyle.container, styles.container]}>
				<TitleBallon title={"RESULTADO DO TESTE"} fontSize={36} />

				<View>
					<Text style={[globalStyle.text, { marginBottom: 30 }]}>
						{text}
					</Text>

					<Text style={styles.textPoints}>
						O teste que você acabou de realizar é uma avaliação
						pré-hospitalar de AVE/AVC, denominado Escala de
						Cincinnati
					</Text>
				</View>

				<Image
					source={require("../../assets/grama.png")}
					style={styles.footer}
				/>
			</View>
			{isLoading && (
				<View
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0 , 0.7)",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
					}}
				>
					<ActivityIndicator size="large" color="#3e8974" />
				</View>
			)}
		</>
	);
}
