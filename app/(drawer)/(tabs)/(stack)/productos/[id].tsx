import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductsScreen = () => {
	const { id } = useLocalSearchParams();
    const navigation = useNavigation();

	const product = products.find((product) => product.id === id);

    if (!product) {
		return <Redirect href="/" />;
	}

    // Actualizar el título de la pantalla dinámicamente según el producto
	useEffect(() => {
		if (product) {
			navigation.setOptions({ title: product?.title ?? "Producto" });
		}
	}, [product, navigation]);

	return (
		<View className="px-5 mt-2">
			<Text className="font-work-black text-2xl">{product.title}</Text>
			<Text className="font-work-light ">{product.description}</Text>
			<Text className="font-work-black ">{product.price}</Text>
		</View>
	);
};

export default ProductsScreen;
