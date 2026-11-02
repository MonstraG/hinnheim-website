import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, type UserConfig } from "vite";

const config: UserConfig = defineConfig({
	plugins: [reactRouter()],
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
});

export default config;
