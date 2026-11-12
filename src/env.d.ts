interface ImportMetaEnv {
	/** Public website origin, used at build time for canonical and social preview URLs. */
	readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
