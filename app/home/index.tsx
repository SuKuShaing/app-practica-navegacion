import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<View className="px-10 mt-8 gap-4">
				<Link href="/profile" asChild> 
					{/* La prop asChild le dice al componente Link que no renderice su propio elemento DOM/componente, hace que el CustomButton herede la funcionalidad de navegación del Link padre. */}
					<CustomButton color="secondary">Profile</CustomButton>
				</Link>
				
				<CustomButton 
				className="mb-10"
				color="primary" onPress={() => router.push("/productos")}>
					Productos
				</CustomButton>

				<CustomButton variant="text-only" onPress={() => router.push("/settings")}>
					Settings
				</CustomButton>

				{/* <Link className="mt-5" href="/productos">Productos{' '}</Link>
				<Link className="mt-5" href="/profile">Profile{' '}</Link>
				<Link className="mt-5" href="/settings">Settings{' '}</Link> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
