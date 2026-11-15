interface ImportMetaEnv {
	readonly VITE_ENV: "development" | "staging" | "production";
	readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
