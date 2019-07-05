<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h2 id="loggin">Login to start your session</h2>
                  <p class="text-muted"></p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      v-bind:class="{'is-invalid':errors.name,'is-valid':!errors.name}"
                      v-model="name"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      autocomplete="username email"
                    />
                  </b-input-group>
                  <div class="errors" v-if="errors.name">
                    <small class="text-danger" :key="error" v-for="error in errors.name">{{error}}</small>
                  </div>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-key"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      v-bind:class="{'is-invalid':errors.password,'is-valid':!errors.password}"
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                    <div class="errors" v-if="errors.password">
                      <small
                        class="text-danger"
                        :key="error"
                        v-for="error in errors.password"
                      >{{error}}</small>
                    </div>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button @click="Login()" :disabled="loading" variant="primary" class="px-4">
                        <i class="fa fa-spin fa-spinner" aria-hidden="true"  v-if="loading"></i>
                        {{loading ?'':'Login'}}
                      </b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Swal from "sweetalert2";
export default {
  beforeRouteEnter (to, from, next) {
    next();

  },
  data() {
    return {
      name: "",
      password: "",
      loading: false,
      errors: {}
    };
  },

  methods: {
    Login() {
      this.loading = true;

      Axios.post("http://127.0.0.1:8000/api/login", {
        name: this.name,
        password: this.password
      })
        .then(response => {

          this.$noty.success("Successfully logged in.");
          localStorage.setItem("auth",JSON.stringify(response.data.data));

          this.loading = false;
          if (this.name === "admin") {
            this.$router.push("dashboard");
          } else {
            this.$router.push("UDashboard");
          }
        })
        .catch(({ response }) => {
          this.loading = false;
          if (response.status === 400) {
            this.$router.push("Loginform");
            Swal.fire({
              title: "Error!",
              text: "these credentials do not match",
              type: "error",
              confirmButtonText: "Ok"
              // this.errors= {
              //   name:["these credentials do not match "]
            });
          } else {
            this.errors = response.data;
          }
        });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
#loggin {
  font-size: 1.5rem;
  text-align: center;
  color: #73818f !important;
}
</style>

