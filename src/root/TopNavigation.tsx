import type { ReactElement } from "react";
import { MyLink } from "../ui/MyLink.tsx";
import { routeRegistry } from "./routeRegistry.ts";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { LanguageDropdown } from "./LanguageDropdown.tsx";
import { Logo } from "../ui/Logo.tsx";

export function TopNavigation(): ReactElement {
	const { t } = useI18nContext();

	return (
		<nav className="myNav">
			<MyLink route={routeRegistry.home}>
				<Logo />
			</MyLink>
			<MyLink route={routeRegistry.home}>{t.home.title}</MyLink>
			<MyLink route={routeRegistry.about}>{t.about.title}</MyLink>
			<LanguageDropdown />
		</nav>
	);
}
