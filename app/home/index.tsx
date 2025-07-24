import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<View className="px-10 mt-8 gap-5">
				<Link href="/profile" asChild>
					<CustomButton color="secondary">Profile</CustomButton>
				</Link>
				<CustomButton color="primary" onPress={() => router.push("/productos")}>
					Productos
				</CustomButton>

				{/* <Link className="mt-5" href="/productos">Productos{' '}</Link>
				<Link className="mt-5" href="/profile">Profile{' '}</Link>
				<Link className="mt-5" href="/settings">Settings{' '}</Link> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
