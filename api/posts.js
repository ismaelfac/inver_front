import webserviceInversiones from "./repository";
const resource = "/posts";
const _posts = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "available": true},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "available": true},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "available": true}
];

export default { 
	getPosts (cb) {
    setTimeout(() => cb(_posts), 100)
  }
}
