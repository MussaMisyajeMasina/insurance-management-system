
<template>
  <div>
    <b-card-group>
      <div class="card-body table-responsive p-0">
        <table class="table table-hover">
          <tbody>
            <tr>
              <th>Client id</th>
              <th>Policy Number</th>
              <th>Date Created</th>
               <th>Expire Date </th>
              <th>Modify</th>
            </tr>
            <tr v-for="policy in Policies " :key="policy.id">
              <td>{{policy.client_id}}</td>
              <td>{{policyy.PolicyNumber | upText}}</td>
              <td>{{policy.created_at | myDate}}</td>
              <td>{{policy.ExpireDate | upText}}</td>
              <td>
                <b-button variant="link" class="px-0"   v-b-modal.modal-prevent-closing  >
                <i class="fa fa-edit" style="font-size:24px ;color:blue"></i>
                </b-button>/
                <b-button variant="link" class="px-0" @click="remove(Category.id)">
                  <i class="fa fa-trash "  style="font-size:24px ;color:red" ></i>
                </b-button>
              </td>
            </tr>
          </tbody>
          hhhh{{Policies }}
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
        name1: '',
        name2: '',
        nameState: null,
        submittedNames: [],

      Policies : {},
      loading: false
    };
  },

  methods: {
    getpolicy(id) {
      Axios
        .get("http://127.0.0.1:8000/api/policies")
        .then(

          ({ data }) => (this.Policies = data.policies)


          );


    },
  },
  created() {
    this.getpolicy();

  }
};
//   methods: {
//     resetModal() {
//         this.name = ''
//         this.nameState = null
//         },
//     handleSubmit() {
//         // Exit when the form isn't valid
//         if (!this.checkFormValidity()) {
//           return
//         }
//         // Push the name to submitted names
//         this.submittedNames.push(this.name)
//         // Hide the modal manually
//         this.$nextTick(() => {
//           this.$refs.modal.hide()
//         })
//       },
//  getPolicy(){
//       Axios
//         .get("http://127.0.0.1:8000/api/policies")
//         .then(

//           ({ data }) => (this.Policies = data.policies)


//           );


//     },
//     remove(id) {

//           Swal.fire({
//           title: 'Are you sure?',
//           text: "You won't be able to revert this!",
//           type: 'warning',
//           showCancelButton: true,
//           confirmButtonColor: '#3085d6',
//           cancelButtonColor: '#d33',
//           confirmButtonText: 'Yes,Delete it!'
//         }).then((result) => {
//             if (result.value) {

//             axios.delete('http://127.0.0.1:8000/api/categories/'+id)
//             .then(response => {

//             Swal.fire(
//               'Deleted!',
//               'Your file has been deleted.',
//               'success'
//             )


//           this.$router.push("ManageCategory");
//         })


//          } })
//         .catch(({ response }) => {
//           Swal.fire({
//                     type: 'error',
//                     title: 'Oops...',
//                     text: 'Something went wrong!',

//                   })
//           this.errors = response.data;
//         });






//     }
//   },
//   created() {
//     this.getPolicy();
//   }
// };
</script>
