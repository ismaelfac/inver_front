export const modalMixin = {
	data() {
		return {
			mdl_header: "title",
			mdl_content: "content",
			mdl_footer: "footer"
		};
	},
	methods: {
		createModal: function() {
			console.log("modal");
		}
	}
};
