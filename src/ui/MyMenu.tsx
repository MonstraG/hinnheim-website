import type { ReactElement, ReactNode } from "react";

interface Props {
	id: string;
	children: ReactNode;
}

export function MyMenu({ id, children }: Props): ReactElement {
	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: I want to be able to close my popover
		// biome-ignore lint/a11y/useKeyWithClickEvents: already handled by esc
		<div
			className="myMenu"
			popover="auto"
			id={id}
			onClick={(event) => event.currentTarget.hidePopover()}
		>
			{children}
		</div>
	);
}
