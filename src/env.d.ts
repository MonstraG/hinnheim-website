interface ImportMetaEnv {
	/** Public website origin, used at build time for canonical and social preview URLs. */
	readonly VITE_SITE_URL?: string;
}

// biome-ignore lint/correctness/noUnusedVariables: meta
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
