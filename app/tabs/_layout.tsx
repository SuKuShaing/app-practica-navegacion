import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{ tabBarActiveTintColor: "indigo", headerShown: false }}
			>
			{/* headerShown, para que no se muestre el header puesto que usamos el del tabs */}
			{/* screenOptions, desde ahí se se puede configurar el tabBar */}
			{/* tabBarShowLabel: false, para que no se muestre el label de la tab */}
			<Tabs.Screen
				name="(stack)"
				options={{
					title: "stack",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="person-outline" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="home/index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorites/index"
				options={{
					title: "Favorites",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="star-outline" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
