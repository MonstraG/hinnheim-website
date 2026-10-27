import type { Config } from "@react-router/dev/config";
import { allRoutes, makeHref } from "./src/root/routeRegistry.ts";
import { allLanguages } from "./src/i18n/language.ts";

const config: Config = {
	ssr: false,
	prerender: allRoutes.flatMap((route) =>
		allLanguages.map((language) => makeHref(route, language)),
	),
	splitRouteModules: false,
	appDirectory: "src",
};

export default config;
