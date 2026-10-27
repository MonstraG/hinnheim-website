import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";

export default function HomePage(): ReactElement {
	const { t } = useI18nContext();

	return (
		<div>
			<MyMeta title={t.home.title} description={t.home.description} />
			<h1>{t.home.title}</h1>
		</div>
	);
}
