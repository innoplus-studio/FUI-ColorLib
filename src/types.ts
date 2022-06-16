// Merge Enum to single Enum
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript

import { PrimaryColors } from "./Primary";
import { PrimaryColorNames } from "./Primary/types";
import { SecondaryColors } from "./Secondary";
import { SecondaryColorNames } from "./Secondary/types";
import { SubjectColors } from "./Subject";
import { ThemeColors } from "./Theme";
import { ThemeColorNames } from "./Theme/types";

export namespace FColorTypes {
	export const FThemeColors = ThemeColors();
	export const FPrimaryColors = PrimaryColors();
	export const FSecondaryColors = SecondaryColors();
	export const FSubjectColors = SubjectColors();
}

// SubjectColorNames
type FColorNames = ThemeColorNames | PrimaryColorNames | SecondaryColorNames;

export interface FUseColorProps {
	/**
	 * Color name is the normal color in light mode
	 */
	colorName: FColorNames;
	/**
	 * Whether the environment is in dark mode or not
	 */
	isDarkMode: boolean;
	/**
	 * Optional color is for the change of the dark mode color
	 */
	optionalColor?: string;
}
