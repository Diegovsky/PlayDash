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
        <div className="p-4 rounded-xl bg-blue-100">
            <Shield team={team} />
        </div>
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
