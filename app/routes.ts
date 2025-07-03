import { type RouteConfig, route } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("/", "./pages/home.tsx"),
	route("/about-us", "./pages/about-us.tsx"),

	// ...(await flatRoutes()),
] satisfies RouteConfig;
