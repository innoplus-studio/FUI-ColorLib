enum BLACK {
	LM = "#111111",
	DM = "#F5F5F5",
}

enum DARK {
	LM = "#323337",
	DM = "#E2E2E2",
}

enum GREY {
	LM = "#BBBBBD",
	DM = "#A7A7A9",
}

enum STROKE_GREY {
	LM = "#EBEBEB",
	DM = "#323337",
}

enum BG_LIGHT {
	LM = "#F8F8F8",
	DM = "#222222",
}

enum WHITE {
	LM = "#FFFFFF",
	DM = "#111111",
}

type PrimaryColorNames =
	| "Black"
	| "Dark"
	| "Grey"
	| "Stroke Grey"
	| "BG Light"
	| "White";

export { BLACK, DARK, GREY, STROKE_GREY, BG_LIGHT, WHITE, PrimaryColorNames };
