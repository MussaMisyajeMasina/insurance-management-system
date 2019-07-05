
<template>
  <div>
    <b-card-group>
      <div class="card-body table-responsive p-0">
        <table class="table table-hover">
          <tbody>
            <tr>
              <th>Category Code</th>
              <th>Category Name</th>
              <th>SubCategories</th>
              <th>Date Created</th>
              <th>Modify</th>
            </tr>
            <tr v-for="Category in Categories" :key="Category.id">
              <td>{{Category.id}}</td>
              <td>{{Category.CategoryName | upText}}</td>
              <td>
                <tr v-for="subcategory in  SubCategories" :key="subcategory.id" >
                  <td v-if="Category.id===subcategory.category_id">{{subcategory.subcategory_name | upText}}</td>
                </tr>

              </td>
              <td>{{Category.created_at | myDate}}</td>
              <td>
                <b-button variant="link" class="px-0" v-b-modal.modal-prevent-closing>
                  <i class="fa fa-edit" style="font-size:24px ;color:blue"></i>
                </b-button>/
                <b-button variant="link" class="px-0" @click="remove(Category.id)">
                  <i class="fa fa-trash" style="font-size:24px ;color:red"></i>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card-group>
    <!-- Modal -->
    <div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Fill The Form To Edit"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk()"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="nameState"
            label="Category Code"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              type="number"
              min="1"
              v-model="code"
              placeholder="Enter Category Code"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :state="nameState"
            label="CategoryName"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="CategoryName"
              placeholder="Enter SubCategory Name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <!-- end of modal -->
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      CategoryName: "",
      code: "",
      nameState: null,
      errors: {},
      SubCategories: {},

      Categories: {},
      loading: false
    };
  },
  methods: {
    handleOk() {
      console.log(this.code);
      axios
        .put("http://127.0.0.1:8000/api/categories/"+this.code, {
           CategoryName: this.CategoryName
        })
        .then(response => {

           localStorage.setItem("auth", JSON.stringify(response.data.data));
           window.location.reload()
           this.$noty.success("Category updated.");


        })
        .catch(error => {
          console.log(err);
          Swal.fire({
              title: "Error!",
              text: "Not edited",
              type: "error",
              confirmButtonText: "Ok"
            });
            this.errors = response.data;
        });




       },
      resetModal() {
        this.CategoryName = "";
        this.code="";
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return;
        }

        // Push the name to submitted names
        this.submittedNames.push(this.name);
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide();
        });
    },
    getSubCategories(){
      axios
        .get("http://127.0.0.1:8000/api/sub_categories")
        .then(({ data }) => (this.SubCategories = data.data));

    },
    getCategories(id) {
      axios
        .get("http://127.0.0.1:8000/api/categories")
        .then(({ data }) => (this.Categories = data.data));
    },

    remove(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Delete it!"
      })
        .then(result => {
          if (result.value) {
            axios
              .delete("http://127.0.0.1:8000/api/categories/" + id)
              .then(response => {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                 window.location.reload()


                this.$router.push("ManageCategory");
              });
          }
        })
        .catch(({ response }) => {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
          this.errors = response.data;
        });

    }
  },
  created() {
    this.getCategories();
    this.getSubCategories();
  }
};
</script>
