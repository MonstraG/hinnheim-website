import type { ReactElement } from "react";

export function HeroImage(): ReactElement {
	return (
		<div className="hero-image-container">
			<img src="/hero.avif" alt="Hero" />
		</div>
	);
}
