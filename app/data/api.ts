type Params = Record<string, string>;

class Client {
	url: string;

	constructor(url: string) {
		this.url = url;
	}

	async #request(
		method: string,
		route: string,
		body: object | undefined,
		params: Params,
	): Promise<object> {
		const url = new URLSearchParams(params);
		const resp = await fetch(
			new Request(`${this.url}/${route}?${url}`, {
				method: method.toUpperCase(),
				body: JSON.stringify(body),
			}),
		);
		this.#postResponse(resp);
		return resp.json();
	}

	#postResponse(response: Response) {
		if (response.status < 200 || response.status >= 300) {
			throw new Error("Request failed");
		}
	}

	async get(doc: string, params: Params): Promise<object> {
		return this.#request("get", doc, undefined, params);
	}
}
