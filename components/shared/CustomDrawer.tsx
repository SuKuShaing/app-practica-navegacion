import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {      // Aquí le pasamos todos los Drawer.Screen en las props
	return (
		<DrawerContentScrollView scrollEnabled={false} {...props}>
			<View className="justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
				<View className="justify-center items-center bg-white rounded-full h-24 w-24">
					<Text className="text-2xl font-bold">SS</Text>
				</View>
			</View>

			{/* para que se vea el contenido del drawer */}
			<DrawerItemList {...props} />
			<Text className="text-2xl font-bold">SS</Text>
		</DrawerContentScrollView>
	);
};

export default CustomDrawer;
