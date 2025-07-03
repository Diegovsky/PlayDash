import type { ReactElement } from "react";
import * as icons from "lucide-react";
import { Badge } from "./components/ui/badge";
import Image from "~/components/image";
import * as api from "~/api";
import { cn } from "./lib/utils";

export function Shield({ team }: { team: api.Team }): ReactElement {
	return <Image name={team.name} url={team.emblem} />;
}
export function Card({
	match: { id, home, visitor, date_hour, location },
	tint,
}: {
	match: api.Match;
	tint: string;
}): ReactElement {
	const whenFmt = new Date(date_hour).toLocaleDateString();

	return (
		<div
			key={`${id}`}
			className={cn(
				"p-3 font-bold text-zinc-100 bg-chuva border-slate-400 gap-2 border-solid rounded card-shadow flex flex-row grid grid-cols-3 justify-items-center justify-center content-center",
				tint,
			)}
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
