import type { ReactElement } from "react";
import * as api from "~/api";
import Image from "./image";

function DataItem({name,value}:{name:string, value:string}){
	return <div>
		<span>{name}:</span> <span>{value}</span>
	</div>
}

export default function PlayerCard({
	player,
}: {
	player: api.Player;
}): ReactElement {
	return (
		<div className="bg-chuva-claro rounded text-arquibancada gap-2 flex flex-col">
			<Image className="text-arquibancada" name={player.name} url={player.photo} />
		<div className="bg-chuva rounded p-2 grid grid-cols-2 gap-1 text-trave">
			<DataItem name="Gols" value={player.goals}/>
			<DataItem name="Faltas" value={player.fouls}/>
			<DataItem name="C. Amarelos" value={player.yellow_cards}/>  
			<DataItem name="C. Vermelhos" value={player.red_cards}/>  
		</div>
		</div>
	);
}
