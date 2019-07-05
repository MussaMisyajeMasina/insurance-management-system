
<template>
  <div>

    <b-card-group>
      <div class="card-body table-responsive p-0">
        <table class="table table-hover">
          <tbody>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Phone#</th>
              <th>Email</th>
              <th>District</th>
              <th>Registration Date</th>
              <th>Modify</th>
            </tr>
            <tr v-for="Client in Clients" :key="Client.id">
              <td>{{Client.id}}</td>
              <td>{{Client.Fname | upText}}</td>
              <td>{{Client.Lname | upText}}</td>
              <td>{{Client.gender}}</td>
              <td>{{Client.PhoneNumber}}</td>
              <td>{{Client.email}}</td>
              <td>{{Client.district}}</td>
              <td>{{Client.created_at | myDate}}</td>
              <td>
                <b-button variant="link" class="px-0" v-b-modal.modal-prevent-closing>
                  <i class="fa fa-edit" style="font-size:24px ;color:blue"></i>
                </b-button>/
                <b-button variant="link" class="px-0" @click="remove(Client.id)">
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
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="nameState"
            label="Category Name"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="name1"
              placeholder="Enter Category Name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :state="nameState"
            label="SubCategoryName"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="name2"
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
      name1: "",
      name2: "",
      nameState: null,
      submittedNames: [],

      Clients: {},
      loading: false
    };
  },
  methods: {
    resetModal() {
      this.name = "";
      this.nameState = null;
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
    getClients() {
      axios
        .get("http://127.0.0.1:8000/api/clients")
        .then(({ data }) => (this.Clients = data.data));
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
              .delete("http://127.0.0.1:8000/api/clients/" + id)
              .then(response => {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");

                this.$router.push("User");
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
    this.getClients();
  }
};
</script>
