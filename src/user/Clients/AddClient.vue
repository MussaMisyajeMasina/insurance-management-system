
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true" >
          <div slot="header">
            <strong>Fill the form to add a client</strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter First Name"
                  v-model="Fname"
                  required
                >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Last Name"
                  v-model="Lname"
                  required
                >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Gender</label>
                <b-form-select
                  v-model="gender"
                  :options="genders"
                  placeholder="Select Gender"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Phone Number"
                  v-model="number"
                  required
                >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Email Address</label>
                <b-form-input
                  v-model="email"
                  id="normalEmail"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  autocomplete="email"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">District</label>
                <b-form-select
                  v-model="district"
                  :options="districts"
                  placeholder="Choose District"
                  required
                ></b-form-select>
              </b-form-group>
              <div class="float-right">
                <b-button
                  variant="primary"
                  class="px-4 float-left"
                  @click="sendData()"
                  :disabled="loading"
                >
                  <i class="fa fa-spin fa-spinner" aria-hidden="true" v-if="loading"></i>
                  {{loading ?'':'Next'}}
                </b-button>

              </div>

              <div class="float-left">
                <b-button
                  variant="primary "
                  class="px-4 float-left"
                  to="/Udashboard"
                >Cancel</b-button>
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
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      errors:{},
      loading: false,
      number: "",
      email: "",
      district: "",
      gender: "",
      Fname: "",
      Lname: "",
      selected: null,
      districts: ["Chitipa", "Mzuzu", "Lilongwe", "Zomba", "Salima", "Balaka"],
      genders: ["Male", "Female"]
    };
  },
  methods: {
    sendData() {

      this.loading = true;

      Axios.post("http://127.0.0.1:8000/api/clients", {
        PhoneNumber: this.number,
        email: this.email,
        district: this.district,
        gender: this.gender,
        Fname: this.Fname,
        Lname: this.Lname
      })
        .then(response => {
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          this.$router.push("ClientPolicy");
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$router.push("AddClient");
          Swal.fire({
            title: "Error!",
            text: "Please fiil The Requred Feilds",
            type: "error",
            confirmButtonText: "Ok"
          });

          this.errors = response.data;
        });
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


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
