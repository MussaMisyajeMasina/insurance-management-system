
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col  col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill The Form To Add A User</strong>
          </div>
          <b-card-body>
            <b-form class="addcategory">
              <b-form-group>
                <label class="col-form-label">Username</label>
                <input
                   v-bind:class="{'is-invalid':errors.name,'is-valid':!errors.name}"
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="Enter user name"
                >
                <div class="errors" v-if="errors.name">
                  <small class="text-danger" :key="error" v-for="error in errors.name">{{error}}</small>
                </div>
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Email</label>
                <input v-bind:class="{'is-invalid':errors.email,'is-valid':!errors.email}" v-model="email" type="email" class="form-control" placeholder="email">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Password</label>
                <input
                   v-bind:class="{'is-invalid':errors.password,'is-valid':!errors.password}"
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="Enter default password"
                >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Confirm Password</label>
                <input
                   v-bind:class="{'is-invalid':errors.password_confirmation,'is-valid':!errors.password_confirmation}"
                  v-model="password_confirmation"
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                >
              </b-form-group>
              <div>
                <b-button
                  @click="registerUser()"
                  :disabled="loading"
                  variant="primary"
                  class="px-4"
                ><i class="fa fa-spin fa-spinner" aria-hidden="true"  v-if="loading"></i>
                  {{ loading ? '':'Add' }}
                </b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      loading: false,
      errors: {}
    };
  },

  methods: {
    registerUser() {

       this.loading = true;
      Axios.post("http://127.0.0.1:8000/api/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then((response) => {
          this.loading = false;
          const {data}=response;

          localStorage.setItem('auth',JSON.stringify(data))
          this.$root.auth=data;


          Swal.fire({
            title: "Success!",
            text: "user Added",
            type: "success",
            confirmButtonText: "Oky"
          });

          this.$router.push("AllUser");
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data;


          Swal.fire({
            title: "Error!",
            text: "Not Added",
            type: "error",
            confirmButtonText: "Try Again"
          });
        });
    }
  }
};
</script>
<style>
strong {
  font-size: 1rem;
}
</style>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
