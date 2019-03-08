<template>
  <div class="about">
  	<search-form></search-form>
    <posts />
  </div>
</template>
<script>
	import posts from '@/components/Posts.vue'
	import SearchForm from '@/components/posts/SearchPost.vue'
	export default {
		name: 'post',
		components: {
			posts,
			SearchForm
		}
	}
</script>
