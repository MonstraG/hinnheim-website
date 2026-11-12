import type { ReactElement } from "react";
import { useI18nContext } from "../i18n/useI18nContext.ts";
import { MyMeta } from "../root/MyMeta.tsx";
import { routeRegistry } from "../root/routeRegistry.ts";
import "./AboutPage.css";

export default function AboutPage(): ReactElement {
	const { t } = useI18nContext();

	const boardMembers = [
		{
			id: "leader",
			...t.about.people.leader,
			role: "leader",
			image: "/board/tools.avif",
		},
		{
			id: "member-one",
			...t.about.people.member1,
			role: "member",
			image: "/board/jojo.avif",
		},
		{
			id: "member-two",
			...t.about.people.member2,
			role: "member",
			image: "/board/melon.avif",
		},
		{
			id: "member-three",
			...t.about.people.member3,
			role: "member",
			image: "/board/kaminoan.avif",
		},
		{
			id: "membersRep",
			...t.about.people.membersRep,
			role: "membersRep",
			image: "/board/dwarf.avif",
		},
	] as const;

	return (
		<>
			<MyMeta route={routeRegistry.about} />
			<section className="about-intro">
				<div className="container">
					<h1 className="about-header">{t.about.meta.title}</h1>
					<div className="about-copy font-gothic">
						<p>
							What the fuck did you just fucking say about me, you little bitch? I'll
							have you know I graduated top of my class in the Navy Seals, and I've
							been involved in numerous secret raids on Al-Quaeda, and I have over 300
							confirmed kills. I am trained in gorilla warfare and I'm the top sniper
							in the entire US armed forces. You are nothing to me but just another
							target. I will wipe you the fuck out with precision the likes of which
							has never been seen before on this Earth, mark my fucking words. You
							think you can get away with saying that shit to me over the Internet?
							Think again, fucker. As we speak I am contacting my secret network of
							spies across the USA and your IP is being traced right now so you better
							prepare for the storm, maggot. The storm that wipes out the pathetic
							little thing you call your life. You're fucking dead, kid. I can be
							anywhere, anytime, and I can kill you in over seven hundred ways, and
							that's just with my bare hands.
						</p>
						<p>
							Not only am I extensively trained in unarmed combat, but I have access
							to the entire arsenal of the United States Marine Corps and I will use
							it to its full extent to wipe your miserable ass off the face of the
							continent, you little shit. If only you could have known what unholy
							retribution your little "clever" comment was about to bring down upon
							you, maybe you would have held your fucking tongue. But you couldn't,
							you didn't, and now you're paying the price, you goddamn idiot. I will
							shit fury all over you and you will drown in it. You're fucking dead,
							kiddo.
						</p>
					</div>
				</div>
			</section>
			<section className="about-board">
				<div className="container">
					<h2 className="about-header">{t.about.boardHeading}</h2>
					<ul className="member-list unstyledList">
						{boardMembers.map((member) => (
							<li className="member" key={member.id}>
								<img
									src={member.image}
									width={192}
									height={192}
									alt=""
									loading="lazy"
									className="member-avatar"
								/>
								<div className="member-info">
									<p className="member-role">{t.about.roles[member.role]}</p>
									<h3 className="member-name">{member.name}</h3>
									<p className="member-description"> {member.description}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
