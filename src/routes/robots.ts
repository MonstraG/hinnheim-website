import { allLanguages } from "../i18n/language.ts";
import { allRoutes, makeHref } from "../root/routeRegistry.ts";

export function loader(): Response {
	const rules = ["User-agent: *", "Disallow: /"];

	if (import.meta.env.PROD) {
		for (const route of allRoutes.filter((route) => !route.hidden)) {
			for (const language of allLanguages) {
				rules.push(`Allow: ${makeHref(route, language)}$`);
			}
		}
	}

	return new Response(`${rules.join("\n")}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
