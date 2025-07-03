import { Outlet } from "react-router";
import Nav from "~/components/nav";

export default function Base() {
	//" max-md:overflow-hidden";
	return (
		<div className="flex bg-trave flex-col h-full">
			<div className="overflow-auto grow">
				<main className="p-1 gap-2 flex flex-col">
					<Outlet />
				</main>
			</div>
			<Nav className="shrink" />
		</div>
	);
}
