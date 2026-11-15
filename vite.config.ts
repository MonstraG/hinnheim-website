import reactCompiler from "@acusti/vite-plugin-react-compiler";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, loadEnv, type UserConfig, type UserConfigFnObject } from "vite";

function isSiteUrl(value: string): boolean {
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch {
		return false;
	}
}

const config: UserConfigFnObject = defineConfig(({ mode }): UserConfig => {
	const env = loadEnv(mode, process.cwd());

	if (!["development", "staging", "production"].includes(env.VITE_ENV)) {
		throw new Error("VITE_ENV must be set to development, staging, or production.");
	}

	if (!env.VITE_SITE_URL || !isSiteUrl(env.VITE_SITE_URL)) {
		throw new Error("VITE_SITE_URL must be set to a valid absolute HTTP or HTTPS URL.");
	}

	return {
		plugins: [
			reactRouter(),
			reactCompiler({
				compiler: {
					panicThreshold: "all_errors",
					reportDiagnostics: true,
				},
			}),
		],
		server: {
			strictPort: true,
		},
		build: {
			rolldownOptions: {
				output: {
					codeSplitting: {
						groups: [
							{
								name: "vendor-react-router",
								test: /node_modules[\\/](?:react|react-dom|react-router)[\\/]/,
							},
							{
								name: "vendor-lucide-react",
								test: /node_modules[\\/]lucide-react[\\/]/,
							},
							{
								name: "root-module",
								test: /root[\\/]/,
							},
						],
					},
				},
			},
		},
	};
});

export default config;
