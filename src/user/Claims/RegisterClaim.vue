
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>register a claim </strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">First Name</label>
                <input type="text" class="form-control" placeholder="Enter First Name" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Enter Last Name" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Gender</label>
                <input type="text" class="form-control" placeholder="Enter Last Name" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Phone Number</label>
                <input type="text" class="form-control" placeholder="Enter Phone Number" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Email Address</label>
                <input type="text" class="form-control" placeholder="Enter Email Address" >
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">District</label>
                <input type="text" class="form-control" placeholder="Enter District" >
              </b-form-group>
              <b-col cols="6">
                <b-button variant="primary" class="px-4" >Submit</b-button>
              </b-col>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
     
  </div>
</template>


<script>
export default {
  name: "forms",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true
    };
  },
  methods: {
    click() {
      // do nothing
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
