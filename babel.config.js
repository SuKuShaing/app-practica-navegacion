module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			["babel-preset-expo", { jsxImportSource: "nativewind" }],
			"nativewind/babel",
		],
		plugins: [
			// NOTA: Este plugin debe aparecer antes que el plugin de módulos anónimos.
			// "expo-router/babel",
			// NOTA: Este plugin debe aparecer antes que el plugin de generador.
			"react-native-reanimated/plugin",
		],
	};
};
