import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
		"WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
		"WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
	});

	useEffect(() => {
		if (error) {
			console.error("Error loading fonts:", error);
		}

		if (fontsLoaded) {
			console.log("Fonts loaded successfully!");
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) return null;

	// return <Stack />;
	return <Slot />;
};
export default RootLayout;
