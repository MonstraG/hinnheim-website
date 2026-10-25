import type { ReactElement } from "react";

interface Props {
	title: string;
	description: string;
}

export function MyMeta({ title, description }: Props): ReactElement {
	// todo: read up on meta tags
	return (
		<>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="description" content={description} />
		</>
	);
}
