export interface Language {
	readonly code: string;
	readonly name: string;
}

export function isLanguage(object: unknown): object is Language {
	return (
		object != null &&
		typeof object === "object" &&
		"code" in object &&
		typeof object.code === "string" &&
		"name" in object &&
		typeof object.name === "string"
	);
}

const english: Language = {
	code: "en",
	name: "English",
};
const norwegian: Language = {
	code: "nb",
	name: "Norsk Bokmål",
};

export const allLanguages: Language[] = [english, norwegian] as const;

export const defaultLanguage: Language = english;
