import { cn } from "../root/cn.ts";
import type { ReactElement } from "react";
import { MyInternalLink, type MyInternalLinkProps } from "./MyInternalLink.tsx";

export function MyLink({ className, ...props }: MyInternalLinkProps): ReactElement {
	return <MyInternalLink {...props} className={cn("myLink", className)} />;
}
