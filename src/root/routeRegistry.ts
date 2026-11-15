import { defaultLanguage, type Language } from "../i18n/language.ts";
import type { Translations } from "../i18n/I18nContext.ts";

export interface MyRoute {
	namespace: keyof Translations;
	path: `/${string}`;
	file: `routes/${string}Page.tsx`;
	metaImage?: string;
}

export const routeRegistry: Readonly<{
	home: MyRoute;
	about: MyRoute;
	runic: MyRoute;
}> = {
	home: {
		path: "/",
		namespace: "home",
		file: "routes/HomePage.tsx",
		metaImage: "/hero.avif",
	},
	about: {
		path: "/about",
		namespace: "about",
		file: "routes/AboutPage.tsx",
	},
	runic: {
		path: "/runic",
		namespace: "runic",
		file: "routes/RunicPage.tsx",
	},
};

export const allRoutes: MyRoute[] = Object.values(routeRegistry);

export function makeHref(route: MyRoute, language: Language): string {
	if (language.code === defaultLanguage.code) {
		return route.path;
	}

	return `/${language.code}${route.path}`;
}
