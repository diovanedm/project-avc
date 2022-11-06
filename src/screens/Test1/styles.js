import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		marginTop: 30,
	},
	text: {
		fontSize: 18,
		color: "#b7d1a3",
		fontWeight: "bold",
		textAlign: "center",
	},
	textPoints: {
		fontSize: 22,
		color: "#3e8974",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 30,
	},
	point: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttons: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 15,
	},
	footer: {
		resizeMode: "contain",
		width: "100%",
		marginTop: -150,
		bottom: -20,
		left: 45,
	},
});
