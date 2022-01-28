// Merge Enum to single Enum
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript

enum Default_Theme_Colors {
	DEFAULT_MAIN_THEME = "#3246FF",
	DEFAULT_SUB_THEME = "#F1F3FF",
}

enum Primary_Colors { 
	PRIMARY_BLACK = "#202020",
	PRIMARY_DARK = "#505176",
	PRIMARY_GREY = "#B0B6BB",
	PRIMARY_LIGHT = "#E2E2E2",
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

enum Special_BG_Colors {
	CONTENT_WRAPPER_BG = "#FCFCFF",
	PANEL_BG_COLOR = "#F8F8FB",
}

enum Uni_Plus_Colors {
	UNIPLUS_LIGHT = "#FEF3EF",
	UNIPLUS_ORANGE = "#EE663C",
}

export const FColorTypes = {
	...Default_Theme_Colors,
	...Primary_Colors,
	...Secondary_Colors,
	...Special_BG_Colors,
	...Uni_Plus_Colors,
};

export type FColorTypes = typeof FColorTypes;
