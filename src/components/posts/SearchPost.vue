<template>
	<div class="row">
		<div class="col">
			<div class="input-group mb-3">
			  <input type="text" class="form-control" v-model="search" placeholder="Escribe tu busqueda" aria-label="Escribe tu Busqueda" aria-describedby="button-addon2">
			  <div class="input-group-append">
			    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
			  </div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
	export default {
		computed: {
			search:{
				get () {
					return this.$store.state.filter.query;
				},
				set(val) {
					this.$store.commit('SET_QUERY', val)
				}
			},
		 	available: {
		 		get () {
					return this.$store.state.filter.available;
				},
				set() {
					this.$store.commit('SET_AVAILABLE')
				}	
		 	}
		}
	}
</script>