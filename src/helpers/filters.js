import Vue from "vue";
Vue.filter("toCop", function(value) {
	return `$${value} cop`;
});
Vue.filter("areaTotal", function(value) {
	return `${value} Mts`;
});
Vue.filter("UpperLower", function(value) {
	return value
		.split(" ")
		.map(function(word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
});
Vue.filter("OrderBy", function(value) {});
export function filters() {
	var toCop = Vue.filter("toCop");
	var UpperLower = Vue.filter("UpperLower");
	var OrderBy = Vue.filter("OrderBy");
	var areaTotal = Vue.filter("areaTotal");
}
