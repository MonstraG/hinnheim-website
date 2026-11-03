import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";
import { routeRegistry } from "../root/routeRegistry.ts";

export default function AboutPage(): ReactElement {
	const { t } = useI18nContext();

	return (
		<div className="container">
			<MyMeta route={routeRegistry.about} />
			<h1>{t.about.meta.title}</h1>
		</div>
	);
}
