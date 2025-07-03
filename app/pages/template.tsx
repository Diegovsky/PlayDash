import type { ReactElement } from "react";
import type { Route } from "./+types/teams";
import * as api from "~/api";

export function meta(_: Route.MetaArgs) {}
export async function loader(): Promise<api.Match[]> {}
export default function Home({
	loaderData,
}: Route.ComponentProps): ReactElement {
	return <></>;
}
