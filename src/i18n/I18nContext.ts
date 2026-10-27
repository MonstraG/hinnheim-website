import { type Context, createContext } from "react";
import type enGB from "./locales/en.json";
import type { Language } from "./language.ts";

export type Translations = typeof enGB;

export interface I18nContextValue {
	language: Language;
	t: Translations;
}

export const I18nContext: Context<I18nContextValue | undefined> = createContext<
	I18nContextValue | undefined
>(undefined);
