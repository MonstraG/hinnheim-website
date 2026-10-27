import assert from "node:assert/strict";
import { allLanguages, defaultLanguage, type Language } from "./language.ts";
import { test } from "node:test";

async function readLocale(
	languageCode: Language["code"],
): Promise<Record<string, string | object>> {
	const module = await import(`./locales/${languageCode}.json`, {
		with: { type: "json" },
	});
	return module.default;
}

test("language translations aren't broken", async () => {
	function validateNode(
		node: Record<string, object | string> | null,
		path: string,
	): { path: string; problem: string } | undefined {
		for (const key in node) {
			const value = node[key];

			if (typeof value === "object") {
				const error = validateNode(
					value as Record<string, object | string>,
					path + "." + key,
				);
				if (error != null) {
					return error;
				}
			} else if (typeof value !== "string") {
				return {
					path: path + "." + key,
					problem: `invalid node type: ${typeof value}`,
				};
			}
		}

		return undefined;
	}

	for (const language of allLanguages) {
		await test(`${language.code} matches`, async () => {
			const translations = await readLocale(language.code);

			assert.ok(translations != null);
			assert.ok(typeof translations === "object");

			const error = validateNode(translations, "(root)");
			assert.equal(
				error,
				undefined,
				() =>
					`Language '${language.code}' has '${error?.problem}' on path '${error?.path}'`,
			);
		});
	}
});

test("languages match to default", async () => {
	function findMismatch(
		reference: Record<string, object | string>,
		candidate: Record<string, object | string>,
		path: string,
	): { path: string; problem: string } | undefined {
		for (const referenceKey in reference) {
			if (!Object.hasOwn(candidate, referenceKey)) {
				return {
					path: path + "." + referenceKey,
					problem: "missing key",
				};
			}

			const referenceValue = reference[referenceKey];
			const candidateValue = candidate[referenceKey];

			if (typeof referenceValue !== typeof candidateValue) {
				return {
					path: path + "." + referenceKey,
					problem: "mismatched node type",
				};
			}

			if (typeof referenceValue === "string") {
				continue;
			}

			if (typeof referenceValue === "object") {
				const error = findMismatch(
					referenceValue as Record<string, object | string>,
					candidateValue as Record<string, object | string>,
					path + "." + referenceKey,
				);
				if (error != null) {
					return error;
				}
			}
		}

		for (const candidateKey in candidate) {
			if (!Object.hasOwn(reference, candidateKey)) {
				return {
					path: path + "." + candidateKey,
					problem: "extra key",
				};
			}
		}

		return undefined;
	}

	const referenceTranslations = await readLocale(defaultLanguage.code);

	for (const language of allLanguages) {
		await test(`${language.code} matches`, async () => {
			const translations = await readLocale(language.code);
			const error = findMismatch(referenceTranslations, translations, "(root)");
			assert.equal(
				error,
				undefined,
				() =>
					`Language '${language.code}' has '${error?.problem}' on path '${error?.path}'`,
			);
		});
	}
});
