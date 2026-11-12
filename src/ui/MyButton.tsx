import { cn } from "../root/cn.ts";
import type { ComponentProps, ReactElement } from "react";
import { MyInternalLink, type MyInternalLinkProps } from "./MyInternalLink.tsx";

type ButtonProps = ComponentProps<"button"> & { route?: never };

type Props = (ButtonProps | MyInternalLinkProps) & {
	variant?: "normal" | "light";
	square?: boolean;
};

export function MyButton({ variant = "normal", square, ...props }: Props): ReactElement {
	const resolvedClassName = cn(
		"myButton",
		`myButton-${variant}`,
		square && `square`,
		props.className,
	);

	if ("route" in props && props.route != null) {
		return <MyInternalLink {...props} className={resolvedClassName} />;
	}

	return <button {...props} type={props.type ?? "button"} className={resolvedClassName} />;
}
