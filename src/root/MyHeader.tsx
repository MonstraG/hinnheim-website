import { type ReactElement, type KeyboardEvent, useId, useRef, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { MyButton } from "../ui/MyButton.tsx";
import { MyLink } from "../ui/MyLink.tsx";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { Logo } from "../ui/Logo.tsx";
import { LanguageDropdown } from "./LanguageDropdown.tsx";
import { routeRegistry } from "./routeRegistry.ts";
import { contactId } from "./homeSectionIds.ts";

export function MyHeader(): ReactElement {
	const { t } = useI18nContext();
	const [menuOpen, setMenuOpen] = useState(false);
	const navId = useId();
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	function tryClosingMenu(event: KeyboardEvent<HTMLElement>) {
		if (event.key === "Escape" && !event.defaultPrevented) {
			setMenuOpen(false);
			menuButtonRef.current?.focus();
		}
	}

	return (
		<header className="myHeader container">
			<MyLink
				className="header-logo"
				route={routeRegistry.home}
				aria-label={t.home.brandHomeLabel}
			>
				<Logo />
			</MyLink>
			<MyButton
				className="nav-toggle"
				variant="light"
				square
				ref={menuButtonRef}
				aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
				aria-expanded={menuOpen}
				aria-controls={navId}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				{menuOpen ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
			</MyButton>
			<nav id={navId} className="nav" data-open={menuOpen} onKeyDown={tryClosingMenu}>
				<MyLink
					className="nav-link"
					route={routeRegistry.about}
					onClick={() => setMenuOpen(false)}
				>
					{t.nav.aboutUs}
				</MyLink>
				<MyLink
					className="nav-link"
					route={routeRegistry.home}
					hash={`#${contactId}`}
					onClick={() => setMenuOpen(false)}
				>
					{t.nav.contact}
				</MyLink>
				<span className="nav-divider" />
				<LanguageDropdown />
			</nav>
		</header>
	);
}
