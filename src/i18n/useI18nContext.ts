import { use } from "react";
import { type I18nContextValue, I18nContext } from "./I18nContext.ts";

export function useI18nContext(): I18nContextValue {
	const context = use(I18nContext);
	if (context == null) {
		throw new Error("wtf");
	}

	return context;
}
