import { forwardRef, Ref } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
	children: string;
	color?: "primary" | "secondary" | "tertiary";
	variant?: "contained" | "text-only";
	className?: string;
}

// forwardRef es una función de React que permite que un componente funcional (componente funcional son funciones de Js/Ts que retornan elementos JSX) reciba y pase hacia adelante una referencia (ref) a un elemento hijo
// ref es una referencia a un elemento del DOM, es una forma de acceder a los elementos del DOM desde el componente padre
const CustomButton = forwardRef(
	(
		{
			children,
			color = "primary",
			onPress,
			onLongPress,
			variant = "contained",
			className,
		}: Props,
		ref: Ref<View>
	) => {
		const btnColor = {
			primary: "bg-primary",
			secondary: "bg-secondary",
			tertiary: "bg-tertiary",
		}[color];
		
		const textColor = {
			primary: "text-primary",
			secondary: "text-secondary",
			tertiary: "text-tertiary",
		}[color];

		if (variant === "text-only") {
			return (
				<Pressable
					className={`p-3 ${className}`}
					onPress={onPress}
					onLongPress={onLongPress}
					ref={ref}
				>
					<Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
				</Pressable>
			);
		}

		return (
			<Pressable
				className={`p-3 rounded-md ${btnColor} active:opacity-80 ${className}`}
				onPress={onPress}
				onLongPress={onLongPress}
				ref={ref}
			>
				<Text className={`text-white text-center font-work-medium`}>{children}</Text>
			</Pressable>
		);
	}
);

export default CustomButton;
