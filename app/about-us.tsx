
import type { Route } from "./+types/about-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SObre nos" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function AboutUs() {
  return <>
    <p>Nos somo foda :+1:</p>
   </>
}

