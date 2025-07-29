import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<View className="px-10 mt-8 gap-4">
				<CustomButton
					className="mb-2"
					color="primary"
					onPress={() => router.push("/tabs/(stack)/productos")}
				>
					Productos
				</CustomButton>

				<CustomButton
					className="mb-2"
					color="secondary"
					onPress={() => router.push("/tabs/(stack)/profile")}
				>
					Perfil
				</CustomButton>

				<CustomButton
					className="mb-2"
					color="tertiary"
					onPress={() => router.push("/tabs/(stack)/settings")}
				>
					Configuración
				</CustomButton>

				<Link href="/tabs/(stack)/productos" asChild>
					{/* La prop asChild le dice al componente Link que no renderice su propio elemento DOM/componente, hace que el CustomButton herede la funcionalidad de navegación del Link padre. */}
					<CustomButton variant="text-only" color="secondary">
						Productos
					</CustomButton>
				</Link>

				{/* <Link className="mt-5" href="/productos">Productos{' '}</Link>
				<Link className="mt-5" href="/profile">Profile{' '}</Link>
				<Link className="mt-5" href="/settings">Settings{' '}</Link> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
