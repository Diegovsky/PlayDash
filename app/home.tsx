import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Salve" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const links = [
  {
    label: 'Home',
    url: "/"
  },
  {
    label: "About Us",
    url: "/about-us"
  }
]

export default function Home() {
  return <>
    <nav className="p-6 bg-red-400 flex flex-row">
      <ul className="flex flex-row space-x-2">
        {links.map(({label, url}) => NavItem(url, label))}
      </ul>
    </nav>
    <main className="p-6">
      <h1 className="">Olá, mundo!</h1>
    </main>
   </>
}
function NavItem(url: string, label: string) {
    return <li className="bg-amber-900 px-1 rounded" key={label}><a href={url}>{label}</a></li>;
}

