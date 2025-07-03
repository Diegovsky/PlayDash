import type { ReactElement } from "react";
import type { Route } from "./+types/stats";
import * as api from "~/api";
import { Title } from "~/components/title";
import PlayerCard from "~/components/player";

export function meta(_: Route.MetaArgs) {
	return [{ title: "Estatísticas" }];
}

interface Data {
	best_player: api.Player;
}
export async function loader(): Promise<Data> {
	return {
		best_player: await api.getBestPlayer(),
	};
}

export default function Stats({
	loaderData: { best_player },
}: Route.ComponentProps): ReactElement {
	return (
		<>
			<Title>Jogador Artilheiro</Title>
			<PlayerCard player={best_player} />
		</>
	);
}
