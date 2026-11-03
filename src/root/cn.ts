export function cn(...classNames: (string | undefined | null)[]): string {
	let result = "";
	for (const className of classNames) {
		if (!className) {
			continue;
		}

		if (result) {
			result = result + " " + className;
		} else {
			result = className;
		}
	}
	return result;
}
