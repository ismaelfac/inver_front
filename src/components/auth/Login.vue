<template>
	<div class="login row justify-content-center ptb-115">
		<div class="col-md-8">
			<div class="card">
				<div class="card-body">
					<form @submit.prevent="authenticate">
						<div class="form-group row">
							<label
								for="email"
								class="col-md-4 col-form-label text-md-right"
								>Email</label
							>
							<div class="col-md-6">
								<input
									type="email"
									class="form-control"
									name="email"
									v-model="form.email"
									required
									autofocus
								/>
							</div>
						</div>
						<div class="form-group row">
							<label
								for="password"
								class="col-md-4 col-form-label text-md-right"
								>Password</label
							>
							<div class="col-md-6">
								<input
									type="password"
									class="form-control"
									name="password"
									v-model="form.password"
									required
								/>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-6 offset-md-4">
								<div class="form-check">
									<input
										class="form-check-input"
										type="checkbox"
										name="remember"
										id="remember"
									/>
									<label
										class="form-check-label"
										for="remember"
									>
										Recuerdame
									</label>
								</div>
							</div>
						</div>
						<div class="form-group row mb-0">
							<div class="col-md-8 offset-md-4">
								<button type="submit" class="btn btn-primary">
									Login
								</button>
								<a class="btn btn-link" href="">
									No recuerdo mi clave?
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
	name: "Login",
	data() {
		return {
			form: {
				email: "",
				password: ""
			},
			error: null
		};
	},
	methods: {
		authenticate() {
			console.log("entro");
			this.$store.dispatch("session/login");
			login(this.$data.form)
				.then(res => {
					console.info("entro al res", this.$data.form);
					this.$store.commit("session/loginSuccess", res);
					this.$router.push({ path: "/" });
				})
				.catch(error => {
					console.warn("error pailas", error);
					this.$store.commit("session/loginFailed", { error });
				});
		}
	},
	computed: {
		...mapGetters("session", {
			authError: "auth_error"
		})
	}
};
</script>
<style scoped>
.error {
	text-align: center;
	color: red;
}
</style>
