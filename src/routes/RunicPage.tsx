import { type ReactElement, useId, useState } from "react";
import { MyLink } from "../ui/MyLink.tsx";

const runeMap = {
	f: "ᚠ",
	u: "ᚢ",
	þ: "ᚦ",
	th: "ᚦ",
	a: "ᚨ",
	r: "ᚱ",
	k: "ᚲ",
	c: "ᚲ",
	g: "ᚷ",
	w: "ᚹ",
	h: "ᚺ",
	n: "ᚾ",
	i: "ᛁ",
	j: "ᛃ",
	ï: "ᛇ",
	ae: "ᛇ",
	æ: "ᛇ",
	p: "ᛈ",
	z: "ᛉ",
	s: "ᛋ",
	t: "ᛏ",
	b: "ᛒ",
	e: "ᛖ",
	m: "ᛗ",
	l: "ᛚ",
	ŋ: "ᛜ",
	o: "ᛟ",
	d: "ᛞ",
} as const;

export default function RunicPage(): ReactElement {
	const id = useId();
	const [inputValue, setInputValue] = useState<string>("");

	const outputValue = (() => {
		let result = "";

		const lower = inputValue.normalize("NFKC").toLowerCase();
		for (let i = 0; i < lower.length; i++) {
			const letter = lower[i];
			const nextLetter = lower[i + 1];

			// try with 2
			if (nextLetter) {
				const key = letter + nextLetter;
				if (key in runeMap) {
					result += runeMap[key as keyof typeof runeMap];
					i += 1; // and skip nextLetter
					continue;
				}
			}

			// try with one
			if (letter in runeMap) {
				result += runeMap[letter as keyof typeof runeMap];
				continue;
			}

			// give up
			result += letter;
		}

		return result.toUpperCase();
	})();

	return (
		<>
			<MyLink route="https://en.wikipedia.org/wiki/Runes">Runes wikipedia page</MyLink>
			<p>I just took wikipedia page and made a simple converter.</p>
			<p>remarks:</p>
			<ul>
				<li>When multiple characters are available, I picked easier</li>
				<li>
					I used Elder Futhark (as provided by the table on the linked page) as main
					source, but not all of the English letters are available there, so I had to go
					down to more newer alphabets' pages to find mappings
				</li>
				<li>
					I tried adding conversion for Norwegian characters, as well as common
					alternatives (æ, ae), but they are not always present.
				</li>
				<li>
					If appropriate rune was not found, I give up and give back the original letter.
				</li>
				<li>Case-insensitive.</li>
			</ul>

			<input
				id={id}
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<output htmlFor={id}>{outputValue}</output>
		</>
	);
}
