import webserviceInversiones from "./api_jsonplaceholder";
const resource = "/posts";

export default {
	async getPosts() {
		const response = await webserviceInversiones.get(`${resource}`);
		return response.data;
	},
	async SearchPosts(query) {
		const response = await webserviceInversiones.get(
			`${resource}?title=${query}`
		);
		return response.data;
	}
};
