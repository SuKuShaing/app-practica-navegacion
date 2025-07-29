import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "green", tabBarShowLabel: false }}>
            {/* tabBarShowLabel para que no se muestre el label de la tab */}
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
