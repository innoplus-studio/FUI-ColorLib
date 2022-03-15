// Merge Enum to single Enum
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript

enum Default_Theme_Colors {
	DEFAULT_MAIN_THEME = "#3145F5",
	DEFAULT_SUB_THEME = "#EFF0FE",
}

enum Primary_Colors {
	PRIMARY_BLACK = "#14153A",
	PRIMARY_DARK = "#3C3D62",
	PRIMARY_GREY = "#C6C7CD",
	PRIMARY_LIGHT = "#F6F8FB",
	PRIMARY_WHITE = "#FFFFFF",
}

enum Secondary_Colors {
	SECONDARY_RED = "#F95141",
	SECONDARY_ORANGE = "#FFB131",
	SECONDARY_YELLOW = "#FFCD33",
	SECONDARY_GREEN = "#2ED47A",
	SECONDARY_BLUE = "#109CF1",
	SECONDARY_PURPLE = "#885AF8",
}

enum Special_Colors {
	SPECIAL_STROKE = "#00000014",
	SPECIAL_GLASS_WHITE = "#FFFFFFE0",
}

export const FColorTypes = {
	...Default_Theme_Colors,
	...Primary_Colors,
	...Secondary_Colors,
	...Special_Colors,
};

export type FColorTypes = typeof FColorTypes;
