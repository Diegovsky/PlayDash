import type { ReactElement } from "react";
import type { Route } from "./+types/teams";
import * as api from "~/api";
import { Shield } from "~/card";
import { Title } from "~/components/title";
import { NavLink, Outlet } from "react-router";

export function meta(_: Route.MetaArgs) {
	return [{ title: "Times" }];
}
export async function loader(): Promise<api.Team[]> {
	return await api.getTeams();
}

function TeamCard(team: api.Team): ReactElement {
	return (
		<NavLink to={`/teams/${team.name}`} className="p-4 rounded bg-escanteio">
			<Shield team={team} />
		</NavLink>
	);
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>Times</Title>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] items-center gap-2">
				{loaderData.map(TeamCard)}
			</div>
		</>
	);
}
