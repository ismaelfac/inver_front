<template>
	<div class="media">
	  <img src="" class="align-self-start mr-3">
	  <div class="media-body">
	    <h5 class="mt-0">{{ post.title}} - Estado {{ post.available }}</h5>
	    <p>{{ post.description }}</p>
	  </div>
	</div>
</template>
<script>
	export default {
		name:'PostItem',
		props: {
			post: {
				type: Object,
				required: true
			}
		}
	}
</script>