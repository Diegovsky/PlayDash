import type { ReactElement } from "react";
import * as icons from "lucide-react";
import { Badge } from "./components/ui/badge";
import * as api from "~/api";

export function Shield({ team }: { team: api.Team }): ReactElement {
	return (
		<div className="flex flex-col space-y-2 items-center">
			<div className="size-16">
				<img
					className="w-full object-fill"
					src={team.emblem}
					aria-label="Whoa"
				/>
			</div>
			<h2 className="text-lg">{team.name}</h2>
		</div>
	);
}
export function Card({
	id,
	home,
	visitor,
	date_hour,
	location,
}: api.Match): ReactElement {
	const whenFmt = new Date(date_hour).toLocaleDateString();

	return (
		<div
			key={`${id}`}
			className="p-3 font-bold text-zinc-100 bg-chuva border-slate-400 gap-2 border-solid rounded card-shadow flex flex-row grid grid-cols-3 justify-items-center justify-center content-center"
		>
			<Shield team={home} />
			<p className="text-lg row-span-2">VS</p>
			<Shield team={visitor} />
			<div className="col-span-3 flex flex-row gap-1 flex-wrap">
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
