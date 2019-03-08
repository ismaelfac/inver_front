class webServices{
	static get BASE_URL() {
		return 'https://jsonplaceholder.typicode.com';
	}
	construct() {

	}

	apiCall(url) {
		fetch(url)
			.then(data => data.json(data))
			.then(data => this.dataGen.next(data))
			.catch(err => `Error de comunicación ${err}`);
	}
}
export default new webServices;