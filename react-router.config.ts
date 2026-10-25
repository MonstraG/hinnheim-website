import type { Config } from "@react-router/dev/config";

const config: Config = {
	ssr: false,
	prerender: true,
	splitRouteModules: false,
	appDirectory: "src",
};

export default config;
