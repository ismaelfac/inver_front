<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
	name: "home",
	components: {
		Header,
		Footer
	}
};
</script>
