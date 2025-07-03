import type { ReactElement } from "react";
import * as api from "~/api";
import Image from "./image";

export default function PlayerCard({
	player,
}: {
	player: api.Player;
}): ReactElement {
	return (
		<div className="p-2 bg-cerveja rounded">
			<Image name={player.name} url={player.photo} />
		</div>
	);
}
