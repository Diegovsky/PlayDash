import axios from "axios";

type Url = string;

export interface User {
	name: string;
	email: string;
	password: string;
	user_type: string;
}

export interface Team {
	name: string;
	emblem: Url;
	total_matches: number;
	total_points: number;
	fouls: number;
	team_yellow_cards: number;
	team_red_cards: number;
	wins: number;
	draws: number;
	losses: number;
	goals: number;
	own_goals: number;
}

export interface Player {
	name: string;
	date_of_birth: string;
	nationality: string;
	photo: Url;
	goals: number;
	position: string;
	number: string;
	fouls: string;
	yellow_cards: number;
	red_cards: number;
	team: string;
}

export interface Coach {
	name: string;
	date_of_birth: Date;
	nationality: string;
	photo: Url;
	team_name: string;
}

export interface Match {
	id: number;
	date_hour: Date;
	location: string;
	home_team: string;
	visitor_team: string;
	home_goals: number;
	visitor_goals: number;
}

const baseUrl = "http://localhost:5000/api";

async function get<T>(route: string): Promise<T> {
	const url = `${baseUrl}${route}`;
	try {
		const val = await axios.get(url);
		return val.data;
	} catch (e) {
		const err = `Error while trying to access url: ${url}`;
		console.error(err);
		console.error(e);
		throw Error(err);
	}
}

export async function getMatches(): Promise<Match[]> {
	return get("/match");
}

export async function getTeam(name: string): Promise<Team> {
	return get(`/team/${name}`);
}
