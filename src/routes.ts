import { type RouteConfig, prefix, route } from "@react-router/dev/routes";
import { allRoutes } from "./root/routeRegistry.ts";

const config: RouteConfig = [
	route("favicon.svg", "routes/favicon.tsx"),
	...prefix(
		":lang?",
		allRoutes.map(({ path, file }) => route(path.slice(1), file, { id: file })),
	),
];

export default config;
