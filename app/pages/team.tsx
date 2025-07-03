import type { ReactElement } from "react";
import type { Route } from "./+types/team";
import * as api from "~/api";
import { Title } from "~/components/title";
import PlayerCard from "~/components/player";

function DataItem({name,value}:{name:string, value:string}){
	return <div>
		<span>{name}:</span> <span>{value}</span>
	</div>
}

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
			<div className="h-44 bg-chuva-claro rounded flex flex-col">
				<img
					src={team.emblem}
					alt=""
					className="h-full w-full object-contain"
				/>
			<div className="bg-chuva rounded p-2 grid grid-cols-2 gap-1 text-trave">
				<DataItem name="Gols" value={team.goals}/>
				<DataItem name="Faltas" value={team.fouls}/>
				<DataItem name="C. Amarelos" value={team.team_yellow_cards}/>  
				<DataItem name="C. Vermelhos" value={team.team_red_cards}/>  
			</div>
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
