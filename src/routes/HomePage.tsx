import { type ReactElement, useId } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";
import { LanguageDropdown } from "../root/LanguageDropdown.tsx";
import { Logo } from "../ui/Logo.tsx";
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
			<MyMeta title={t.home.title} description={t.home.description} />
			<header className="club-header">
				<a
					className="club-link club-brand"
					href={`#${homeId}`}
					aria-label={t.home.brandHomeLabel}
				>
					<Logo />
				</a>
				<nav className="club-nav" aria-label={t.home.navigationLabel}>
					<a className="club-link" href={`#${aboutId}`}>
						{t.home.clubLink}
					</a>
					<a className="club-link" href={`#${contactId}`}>
						{t.home.contactLink} <ArrowUpRight className="club-link-icon" size={15} />
					</a>
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
					<a className="club-link club-button club-button-light" href={`#${contactId}`}>
						{t.home.findYourPlace} <ArrowUpRight className="club-link-icon" size={19} />
					</a>
				</div>
			</section>

			<section className="club-about club-width" id={aboutId} aria-labelledby={aboutTitleId}>
				<div className="club-about-heading">
					<h2 className="club-heading" id={aboutTitleId}>
						{t.home.aboutHeading}
					</h2>
					<div className="club-about-intro">
						<p className="club-copy">{t.home.aboutCopy}</p>
						<a className="club-link club-text-link" href={`#${contactId}`}>
							{t.home.meetUs} <ArrowUpRight className="club-link-icon" />
						</a>
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
							<a
								className="club-link club-button club-button-light"
								href={`mailto:${t.home.email}`}
							>
								{t.home.sayHello} <ArrowUpRight className="club-link-icon" />
							</a>
						</div>
						<div className="club-contact-details">
							<div className="club-contact-item">
								<Mail />
								<div>
									<span className="club-label uppercase">{t.home.writeToUs}</span>
									<a className="club-link" href={`mailto:${t.home.email}`}>
										{t.home.email} <ArrowUpRight className="club-link-icon" />
									</a>
								</div>
							</div>
							<div className="club-contact-item">
								<MapPin />
								<div>
									<span className="club-label uppercase">{t.home.findUs}</span>
									<p className="club-copy">{t.home.location}</p>
									<p className="club-copy club-location-note">
										{t.home.locationNote}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="club-footer club-width">
				<div className="club-footer-names">
					<span className="club-label uppercase">{t.home.brandName}</span>
					<span className="club-label">{t.home.clubName}</span>
				</div>

				<a className="club-link club-back-top" href={`#${homeId}`}>
					{t.home.backToTop} <ArrowUpRight className="club-link-icon" />
				</a>
			</footer>
		</div>
	);
}
