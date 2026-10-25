import type { ReactElement } from "react";
import { MyLink } from "../ui/MyLink.tsx";

export function TopNavigation(): ReactElement {
	return (
		<nav className="myNav">
			<img src="logo.jpg" />
			<MyLink href="/">Home</MyLink>
			<MyLink href="/about">About</MyLink>
			<MyLink href="/about">Contact</MyLink>
		</nav>
	);
}
