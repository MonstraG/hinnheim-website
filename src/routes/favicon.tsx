import { renderToStaticMarkup } from "react-dom/server";
import { Shield } from "../ui/Shield.tsx";

export function loader(): Response {
	return new Response(renderToStaticMarkup(<Shield width={60} height={60} />), {
		headers: {
			"Content-Type": "image/svg+xml",
			"Cache-Control": "public, max-age=86400",
		},
	});
}
