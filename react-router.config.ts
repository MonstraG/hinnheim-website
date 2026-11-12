import type { Config } from "@react-router/dev/config";
import { allRoutes, makeHref } from "./src/root/routeRegistry.ts";
import { allLanguages } from "./src/i18n/language.ts";

const config: Config = {
	future: {
		unstable_optimizeDeps: true,
	},
	ssr: false,
	prerender: [
		"/favicon.svg",
		...allRoutes.flatMap((route) =>
			allLanguages.map((language) => makeHref(route, language)),
		),
	],
	splitRouteModules: false,
	appDirectory: "src",
};

export default config;
