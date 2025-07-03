import { Button } from "./components/ui/button";

const links = [
	{
		label: "Home",
		url: "/",
	},
	{
		label: "About Us",
		url: "/about-us",
	},
];

export default function Nav() {
	return (
		<nav className="max-md:hidden md:sticky z-100 top-0 w-full p-4 bg-sky-800 flex flex-row">
			<ul className="flex flex-row space-x-2">
				{links.map(({ label, url }) => NavItem(url, label))}
			</ul>
		</nav>
	);
}

function NavItem(url: string, label: string) {
	return (
		<li key={label}>
			<Button asChild className="text-sky-50 text-lg" variant="ghost">
				<a href={url}>{label}</a>
			</Button>
		</li>
	);
}
