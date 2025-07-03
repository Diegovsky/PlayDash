import type { ReactElement } from "react";
import * as api from "~/api";
import { cn } from "~/lib/utils";

export default function Image({
	name,
	url,
	className,
}: {
	name: string;
	url: string;
	className: string;
}): ReactElement {
	return (
		<div
			className={cn(
				"flex flex-col text-zinc-100 space-y-2 items-center",
				className,
			)}
		>
			<div className="size-16">
				<img className="w-full object-fill" src={url} aria-label="Whoa" />
			</div>
			<h2 className="text-lg">{name}</h2>
		</div>
	);
}
