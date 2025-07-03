import type { ReactElement } from "react";
import type { Route } from "./+types/stats";
import * as api from "~/api";
import { Title } from "~/components/title";
import PlayerCard from "~/components/player";

function DataItem({name,value}:{name:string, value:string}){
	return <div>
		<span>{name}:</span> <span>{value}</span>
	</div>
}

export function meta(_: Route.MetaArgs) {
	return [{ title: "Estatísticas" }];
}

interface Data {
	best_player: api.Player;
	worst_player: api.Player;
	player_fair_play: api.Player;
	player_foul_play: api.Player;
	team_fair_play: api.Team;
	team_foul_play: api.Team;
}

export function TeamCardStats({
	team,
}:{team: api.Team}): ReactElement {
	return <div className="h-44 bg-chuva-claro rounded flex flex-col">
				<img
					src={team.emblem}
					alt=""
					className="h-full w-full object-contain"
				/>
			<p>{team.name}</p>
			<div className="bg-chuva rounded p-2 grid grid-cols-2 gap-1 text-trave">
				<DataItem name="Gols" value={team.goals}/>
				<DataItem name="Faltas" value={team.fouls}/>
				<DataItem name="C. Amarelos" value={team.team_yellow_cards}/>  
				<DataItem name="C. Vermelhos" value={team.team_red_cards}/>  
			</div>
	</div>
}

export async function loader(): Promise<Data> {
	return {
		best_player: await api.getBestPlayer(),
		worst_player: await api.getWorstPlayer(),
		player_fair_play: await api.getPlayerFairPlay(),
		player_foul_play: await api.getPlayerFoulPlay(),
		team_fair_play: await api.getTeamFairPlay(),
		team_foul_play: await api.getTeamFoulPlay(),
	};
}

export default function Stats({
	loaderData: { best_player, worst_player, player_fair_play, player_foul_play, team_fair_play, team_foul_play},
}: Route.ComponentProps): ReactElement {
	return (
		<>
			<Title>Jogador Artilheiro</Title>
			<PlayerCard player={best_player} />

			<Title>Pior Jogador</Title>
			<PlayerCard player={worst_player} />

			<Title>Jogador Fair Play</Title>
			<PlayerCard player={player_fair_play} />

			<Title>Jogador Mais Violento</Title>
			<PlayerCard player={player_foul_play} />
			
			<Title>Time Fair Play</Title>
			<TeamCardStats team={team_fair_play} />

			<Title>Time Mais Violento</Title>
			<TeamCardStats team={team_foul_play} />
		</>
	);
}
