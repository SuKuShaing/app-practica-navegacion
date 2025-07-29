import { Redirect } from "expo-router";

const App = () => {
	// return <Redirect href="/(stack)/home" />; // esto redirige a la ruta /productos
	return <Redirect href="/tabs/" />; // esto redirige a la ruta /productos

	// return (
	// 	<SafeAreaView>
	// 		<View className="mt-6">
	// 			<Text
	// 				className="text-red-500 text-5xl"
	// 				style={{ fontFamily: "WorkSans-Black" }}
	// 			>
	// 				Hola seba
	// 			</Text>

	// 			<Text className="text-primary text-4xl font-work-black">Hola seba</Text>
	// 			<Text className="text-secondary text-3xl font-work-light">Hola seba</Text>
	// 			<Text className="text-tertiary text-2xl font-work-medium">Hola seba</Text>
	// 			<Text className="text-xl">Hola seba</Text>

	// 			<Link href='/productos' className="text-primary text-4xl font-work-black">Productos</Link>
	// 		</View>
	// 	</SafeAreaView>
	// );
};

export default App;
