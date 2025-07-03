// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from "~/components/ui/carousel";
import type { Route } from "./+types/home";
import { Card } from "~/card";
import * as api from "~/api";
import { Title } from "~/components/title";
import type { ReactElement } from "react";
import { cn } from "~/lib/utils";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Partidas" },
		// { name: "description", content: "Welcome to React Router!" },
	];
}

interface Matches {
	past: api.Match[];
	today: api.Match[];
	week: api.Match[];
	future: api.Match[];
}

export async function loader(): Promise<Matches> {
	const today = await api.getMatches("today");
	const past = await api.getMatches("past");
	const week = await api.getMatches("week");
	const future = await api.getMatches("future");
	return {
		today,
		past,
		week,
		future,
	};
}

function Section({
	title,
	matches,
	tint,
}: {
	title: string;
	matches: api.Match[];
	tint: string;
}): ReactElement | null {
	if (matches.length === 0) {
		return null;
	}
	return (
		<div className="flex gap-2 flex-col">
			<Title>{title}</Title>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] items-center gap-2">
				{matches.map((m) => (
					<Card key={`${title}-${m.id}`} match={m} tint={tint} />
				))}
			</div>
		</div>
	);
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Section
				tint="bg-chuva-claro"
				title="Partidas Hoje"
				matches={loaderData.today}
			/>
			<Section
				tint="bg-chuva"
				title="Partidas da Semana"
				matches={loaderData.week}
			/>

			<Section
				tint="bg-chuva-escuro"
				title="Partidas a Seguir"
				matches={loaderData.future}
			/>
			<Section
				tint="bg-arquibancada"
				title="Partidas Passadas"
				matches={loaderData.past}
			/>
		</>
	);
}
