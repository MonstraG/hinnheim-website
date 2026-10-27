import type { ReactElement } from "react";
import { MyLink } from "../ui/MyLink.tsx";
import { routeRegistry } from "./routeRegistry.ts";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { LanguageDropdown } from "./LanguageDropdown.tsx";

export function TopNavigation(): ReactElement {
	const { t } = useI18nContext();

	return (
		<nav className="myNav">
			<img src="/logo.jpg" alt={t.logoAlt} style={{ height: "100px" }} />
			<MyLink route={routeRegistry.home}>{t.home.title}</MyLink>
			<MyLink route={routeRegistry.about}>{t.about.title}</MyLink>
			<LanguageDropdown />
		</nav>
	);
}
