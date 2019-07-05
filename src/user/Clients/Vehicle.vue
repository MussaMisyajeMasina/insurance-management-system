
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill the form to add Vehicle Details </strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label"> Policy Number</label>
                <input type="number" class="form-control" required :min="1" placeholder="Enter Policy Number" v-model="Pnumber" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label"> Make Year</label>
                <input type="date" class="form-control" required placeholder="Enter Make Year" v-model="date" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Color</label>
                <input type="text" class="form-control" required placeholder="Enter Color" v-model="color" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Number Plate</label>
                <input type="text" class="form-control" required placeholder="Enter Number Plate" v-model="Nplate" >
              </b-form-group>
              <div class="float-left">
                <b-button
                  variant="primary "
                  class="px-4 "
                  to="/ClientPolicy"
                >Back</b-button>
              </div>

                <div class="float-right">

                 <b-button variant="primary " class="px-4" :disabled="loading" @click="sendData()" >
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
  components: { Multiselect },
  data() {
    return {
      errors:{},
      loading: false,
      Pnumber: "",
      date: "",
      color: "",
      Nplate: "",



    };
  },
  methods: {
    sendData() {

      this.loading = true;

      Axios.post("http://127.0.0.1:8000/api/vehicles", {
        policy_id: this.Pnumber,
        MakeYear: this.date,
        color: this.color,
        NumberPlate: this.Nplate,

      })
        .then(response => {
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          this.$router.push("Driver");
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$router.push("Vehicle");
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
