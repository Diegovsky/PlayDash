import type { ReactElement } from "react";
import * as icons from "lucide-react";
import { Badge } from "./components/ui/badge";
import * as api from "~/api";

async function Shield({
	team: team_name,
}: {
	team: string;
}): Promise<ReactElement> {
	const team = await api.getTeam(team_name);
	return (
		<div className="grid col-span-1 row-span-2 items-center justify-items-center content-center grid-rows-subgrid">
			<img
				className="rounded-md w-full object-fill"
				src={team.emblem}
				aria-label="Whoa"
			/>
			<h2 className="text-lg">{team_name}</h2>
		</div>
	);
}
export function Card({
	id,
	home_team,
	visitor_team,
	date_hour,
	location,
}: api.Match): ReactElement {
	const whenFmt = date_hour.toLocaleDateString();

	return (
		<div
			key={`${id}`}
			className="p-3 font-bold text-slate-800 border-1 border-slate-400 border-solid rounded card-shadow flex flex-col"
		>
			<div className="grid grid-cols-[1fr_1fr_1fr] content-center items-center justify-items-center ">
				<Shield team={home_team} />
				<p className="text-lg row-span-2">VS</p>
				<Shield team={visitor_team} />
			</div>
			<div className="flex flex-row gap-1 flex-wrap">
				<Badge
					variant="outline"
					className="border-blue-900 bg-blue-100 border-2 "
				>
					<icons.CalendarFold />
					{whenFmt}
				</Badge>
				<Badge
					variant="outline"
					className="border-emerald-900 bg-emerald-100 border-2 "
				>
					<icons.MapPin />
					{location}
				</Badge>
			</div>
		</div>
	);
}
