import type { ReactElement } from "react";
import * as api from "~/api";

export default function Image({
	name,
	url,
}: {
	name: string;
	url: string;
}): ReactElement {
	return (
		<div className="flex flex-col text-zinc-100 space-y-2 items-center">
			<div className="size-16">
				<img className="w-full object-fill" src={url} aria-label="Whoa" />
			</div>
			<h2 className="text-lg">{name}</h2>
		</div>
	);
}
