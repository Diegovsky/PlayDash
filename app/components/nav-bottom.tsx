import type { ComponentProps, ReactElement } from "react";
import { cn } from "~/lib/utils";
import * as icons from "lucide-react";

function NBItem({ className, ...props }: ComponentProps<"a">): ReactElement {
	return <a className={cn("cursor-pointer p-2", className)} {...props} />;
}

export default function NavBottom({
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
		</nav>
	);
}
