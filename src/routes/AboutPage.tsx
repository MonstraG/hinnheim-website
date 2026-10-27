import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";

export default function AboutPage(): ReactElement {
	const { t } = useI18nContext();

	return (
		<>
			<MyMeta title={t.about.title} description={t.about.description} />
			<h1>{t.about.title}</h1>
		</>
	);
}
