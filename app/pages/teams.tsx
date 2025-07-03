import type { ReactElement } from "react";
import type { Route } from "./+types/teams";
import * as api from "~/api";
import { Shield } from "~/card";
import { Title } from "~/components/title";

export function meta(_: Route.MetaArgs) {}
export async function loader(): Promise<api.Team[]> {
	return await api.getTeams();
}

function TeamCard(team: api.Team): ReactElement {
	return (
		<div className="p-2 rounded-xl border-1 border-amber-200">
			<Shield team={team} />
		</div>
	);
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>Times</Title>
			<div className="grid grid-cols-2 gap-2 flex-col">
				{loaderData.map(TeamCard)}
			</div>
		</>
	);
}
