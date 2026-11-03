import { type ReactElement, useId } from "react";
import { MyLink } from "../ui/MyLink.tsx";
import { allLanguages } from "../i18n/language.ts";
import { allRoutes, routeRegistry } from "./routeRegistry.ts";
import { unstable_useRouterState as useRouterState } from "react-router";
import { MyMenu } from "../ui/MyMenu.tsx";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyButton } from "../ui/MyButton.tsx";
import { GlobeIcon } from "lucide-react";

export function LanguageDropdown(): ReactElement | null {
	const id = useId();
	const routerState = useRouterState();
	const { t } = useI18nContext();

	const currentRoute =
		allRoutes.find((route) =>
			routerState.active.matches.some((match) => match.id === route.file),
		) ?? routeRegistry.home;

	return (
		<>
			<MyButton
				className="language-toggle"
				type="button"
				popoverTarget={id}
				aria-label={t.nav.language}
				title={t.nav.language}
			>
				<GlobeIcon />
			</MyButton>
			<MyMenu id={id}>
				<ul className="unstyledList">
					{allLanguages.map((language) => (
						<li key={language.code}>
							<MyLink route={currentRoute} language={language}>
								<span lang={language.code}>{language.name}</span>
							</MyLink>
						</li>
					))}
				</ul>
			</MyMenu>
		</>
	);
}
