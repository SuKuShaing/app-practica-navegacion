import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
	const navigation = useNavigation();

	const onToggleDrawer = () => {
		navigation.dispatch(DrawerActions.toggleDrawer);
	}

	return (
		<SafeAreaView>
			<View className="px-10 mt-8 gap-4">
				<CustomButton
					className="mb-2"
					color="primary"
					onPress={() => router.push("/productos")}
				>
					Productos
				</CustomButton>

				<CustomButton
					className="mb-2"
					color="secondary"
					onPress={() => router.push("/profile")}
				>
					Perfil
				</CustomButton>

				<CustomButton
					className="mb-2"
					color="tertiary"
					onPress={() => router.push("/settings")}
				>
					Configuración
				</CustomButton>

				<Link href="/productos" asChild>
					{/* La prop asChild le dice al componente Link que no renderice su propio elemento DOM/componente, hace que el CustomButton herede la funcionalidad de navegación del Link padre. */}
					<CustomButton variant="text-only" color="secondary">
						Productos
					</CustomButton>
				</Link>

				<CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>

				{/* <Link className="mt-5" href="/productos">Productos{' '}</Link>
				<Link className="mt-5" href="/profile">Profile{' '}</Link>
				<Link className="mt-5" href="/settings">Settings{' '}</Link> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
