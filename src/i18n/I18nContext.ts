import { type Context, createContext, use } from "react";
import type enGB from "./locales/en-GB.json";

export type Language = "en-GB" | "nb-NO";
export const defaultLanguage: Language = "en-GB";

export type I18nContext = typeof enGB;

export interface I18nContextValue {
	language: Language;
	t: I18nContext;
}

export const I18nContext: Context<I18nContextValue | undefined> = createContext<
	I18nContextValue | undefined
>(undefined);

export function useI18nContext(): I18nContextValue {
	const context = use(I18nContext);
	if (context == null) {
		throw new Error("wtf");
	}

	return context;
}
