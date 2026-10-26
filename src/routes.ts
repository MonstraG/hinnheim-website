import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
import { routeRegistry } from "./root/routeRgistry.ts";

const config: RouteConfig = prefix(
	":lang?",
	routeRegistry.map(({ path, file }) =>
		path === "/" ? index(file) : route(path.slice(1), file),
	),
);

export default config;
