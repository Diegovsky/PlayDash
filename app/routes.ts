import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";

export default [
	layout("./pages/base.tsx", [
		index("./pages/home.tsx"),

		route("/teams/:team", "./pages/team.tsx"),
		route("/teams", "./pages/teams.tsx", []),
		route("/stats", "./pages/stats.tsx"),
	]),
	// ...(await flatRoutes()),
] satisfies RouteConfig;
