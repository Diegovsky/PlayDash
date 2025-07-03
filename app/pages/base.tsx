import { Outlet } from "react-router";
import NavBottom from "~/components/nav-bottom";

export default function Base() {
	//" max-md:overflow-hidden";
	return (
		<div className="flex flex-col h-full">
			<div className="overflow-auto grow">
				<main className="p-1 flex flex-col">
					<Outlet />
				</main>
			</div>
			<NavBottom className="shrink" />
		</div>
	);
}
