import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/I18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";
import { MyLink } from "../ui/MyLink.tsx";

export default function AboutPage(): ReactElement {
	const { t } = useI18nContext();

	return (
		<div>
			<MyMeta title={t.about.title} description={t.about.description} />
			<p>{t.hello}</p>
			<MyLink href="/">English</MyLink>
			<MyLink href="/nb">Norsk</MyLink>
		</div>
	);
}
