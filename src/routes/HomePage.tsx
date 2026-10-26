import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/I18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";
import { MyLink } from "../ui/MyLink.tsx";

export default function HomePage(): ReactElement {
	const { t } = useI18nContext();

	return (
		<div>
			<MyMeta title={t.home.title} description={t.home.description} />
			<h1>{t.home.title}</h1>
			<MyLink href="/">English</MyLink>
			<MyLink href="/nb">Norsk</MyLink>
		</div>
	);
}
