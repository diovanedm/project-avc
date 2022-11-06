import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		marginTop: 30,
	},
	text: {
		fontSize: 24,
		color: "#b7d1a3",
		fontWeight: "bold",
		textAlign: "center",
	},
	textPoints: {
		fontSize: 24,
		color: "#3e8974",
		fontWeight: "bold",
		textAlign: "center",
	},
	point: {
		flexDirection: "row",
		justifyContent: "center",
	},
	footer: {
		resizeMode: "contain",
		width: "100%",
		marginTop: -100,
		bottom: -10,
	},
});
