import { unstable_useRoute as useRoute } from "react-router";
import { defaultLanguage, isLanguage, type Language } from "./language.ts";

export function useLanguageFromPathname(): Language["code"] {
	const { loaderData } = useRoute();
	if (
		loaderData != null &&
		typeof loaderData === "object" &&
		"language" in loaderData &&
		isLanguage(loaderData.language)
	) {
		return loaderData.language.code;
	}

	return defaultLanguage.code;
}
