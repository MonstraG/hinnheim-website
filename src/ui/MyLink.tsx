import { Link, type LinkProps } from "react-router";
import type { ReactElement } from "react";
import { makeHref, type MyRoute } from "../root/routeRegistry.ts";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import type { Language } from "../i18n/language.ts";

interface Props {
	route: MyRoute;
	children: LinkProps["children"];
	language?: Language;
	onClick?: LinkProps["onClick"];
}

export function MyLink({ route, children, language, onClick }: Props): ReactElement {
	const i18nContext = useI18nContext();
	const resolvedLanguage = language ?? i18nContext.language;

	return (
		<Link
			to={makeHref(route, resolvedLanguage)}
			className="myLink"
			prefetch="intent"
			hrefLang={language?.code}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
