export interface Language {
	readonly code: string;
	readonly name: string;
	readonly metaLocale: string;
}

export function isLanguage(object: unknown): object is Language {
	return (
		object != null &&
		typeof object === "object" &&
		"code" in object &&
		typeof object.code === "string" &&
		"name" in object &&
		typeof object.name === "string" &&
		"metaLocale" in object &&
		typeof object.metaLocale === "string"
	);
}

const english: Language = {
	code: "en",
	metaLocale: "en_GB",
	name: "English",
};
const norwegian: Language = {
	code: "nb",
	metaLocale: "nb_NO",
	name: "Norsk Bokmål",
};

export const allLanguages: Language[] = [english, norwegian] as const;

export const defaultLanguage: Language = english;
