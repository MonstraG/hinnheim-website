import type { ReactElement } from "react";

export function Logo(): ReactElement {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 960 360"
			role="img"
			className="myLogo user-select-none"
		>
			<title>Bergen Historiske Kampsportklubb</title>
			<g transform="translate(-2,103)">
				{/*text*/}
				<text x="122" y="0" fontSize="136" textLength="647" className="font-medieval">
					BERGEN
				</text>
				<text x="0" y="158" fontSize="136" textLength="261" className="font-medieval">
					HIS
				</text>
				<text x="364" y="158" fontSize="136" textLength="601" className="font-medieval">
					ORISKE
				</text>
				<text
					x="384"
					y="237"
					lengthAdjust="spacingAndGlyphs"
					className="font-gothic"
					fontSize="66"
					textLength="243"
				>
					KAMPSP
				</text>
				<text
					x="689"
					y="237"
					className="font-gothic"
					lengthAdjust="spacingAndGlyphs"
					fontSize="66"
					textLength="273"
				>
					RTKLUBB
				</text>
			</g>
			<g transform="translate(295,114)" fill="#fff" stroke="#161713" strokeWidth="3">
				{/*sword*/}
				<path d="m13 64 2 146q0 17 7 30 9-11 9-31l1-145zm2-44-2 36h19l-2-36zm-4-10q1-10 11-10 11 0 13 10z" />
				<path d="M7 12q15-5 30 0l1 6q-6 4-14 1-9-1-16 3zm-6 47q21-7 43 0l1 4q-1 4-5 3-17-5-35 0-6 1-5-3z" />
			</g>
			<g transform="translate(627,286)">
				{/*shield*/}
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
			</g>
		</svg>
	);
}
