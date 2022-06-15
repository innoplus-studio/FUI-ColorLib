import { FColorTypes, FUseColorProps } from "./types";

const FUseColor = (props: FUseColorProps) => {
	switch (props.colorName) {
		// =======================================================================
		// Theme Colors
		case "Main":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FThemeColors.MAIN.DM
				: FColorTypes.FThemeColors.MAIN.LM;

		case "Sub":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FThemeColors.SUB.DM
				: FColorTypes.FThemeColors.SUB.LM;
		// =======================================================================
		// Primary Colors
		case "Black":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FPrimaryColors.BLACK.DM
				: FColorTypes.FPrimaryColors.BLACK.LM;

		case "Dark":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FPrimaryColors.DARK.DM
				: FColorTypes.FPrimaryColors.DARK.LM;

		case "Grey":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FPrimaryColors.GREY.DM
				: FColorTypes.FPrimaryColors.GREY.LM;

		case "Stroke Grey":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FPrimaryColors.STROKE_GREY.DM
				: FColorTypes.FPrimaryColors.STROKE_GREY.LM;

		case "BG Light":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FPrimaryColors.BG_LIGHT.DM
				: FColorTypes.FPrimaryColors.BG_LIGHT.LM;

		case "White":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FPrimaryColors.WHITE.DM
				: FColorTypes.FPrimaryColors.WHITE.LM;
		// =======================================================================
		// Secondary Colors
		case "Red":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FSecondaryColors.RED.DM
				: FColorTypes.FSecondaryColors.RED.LM;

		case "Orange":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FSecondaryColors.ORANGE.DM
				: FColorTypes.FSecondaryColors.ORANGE.LM;

		case "Yellow":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FSecondaryColors.YELLOW.DM
				: FColorTypes.FSecondaryColors.YELLOW.LM;

		case "Green":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FSecondaryColors.GREEN.DM
				: FColorTypes.FSecondaryColors.GREEN.LM;

		case "Blue":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FSecondaryColors.BLUE.DM
				: FColorTypes.FSecondaryColors.BLUE.LM;

		case "Purple":
			return props.isDarkMode
				? props.optionalColor ?? FColorTypes.FSecondaryColors.PURPLE.DM
				: FColorTypes.FSecondaryColors.PURPLE.LM;
		// =======================================================================
		// Subject Colors
		// ...
		// =======================================================================

		default:
			return FColorTypes.FPrimaryColors.BLACK.LM;
	}
};

export { FColorTypes, FUseColor };
