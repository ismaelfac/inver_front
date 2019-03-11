import webserviceInversiones from "./repository";
const resource = "/posts";

export default {
	async getPosts() {
		const response = await webserviceInversiones.get(`${resource}`);
		return response.data;
	}
};
