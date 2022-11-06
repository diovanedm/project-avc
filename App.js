import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QuestionTest } from "./src/screens/Question";
import { Recommendations } from "./src/screens/Recommendations";
import { Result } from "./src/screens/Result";
import { Sumary } from "./src/screens/Sumary";
import { Test1 } from "./src/screens/Test1";
import { Test2 } from "./src/screens/Test2";
import { Test3 } from "./src/screens/Test3";
import { Welcome } from "./src/screens/Welcome";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			{/* content */}
			<NavigationContainer theme={{ colors: { background: "#fff" } }}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Sumary" component={Sumary} />
					<Stack.Screen
						name="QuestionTest"
						component={QuestionTest}
					/>
					<Stack.Screen
						name="Recommendations"
						component={Recommendations}
					/>
					<Stack.Screen name="Test1" component={Test1} />
					<Stack.Screen name="Test2" component={Test2} />
					<Stack.Screen name="Test3" component={Test3} />
					<Stack.Screen name="Result" component={Result} />
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}
