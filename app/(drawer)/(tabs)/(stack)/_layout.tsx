import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
import React from "react";

const StackLayout = () => {
	const navigation = useNavigation();
	const router = useRouter();

	const onHeaderLeft = (canGoBack: boolean | undefined) => {
		if (canGoBack) {
			// navigation.dispatch(StackActions.pop());
			router.back();
			return;
		}
		navigation.dispatch(DrawerActions.toggleDrawer);
	};

	return (
		<Stack
			screenOptions={{
				headerShown: true, // para que no se muestre el header puesto que usamos el del tabs
				//  headerStyle: {
				// 	backgroundColor: "blue",
				//  },
				//  headerTintColor: "white",
				//  headerTitleStyle: {
				// 	fontFamily: "WorkSans-Medium",
				//  },
				headerShadowVisible: false,
				contentStyle: {
					backgroundColor: "white",
				},
				headerLeft: ({ tintColor, canGoBack }) => (
					<Ionicons
						name={canGoBack ? "arrow-back-outline" : "grid-outline"}
						className="mr-5"
						size={20}
						color={tintColor}
						onPress={() => onHeaderLeft(canGoBack)}
					/>
				),
			}}
		>
			<Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
			<Stack.Screen
				name="profile/index"
				options={{ title: "Profile Screen" }}
			/>
			<Stack.Screen
				name="productos/index"
				options={{ title: "Productos Screen" }}
			/>
			<Stack.Screen
				name="settings/index"
				options={{ title: "Settings Screen" }}
			/>
		</Stack>
	);
};

export default StackLayout;
