<template>
	<div class="row">
		<div class="col-md-12">
			<div class="input-group mb-3">
			  <input type="text" class="form-control" v-model="search" placeholder="Escribe tu busqueda" aria-label="Escribe tu Busqueda" aria-describedby="button-addon2">
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-check-inline">
			  <input class="form-check-input" type="radio" v-model="available" name="exampleRadios" value="true" checked>
			  <label class="form-check-label" for="exampleRadios1">
			    Disponible
			  </label>
			</div>
			<div class="form-check-inline">
			  <input class="form-check-input" type="radio" v-model="available" name="exampleRadios" value="false">
			  <label class="form-check-label" for="exampleRadios2">
			    No Disponible
			  </label>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'SearchForm',
		computed: {
			search: {
				get () { return this.$store.state.posts.filter.query },
				set (val) { this.$store.commit('posts/SET_QUERY',val) }
			},
			available: {
				get () { return this.$store.state.posts.filter.available },
				set () { this.$store.commit('posts/SET_AVAILABLE')}
			}
		}
	}
</script>