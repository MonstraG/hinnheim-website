import { type ReactElement, useId } from "react";
import { Mail, MapPin } from "lucide-react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";
import { routeRegistry } from "../root/routeRegistry.ts";
import { LanguageDropdown } from "../root/LanguageDropdown.tsx";
import { Logo } from "../ui/Logo.tsx";
import { MyLink } from "../ui/MyLink.tsx";
import { MyButton } from "../ui/MyButton.tsx";
import "./HomePage.css";

export default function HomePage(): ReactElement {
	const { t } = useI18nContext();
	const homeId = useId();
	const aboutId = useId();
	const contactId = useId();
	const heroTitleId = useId();
	const aboutTitleId = useId();
	const contactTitleId = useId();

	return (
		<div className="club-home" id={homeId}>
			<MyMeta route={routeRegistry.home} />
			<header className="club-header">
				<MyLink
					className="club-link club-brand"
					route={`#${homeId}`}
					aria-label={t.home.brandHomeLabel}
				>
					<Logo />
				</MyLink>
				<nav className="club-nav" aria-label={t.home.navigationLabel}>
					<MyLink className="club-link" route={`#${aboutId}`}>
						{t.home.clubLink}
					</MyLink>
					<MyLink className="club-link" route={`#${contactId}`}>
						{t.home.contactLink}
					</MyLink>
					<LanguageDropdown />
				</nav>
			</header>

			<section className="club-hero" aria-labelledby={heroTitleId}>
				<img
					className="club-hero-photo"
					src="/hero.avif"
					alt={t.home.heroImageAlt}
					fetchPriority="high"
				/>
				<div className="club-hero-shade" />
				<div className="club-hero-content club-width">
					<h1 className="club-title" id={heroTitleId}>
						{t.home.heroHeading}
						<br />
						{t.home.heroHeadingAccent}
					</h1>
					<p className="club-copy club-hero-copy">{t.home.heroCopy}</p>
					<MyButton
						variant="light"
						style={{ marginTop: "var(--gap-4)" }}
						route={`#${contactId}`}
					>
						{t.home.findYourPlace}
					</MyButton>
				</div>
			</section>

			<section className="club-about club-width" id={aboutId} aria-labelledby={aboutTitleId}>
				<div className="club-about-heading">
					<h2 className="club-heading" id={aboutTitleId}>
						{t.home.aboutHeading}
					</h2>
					<div className="club-about-intro">
						<p className="club-copy">{t.home.aboutCopy}</p>
						<MyLink className="club-link club-text-link" route={`#${contactId}`}>
							{t.home.meetUs}
						</MyLink>
					</div>
				</div>
				<div className="club-values">
					<article className="club-value">
						<span className="club-label club-value-number">I.</span>
						<h3 className="club-value-heading">{t.home.firstHeading}</h3>
						<p className="club-copy">{t.home.firstCopy}</p>
					</article>
					<article className="club-value">
						<span className="club-label club-value-number">II.</span>
						<h3 className="club-value-heading">{t.home.secondHeading}</h3>
						<p className="club-copy">{t.home.secondCopy}</p>
					</article>
					<article className="club-value">
						<span className="club-label club-value-number">III.</span>
						<h3 className="club-value-heading">{t.home.thirdHeading}</h3>
						<p className="club-copy">{t.home.thirdCopy}</p>
					</article>
				</div>
			</section>

			<section className="club-contact" id={contactId} aria-labelledby={contactTitleId}>
				<div className="club-width">
					<div className="club-contact-grid">
						<div className="club-contact-intro">
							<h2 className="club-heading" id={contactTitleId}>
								{t.home.contactHeading}
							</h2>
							<p className="club-copy">{t.home.contactCopy}</p>
							<MyButton
								variant="light"
								style={{ marginTop: "var(--gap-4)" }}
								route={`mailto:${t.home.email}`}
							>
								{t.home.sayHello}
							</MyButton>
						</div>
						<div className="club-contact-details">
							<div className="club-contact-item">
								<Mail />
								<div>
									<span className="club-label uppercase">{t.home.writeToUs}</span>
									<MyLink
										className="club-contact-item-content"
										route={`mailto:${t.home.email}`}
									>
										{t.home.email}
									</MyLink>
								</div>
							</div>
							<div className="club-contact-item">
								<MapPin />
								<div>
									<span className="club-label uppercase">{t.home.findUs}</span>
									<p className="club-copy club-contact-item-content">
										{t.home.location}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer club-width">
				<p className="footer-runic">ᚨᚾᚾᚨ ᛖᛚᛋᚲᛖᚱ ᛈᚱᛟᛗᛈ</p>

				<MyLink className="club-link club-back-top" route={`#${homeId}`}>
					{t.home.backToTop}
				</MyLink>
			</footer>
		</div>
	);
}
