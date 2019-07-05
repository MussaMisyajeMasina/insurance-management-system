
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col  col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill the form to add Driver Details </strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">Vehicle Id</label>
                <input type="number" class="form-control" :min="1" placeholder="Enter Vehicle Id" required v-model="Vid" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">First Name</label>
                <input type="text" class="form-control" placeholder="Enter First Name" required v-model="Fname" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Enter Last Name" required v-model="Lname" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Email Address</label>
                <input type="text" class="form-control" placeholder="Enter Email Address" required v-model="email" >
              </b-form-group>
               <b-form-group>
                <label class="col-form-label">Is Driver For Bussiness Purpose</label>
                <input type="text" class="form-control" placeholder="Yes or No"  required v-model="BP">
              </b-form-group>
                  <div class="float-left">
                <b-button
                  variant="primary"
                  class="px-4 "
                  to="/Vehicle"
                >Back</b-button>
              </div>

                <div class="float-right">

                 <b-button variant="primary" class="px-4" :disabled="loading" @click="sendData()" >
                   <i class="fa fa-spin fa-spinner" aria-hidden="true" v-if="loading"></i>
                  {{loading ?'':'Next'}}
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
import Multiselect from "vue-multiselect";
export default {

  data() {
    return {
      errors:{},
      loading: false,
      Vid: "",
      Fname: "",
      Lname: "",
      email: "",
      BP:""



    };
  },
  methods: {
    sendData() {

      this.loading = true;

      Axios.post("http://127.0.0.1:8000/api/drivers", {
        vehicle_id: this.Vid,
        Fname: this.Fname,
        Lname: this.Lname,
        email: this.email,
        DriverForBussinesPurpose:this.BP


      })
        .then(response => {
          localStorage.setItem("auth", JSON.stringify(response.data.data));

          Swal.fire({
            title: "Success!",
            text: "Client Added",
            type: "success",
            confirmButtonText: "Oky"
          });

          this.$router.push("AddClient");
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$router.push("Driver");
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
