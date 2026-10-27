import { defaultLanguage, type Language } from "../i18n/language.ts";

export interface MyRoute {
	path: `/${string}`;
	file: `routes/${string}Page.tsx`;
}

export const routeRegistry: Readonly<{
	home: MyRoute;
	about: MyRoute;
}> = {
	home: { path: "/", file: "routes/HomePage.tsx" },
	about: { path: "/about", file: "routes/AboutPage.tsx" },
};

export const allRoutes: MyRoute[] = Object.values(routeRegistry);

export function makeHref(route: MyRoute, language: Language): string {
	if (language.code === defaultLanguage.code) {
		return route.path;
	}

	return `/${language.code}${route.path}`;
}
