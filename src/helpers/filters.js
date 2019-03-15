export default filters {
	UpperCaseLowerCase: function(value) {
		return value.split(" ").map(function(word) {
			word.charAt(0).toUpperCase() + word.slice(1);
		});
	}
};
