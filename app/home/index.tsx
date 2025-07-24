import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<View className="px-10 mt-6">
				<Link className="mt-5" href="/productos">Productos{' '}</Link>
				<Link className="mt-5" href="/profile">Profile{' '}</Link>
				<Link className="mt-5" href="/settings">Settings{' '}</Link>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
