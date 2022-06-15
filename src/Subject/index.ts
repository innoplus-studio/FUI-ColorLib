import { Mathematics, English, Biology, Chemistry, Physics } from "./types";

export const SubjectColors = () => {
	return {
		MATHEMATICS: { ...Mathematics },
		ENGLISH: { ...English },
		BIOLOGY: { ...Biology },
		CHEMISTRY: { ...Chemistry },
		PHYSICS: { ...Physics },
	};
};
