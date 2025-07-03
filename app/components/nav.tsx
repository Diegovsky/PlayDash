import type { ComponentProps, ReactElement } from "react";
import { cn } from "~/lib/utils";
import * as icons from "lucide-react";
import { NavLink } from "react-router";

function NBItem({
	className,
	href,
	...props
}: ComponentProps<"a">): ReactElement {
	return (
		<NavLink
			className={cn("cursor-pointer p-2", className)}
			to={href ?? "/"}
			{...props}
		/>
	);
}

export default function Nav({
	className,
	...props
}: ComponentProps<"nav">): ReactElement {
	return (
		<nav
			className={cn(
				"w-full bg-chuva gap-4 text-sky-50 justify-around grid grid-flow-col",
				className,
			)}
			{...props}
		>
			<NBItem href="/">
				<icons.Home />
			</NBItem>
			<NBItem href="/teams">
				<icons.Shield />
			</NBItem>
			<NBItem href="/stats">
				<icons.ChartNoAxesColumn />
			</NBItem>
		</nav>
	);
}
