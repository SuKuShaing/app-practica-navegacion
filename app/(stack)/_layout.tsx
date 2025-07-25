import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
			<Stack.Screen name="profile/index" options={{ title: "Profile Screen" }} />
			<Stack.Screen name="productos/index" options={{ title: "Productos Screen" }} />
			<Stack.Screen name="settings/index" options={{ title: "Settings Screen" }} />
		</Stack>
	);
};

export default StackLayout;
