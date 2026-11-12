import type { ReactElement, SVGProps } from "react";

export function Shield(props: SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" {...props} role="presentation">
			<circle cx="30" cy="30" r="30" fill="#006c42" />
			<path fill="#237440" d="M20 3q-21 12-18 31 5 21 25 25-14-18-7-56" />
			<path fill="#075632" d="M40 3q21 12 18 33-5 20-25 23 13-20 7-56" />
			<g fill="#c32127">
				<circle cx="30" cy="12" r="7" />
				<circle cx="12" cy="30" r="7" />
				<circle cx="48" cy="30" r="7" />
				<circle cx="30" cy="48" r="7" />
				<circle cx="30" cy="30" r="7" />
			</g>
		</svg>
	);
}
