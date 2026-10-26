import { useMatch } from "react-router";
import { defaultLanguage, type Language } from "./I18nContext.ts";

export function useLanguageFromPathname(): Language {
	const norwegianMatch = useMatch("/nb/*");
	return norwegianMatch ? "nb-NO" : defaultLanguage;
}
