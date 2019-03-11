<template>
	<div>
		<div class="row" v-if="posts.length > 0">
			<post-item :post="post" v-for="post in posts" :key="post.id"></post-item>
		</div>
		<div v-else>
			<p>No existen posts</p>
		</div>
	</div>
</template>
<script>
	import PostItem from './PostItem.vue'
	import { mapGetters, mapState } from 'vuex'
	export default {
		components: {
			PostItem
		},
		computed: {
			...mapState({
			    posts: state => state.posts.all
			  }),
			...mapGetters('posts',{
				posts: 'filteredPosts'
			})
		},
		created () {
		    this.$store.dispatch('posts/getAllPosts')
		  }
	}	
</script>