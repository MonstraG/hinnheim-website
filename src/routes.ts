import { type RouteConfig, prefix, route } from "@react-router/dev/routes";
import { allRoutes } from "./root/routeRegistry.ts";

const config: RouteConfig = prefix(
	":lang?",
	allRoutes.map(({ path, file }) => route(path.slice(1), file)),
);

export default config;
