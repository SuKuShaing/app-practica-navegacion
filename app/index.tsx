import { SafeAreaView, Text, View } from "react-native";

const App = () => {
	return (
		<SafeAreaView>
			<View className="mt-6">
				<Text
					className="text-red-500 text-5xl"
					style={{ fontFamily: "WorkSans-Black" }}
				>
					Hola seba
				</Text>

				<Text className="text-blue-500 text-4xl font-work-black">Hola seba</Text>
				<Text className="text-green-500 text-3xl font-work-light">Hola seba</Text>
				<Text className="text-violet-500 text-2xl font-work-medium">Hola seba</Text>
				<Text className="text-xl">Hola seba</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;
