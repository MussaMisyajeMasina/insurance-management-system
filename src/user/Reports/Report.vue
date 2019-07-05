<template>
  <!-- Editable table -->
  <div class="card">
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Reports</h3>
    <div class="card-body">
      <button type="button" class="btn btn-primary btn-lg btn-block">Clients</button>
      <button type="button" class="btn btn-secondary btn-lg btn-block" @click="policy()">Policies</button>
      <button type="button" class="btn btn-primary btn-lg btn-block">Premiums</button>
      <button type="button" class="btn btn-secondary btn-lg btn-block">Claims</button>

    </div>
  </div>
</template>
<script>
export default {
  methods:{
    policy(){
       this.$router.push("Policy");
    }
  }
}
</script>
