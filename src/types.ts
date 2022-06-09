// Merge Enum to single Enum
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript

import { PrimaryColors } from "./Primary";
import { SecondaryColors } from "./Secondary";
import { Mathematics, English, Biology, Chemistry, Physics } from "./Subject";
import { ThemeColors } from "./Theme";

const SubjectColors = () => {
	return {
		MATHEMATICS: { ...Mathematics },
		ENGLISH: { ...English },
		BIOLOGY: { ...Biology },
		CHEMISTRY: { ...Chemistry },
		PHYSICS: { ...Physics },
	};
};

export namespace FColorTypes {
	export const FThemeColors = { ...ThemeColors };
	export const FPrimaryColors = { ...PrimaryColors };
	export const FSecondaryColors = { ...SecondaryColors };
	export const FSubjectColors = SubjectColors();
}
