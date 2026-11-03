import { Link, type LinkProps } from "react-router";
import type { ReactElement } from "react";
import { makeHref, type MyRoute } from "../root/routeRegistry.ts";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import type { Language } from "../i18n/language.ts";

export interface MyInternalLinkProps extends Omit<LinkProps, "to" | "href"> {
	language?: Language;
	route: MyRoute | `#${string}` | `mailto:${string}`;
}

export function MyInternalLink({
	route,
	language,
	prefetch,
	hrefLang,
	...props
}: MyInternalLinkProps): ReactElement {
	const context = useI18nContext();
	const destination =
		typeof route === "object" ? makeHref(route, language ?? context.language) : route;

	return (
		<Link
			{...props}
			to={destination}
			prefetch={prefetch ?? "intent"}
			hrefLang={language?.code ?? hrefLang}
		/>
	);
}
