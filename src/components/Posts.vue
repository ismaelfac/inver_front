<template>
	<div>
		<h1>Listado de posts</h1>
		<ul class="list-group">
			<li class="list-group-item" v-for="post in posts" :key="post.id">{{ post.title }}</li>
		</ul>
	</div>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		computed: mapState({
			posts: state => state.posts.all
		}),
		created () {
			this.$store.dispatch('posts/getAllPosts')
		}
	}
</script>