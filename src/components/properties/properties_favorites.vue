<template>
	<!-- FEATURED FLAT AREA START -->
	<div class="featured-flat-area pt-5 pb-80">
		<div class="container">
			<div class="row">
				<properties-favorites-item
					v-for="(property, index) in properties"
					:key="property.id"
					:properties="properties"
					:property="property"
					:index="index"
				></properties-favorites-item>
			</div>
		</div>
	</div>
	<!-- FEATURED FLAT AREA END -->
</template>
<script>
import { mapState } from "vuex";
import PropertiesFavoritesItem from "./properties_favorites_item.vue";
export default {
	name: "PropertiesFavorites",
	components: {
		PropertiesFavoritesItem
	},
	computed: mapState({
		properties: state => state.properties.all
	}),
	created() {
		this.$store.dispatch("properties/getAllProperties");
	}
};
</script>
<style lang="css" scoped></style>
