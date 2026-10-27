import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	type ShouldRevalidateFunctionArgs,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import type { ReactNode, ReactElement } from "react";
import { ViewTransition } from "react";
import { TopNavigation } from "./root/TopNavigation.tsx";
import { type I18nContextValue, I18nContext } from "./i18n/I18nContext.ts";
import { useLanguageFromPathname } from "./i18n/useLanguageFromPathname.ts";
import { allLanguages, defaultLanguage } from "./i18n/language.ts";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
	},
];

export async function loader({ params }: Route.LoaderArgs): Promise<I18nContextValue> {
	const language = allLanguages.find((l) => l.code === params.lang) ?? defaultLanguage;
	const module = await import(`./i18n/locales/${language.code}.json`, {
		with: { type: "json" },
	});

	return { language, t: module.default };
}

export function Layout({ children }: { children: ReactNode }): ReactElement {
	const language = useLanguageFromPathname();

	return (
		<html lang={language}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div>{children}</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App({ loaderData }: Route.ComponentProps): ReactElement {
	return (
		<I18nContext value={loaderData}>
			<TopNavigation />
			<ViewTransition>
				<main>
					<Outlet />
				</main>
			</ViewTransition>
		</I18nContext>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps): ReactElement {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}

export function shouldRevalidate({
	currentParams,
	nextParams,
	defaultShouldRevalidate,
}: ShouldRevalidateFunctionArgs): boolean {
	return currentParams.lang !== nextParams.lang || defaultShouldRevalidate;
}
