import type { Config } from "@react-router/dev/config";
import { routeRegistry } from "./src/root/routeRegistry.ts";

const config: Config = {
	ssr: false,
	prerender: routeRegistry.flatMap(({ path }) => [path, path === "/" ? "/nb" : `/nb${path}`]),
	splitRouteModules: false,
	appDirectory: "src",
};

export default config;
