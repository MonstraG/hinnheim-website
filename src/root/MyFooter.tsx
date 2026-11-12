import type { ReactElement } from "react";
import { MyLink } from "../ui/MyLink.tsx";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { ArrowUpIcon } from "lucide-react";
import { routeRegistry } from "./routeRegistry.ts";

export function MyFooter(): ReactElement {
	const { t } = useI18nContext();

	return (
		<footer className="myFooter container">
			<p className="footer-runic">ᚨᚾᚾᚨ ᛖᛚᛋᚲᛖᚱ ᛈᚱᛟᛗᛈ</p>

			<MyLink className="footer-back-to-top" route={routeRegistry.home}>
				{t.home.backToTop}
				<ArrowUpIcon style={{ height: "14px" }} />
			</MyLink>
		</footer>
	);
}
