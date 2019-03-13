<template>
	<div>
		<Header></Header>

		<router-view></router-view>

		<Footer></Footer>
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
<style lang="scss" scoped></style>
