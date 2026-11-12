import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { routeRegistry } from "../root/routeRegistry.ts";
import { MyButton } from "../ui/MyButton.tsx";

export default function NotFoundPage(): ReactElement {
	const { t } = useI18nContext();
	return (
		<section className="container notFound">
			<title>{`${t.notFound.title} | ${t.home.clubName}`}</title>
			<meta name="robots" content="noindex, follow" />
			<p className="notFound-code font-medieval">404</p>
			<h1>{t.notFound.title}</h1>
			<p>{t.notFound.description}</p>
			<MyButton route={routeRegistry.home} variant="normal">
				{t.notFound.backHome}
			</MyButton>
		</section>
	);
}
