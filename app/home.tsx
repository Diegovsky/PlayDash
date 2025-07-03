// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from "~/components/ui/carousel";
import { Showcase, Slide } from "~/components/showcase-slides";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import icons from "lucide-react";
import type { Route } from "./+types/home";
import type { ComponentProps, ReactElement } from "react";
import { cn } from "~/lib/utils";
import { Card, type Match, type Team } from "~/card";
import Nav from "./nav";
import NavBottom from "~/nav-bottom";
import * as api from "~/api";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Salve" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader(): Match[] {
	return api.getMatches();
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<div className="flex flex-col h-full max-md:overflow-hidden">
			<div className="overflow-auto grow">
				<Nav />
				{
					// <Showcase className="w-full">
					// 	{carrousel.map((c) => (
					// 		<Slide className="w-full" key={c}>
					// 			<img className="object-cover size-full" src={c} alt="uga" />
					// 		</Slide>
					// 	))}
					// </Showcase>
				}
				<main className="p-1 flex flex-col">
					<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] items-center gap-2">
						{loaderData.map(Card)}
					</div>
				</main>
			</div>
			<NavBottom className="shrink" />
		</div>
	);
}
