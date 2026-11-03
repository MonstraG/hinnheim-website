import type { ReactElement } from "react";
import { allLanguages, defaultLanguage } from "../i18n/language.ts";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { makeHref, type MyRoute } from "./routeRegistry.ts";

interface Props {
	route: MyRoute;
}

const siteUrl = import.meta.env.VITE_SITE_URL;

export function MyMeta({ route }: Props): ReactElement | null {
	const { language, t } = useI18nContext();
	const translations = t[route.namespace];
	if (typeof translations !== "object" || !("meta" in translations)) {
		return null;
	}
	const { title, description } = translations.meta;
	const pageTitle = `${title} | ${t.home.clubName}`;
	const url = siteUrl ? new URL(makeHref(route, language), siteUrl).href : undefined;
	const image = siteUrl ? new URL("/hero.avif", siteUrl).href : undefined;

	return (
		<>
			<title>{pageTitle}</title>
			<meta name="description" content={description} />
			<meta name="robots" content="index, follow, max-image-preview:large" />
			<meta name="theme-color" content="#203d34" />
			{url && <link rel="canonical" href={url} />}
			{siteUrl &&
				allLanguages.map((alternate) => (
					<link
						key={alternate.code}
						rel="alternate"
						hrefLang={alternate.code}
						href={new URL(makeHref(route, alternate), siteUrl).href}
					/>
				))}
			{siteUrl && (
				<link
					rel="alternate"
					hrefLang="x-default"
					href={new URL(makeHref(route, defaultLanguage), siteUrl).href}
				/>
			)}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={t.home.clubName} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:locale" content={language.metaLocale} />
			{allLanguages
				.filter((alternate) => alternate.code !== language.code)
				.map((alternate) => (
					<meta
						key={alternate.code}
						property="og:locale:alternate"
						content={alternate.metaLocale}
					/>
				))}
			{url && <meta property="og:url" content={url} />}
			{image && (
				<>
					<meta property="og:image" content={image} />
					<meta property="og:image:type" content="image/avif" />
					<meta property="og:image:width" content="1920" />
					<meta property="og:image:height" content="1080" />
					<meta property="og:image:alt" content={t.home.heroImageAlt} />
				</>
			)}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={description} />
			{image && (
				<>
					<meta name="twitter:image" content={image} />
					<meta name="twitter:image:alt" content={t.home.heroImageAlt} />
				</>
			)}
		</>
	);
}
