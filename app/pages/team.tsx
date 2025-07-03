import type { ReactElement } from "react";
import type { Route } from "./+types/team";
import * as api from "~/api";
import { Title } from "~/components/title";
import PlayerCard from "~/components/player";

export function meta(a: Route.MetaArgs) {
	return [{ title: a.data.name }];
}
export async function loader({ params }: Route.LoaderArgs): Promise<api.Team> {
	const team = await api.getTeam(params.team);
	return team;
}
export default function Team({
	loaderData: team,
}: Route.ComponentProps): ReactElement {
	return (
		<>
			<Title>{team.name}</Title>
			<div className="h-44 bg-gramado rounded py-6">
				<img
					src={team.emblem}
					alt=""
					className="h-full w-full object-contain"
				/>
			</div>
			<Title>Treinador</Title>
			<Title>Jogadores</Title>
			<div className="grid gap-2 grid-cols-2">
				{team.players.map((p) => (
					<PlayerCard key={p.name} player={p} />
				))}
			</div>
		</>
	);
}
