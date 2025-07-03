// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from "~/components/ui/carousel";
import type { Route } from "./+types/home";
import { Card } from "~/card";
import NavBottom from "~/components/nav-bottom";
import * as api from "~/api";
import { Title } from "~/components/title";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Salve" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader(): Promise<api.Match[]> {
	return await api.getMatches();
}

export default function Home({ loaderData }: Route.ComponentProps) {
	console.log(loaderData);
	return (
		<>
			<Title>Partidas</Title>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] items-center gap-2">
				{loaderData.map(Card)}
			</div>
		</>
	);
}
