import type { ReactElement } from "react";
import { MyLink } from "../ui/MyLink.tsx";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { Logo } from "../ui/Logo.tsx";
import { LanguageDropdown } from "./LanguageDropdown.tsx";
import { routeRegistry } from "./routeRegistry.ts";
import { aboutId, contactId } from "./homeSectionIds.ts";

export function MyHeader(): ReactElement {
	const { t } = useI18nContext();

	return (
		<header className="club-header">
			<MyLink
				className="club-link club-brand"
				route={routeRegistry.home}
				aria-label={t.home.brandHomeLabel}
			>
				<Logo />
			</MyLink>
			<nav className="club-nav" aria-label={t.home.navigationLabel}>
				<MyLink className="club-link" route={routeRegistry.home} hash={`#${aboutId}`}>
					{t.home.clubLink}
				</MyLink>
				<MyLink className="club-link" route={routeRegistry.home} hash={`#${contactId}`}>
					{t.home.contactLink}
				</MyLink>
				<LanguageDropdown />
			</nav>
		</header>
	);
}
