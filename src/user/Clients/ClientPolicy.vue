
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col  col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill the form to add a client Policy </strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">Client Number</label>
                <input type="number" v-model="Cnumber" :min="1"   class="form-control" placeholder="Enter Client Number" >
              </b-form-group>
               <b-form-group  v-model="CategoryName" v-for="category in Categories" :key="category">
                <label class="col-form-label">Insurance Category</label>
                <b-form-select
                  :options="category.CategoryName"
                  placeholder="Choose District"
                  required
                ></b-form-select>
               </b-form-group>
              <!-- <b-form-group>
                <label class="col-form-label">Insurance Category Name</label>
                <input type="text" v-model="CategoryName" class="form-control" placeholder="Enter Category Name" >
              </b-form-group> -->

              <b-form-group>
                <label class="col-form-label">Policy Number</label>
                <input type="number" v-model="Pnumber" :min="1"  class="form-control" placeholder="Enter Policy Number" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Effective Date</label>
                <input type="date" v-model="Efdate" class="form-control" placeholder="Enter Effective Date" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Expire Date</label>
                <input type="date" v-model="Exdate" class="form-control" placeholder="Enter Expire Date" >
              </b-form-group>

                <div class="float-right">

                 <b-button variant="primary" class="px-4" :disabled="loading" @click="sendData()" >
                   <i class="fa fa-spin fa-spinner" aria-hidden="true" v-if="loading"></i>
                  {{loading ?'':'Next'}}
                   </b-button>

                </div>
                <div class="float-left">
                <b-button
                  variant="primary"
                  class="px-4 "
                  to="/AddClient"
                >Back</b-button>
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
      Cnumber: "",
      Efdate: "",
      Exdate: "",
      CategoryName: "",
      districts: ["vehicle", "fire", "lightining", "house", "life", "others"],
      Categories:{}

    };
  },
  methods: {
    getCategory() {
       Axios
        .get("http://127.0.0.1:8000/api/categories")
        .then(({ data }) => (this.Categories = data.data));
        console.log("mussa")
    },
    sendData() {

      this.loading = true;
      Axios.post("http://127.0.0.1:8000/api/policies", {
        PolicyNumber: this.Pnumber,
        client_id: this.Cnumber,
        EffectiveDate: this.Efdate,
        ExpireDate: this.Exdate,
        CategoryName: this.CategoryName
      })
        .then(response => {
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          this.$router.push("Vehicle");
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$router.push("ClientPolicy");
          Swal.fire({
            title: "Error!",
            text: "Please fiil The Requred Feilds",
            type: "error",
            confirmButtonText: "Ok"
          });

          this.errors = response.data;
        });
    }
  },
   created() {
    this.getCategory();
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
