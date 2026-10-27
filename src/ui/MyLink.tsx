import { Link } from "react-router";
import type { ReactElement, ReactNode } from "react";
import { makeHref, type MyRoute } from "../root/routeRegistry.ts";
import { useI18nContext } from "../i18n/useI18nContext.ts";

interface Props {
	route: MyRoute;
	children: ReactNode;
}

export function MyLink({ route, children }: Props): ReactElement {
	const { language } = useI18nContext();

	return (
		<Link to={makeHref(route, language)} className="myLink" prefetch="intent">
			{children}
		</Link>
	);
}
