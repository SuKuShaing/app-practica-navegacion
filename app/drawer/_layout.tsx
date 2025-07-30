import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
	return (
		<Drawer
			drawerContent={CustomDrawer} // por defecto se envían todos los Drawer.Screen en las props
			screenOptions={{
				// headerShown: false,
				overlayColor: "rgba(0, 0, 0, 0.4)", // color de fondo del overlay
				// drawerActiveBackgroundColor: "rgba(0, 0, 0, 0.4)", // colocor de fondo del drawer activo
				drawerActiveTintColor: "indigo", // color de texto del drawer activo
				drawerInactiveTintColor: "black", // color de texto del drawer inactivo
				headerShadowVisible: false, // para que no se vea la sombra del header
				// tamaño del drawer
				drawerType: "slide", // tipo de salida del drawer (front, back, slide, permanent)
				drawerPosition: "left", // posición del drawer (left, right)
				drawerStyle: {
					width: 280,
					// backgroundColor: "blue", // color de fondo del drawer
				},
			}}
		>
			<Drawer.Screen
				name="user/index" // This is the name of the page and must match the url from root
				options={{
					drawerLabel: "User",
					title: "overview",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="person-circle-outline" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="schedule/index" // This is the name of the page and must match the url from root
				options={{
					drawerLabel: "Schedule",
					title: "overview",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="calendar-outline" color={color} size={size} />
					),
				}}
			/>
		</Drawer>
	);
};

export default DrawerLayout;
