<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill The Form To Add Insurance New Category</strong>
          </div>
          <b-card-body>
            <b-form class="addcategory">
              <b-form-group>
                <label class="col-form-label">Category Name</label>
                <input
                  type="text"
                  v-bind:class="{'is-invalid':errors.categoryName,'is-valid':!errors.categoryName}"
                  v-model="categoryName"
                  class="form-control"
                  placeholder="Enter Category Name"
                >
              </b-form-group>
              <div  class="float-left">
                <b-button @click="addCategory()" :disabled="loading" variant="primary" class="px-4">
                  <i class="fa fa-spin fa-spinner" aria-hidden="true" v-if="loading"></i>
                  {{loading ?'':'Add'}}
                </b-button>
              </div>
              <div class="float-right">
                <b-button @click="cancelForm()"  variant="primary" class="px-4">Cancel
                </b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill The Form To Add Insurance New SubCategory</strong>
          </div>
          <b-card-body>
            <b-form class="addcategory">
              <b-form-group>
                <label class="col-form-label">Category Code</label>
                <input
                  type="number"
                  min="1"
                  v-bind:class="{'is-invalid':errors.categoryCode,'is-valid':!errors.categoryCode}"
                  v-model="categoryCode"
                  class="form-control"
                  placeholder="Enter Category Code"
                >
              </b-form-group>
               <b-form-group>
                <label class="col-form-label">Sub Category Name</label>
                <input
                  type="text"
                  v-bind:class="{'is-invalid':errors.subCategoryName,'is-valid':!errors.subCategoryName}"
                  v-model="subCategoryName"
                  class="form-control"
                  placeholder="Enter Sub Category Name"
                >
              </b-form-group>
              <div  class="float-left">
                <b-button @click="addSubcategory(), resetForm()" :disabled="loading1" variant="primary" class="px-4">
                  <i class="fa fa-spin fa-spinner" aria-hidden="true" v-if="loading1"></i>
                  {{loading1 ?'':'Add'}}
                </b-button>
              </div>
              <div class="float-right">
                <b-button @click="cancelForm()"  variant="primary" class="px-4">Cancel
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
      categoryName: "",
      subCategoryName: "",
      categoryCode:"",
      loading: false,
      loading1:false,
      errors: {}
    };
  },

  methods: {
    addCategory() {
      this.loading = true;

      Axios.post("http://127.0.0.1:8000/api/categories", {
        CategoryName: this.categoryName,
        // SubCategoryName: this.subCategoryName
      })
        .then(response => {
          this.$noty.success("Category created.");
          localStorage.setItem("auth", JSON.stringify(response.data.data));
           this.$router.push("AddCategory");
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$router.push("AddCategory");
          Swal.fire({
            title: "Error!",
            text: "Category Not Added",
            type: "error",
            confirmButtonText: "Ok"
          });

          this.errors = response.data;
        });

    },
     resetForm() {
        this.CategoryName = "";
        // this.code="";
      },

    cancelForm(){
      this.$router.push("dashboard");


    },
    addSubcategory() {
      this.loading1 = true;

      Axios.post("http://127.0.0.1:8000/api/sub_categories", {
         category_id: this.categoryCode,
         subcategory_name: this.subCategoryName
      })
        .then(response => {
          this.$noty.success("SubCategory created.");
          localStorage.setItem("auth", JSON.stringify(response.data.data));
           this.$router.push("AddCategory");
           this.loading1 = false;
        })
        .catch(({ response }) => {
          this.loading1 = false;
          this.$router.push("AddCategory");
          Swal.fire({
            title: "Error!",
            text: "SubCategory Not Added",
            type: "error",
            confirmButtonText: "Ok"
          });

          this.errors = response.data;
        });
    },
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
