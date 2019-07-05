<template>
  <div class="card">
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">POLICY EXPIREDATE REPORT</h3>
    
    <div class = "text-center" >
       <p><p class="text-center">Generated On :<strong>{{  new Date() | myDate}}</strong></p></p>
      <p class = "text-left">&nbsp &nbspTotal Policies:&nbsp &nbsp &nbsp &nbsp <strong>{{tpolicy}}</strong></p>
        <hr />
        <p class ="text-center"><strong>Active policies</strong></p>
      <p><u>Policy Number</u> &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp <u>Expire Date</u></p>
       
       <div v-for="policy in Policies" :key="policy.ExpireDate">
        <div v-if = "new Date()<new Date(policy.ExpireDate)">
          <p> {{policy.PolicyNumber}}&nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp{{policy.ExpireDate}}</p>
        </div>
       </div>
         <hr />
      <p class ="text-center"><strong>Expired Policies</strong></p>
      <p><u>Policy Number</u> &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp <u>Expire Date</u></p>
       
       <div v-for="policy in Policies" :key="policy.ExpireDate">
        <div v-if = "new Date()>new Date(policy.ExpireDate)">
          <p> {{policy.PolicyNumber}}&nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp{{policy.ExpireDate}}</p>
        </div>
       </div>
    
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Swal from "sweetalert2";


export default {


 data() {
    return {
     
      TotalActivePolicies: "",
      TotalExpiredPolicies: "",
      TotalActivePolicies: "",
      TotalExpiredPolicies: "",
      expireDate:[],
      currentDate:"",
      tpolicy:"",
      obj : "",
      Policies:[],
      policyTableExpireDate:[],
    };
  },

  methods: {
    getpolicy() {
      Axios
        .get("http://127.0.0.1:8000/api/policies")
        .then(

          ({ data }) =>{ 
                this.Policies = data.policies;
                this.tpolicy= data.policies_count;       
          });
    },
 checkExpireDate() {
      
   }
  },
  created() {
    this.getpolicy();
    this.checkExpireDate();     
  }
};
</script>
<style scoped>

p{

  font-size: 200%
}

</style>
