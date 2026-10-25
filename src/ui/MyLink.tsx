import { Link, type To } from "react-router";
import type { ReactElement, ReactNode } from "react";

interface Props {
	href: To;
	children: ReactNode;
}

export function MyLink({ href, children }: Props): ReactElement {
	return (
		<Link to={href} className="myLink">
			{children}
		</Link>
	);
}
