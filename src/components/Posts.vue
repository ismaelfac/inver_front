<template>
	<div>
		<h1 class="text-center text-muted">Buscador Post</h1>
		<search-form></search-form>
		<hr />
		<post-list></post-list>
	</div>
</template>
<script>
import SearchForm from "./posts/SearchPost.vue";
import PostList from "./posts/postList.vue";
export default {
	components: {
		SearchForm,
		PostList
	}
};
</script>
