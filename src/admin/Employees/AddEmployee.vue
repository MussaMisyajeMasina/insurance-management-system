
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col  col lg="6" md="6" offset-md="3">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill the form to add an employee</strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">First Name</label>
                <input type="text" class="form-control" placeholder="Enter First Name">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Enter Last Name">
              </b-form-group>
              <div></div>
              <div>
                <b-dropdown id="gender" text="Select Gender" class="m-md-12" required>
                  <b-dropdown-item>Male</b-dropdown-item>
                  <b-dropdown-item>Female</b-dropdown-item>
                </b-dropdown>
              </div>
              <b-form-group>
                <label class="col-form-label" required>Phone Number</label>
                <input type="text" class="form-control" placeholder="Enter Phone Number">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Email Address</label>
                <b-form-input
                  id="normalEmail"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  autocomplete="email"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <div>
                  <b-dropdown id="district" text="Select District" class="m-md-12">
                    <b-dropdown-item>Chitipa</b-dropdown-item>
                    <b-dropdown-item>Karonga</b-dropdown-item>
                    <b-dropdown-item>Likoma</b-dropdown-item>
                    <b-dropdown-item>Mzimba</b-dropdown-item>
                    <b-dropdown-item>Nkhatabay</b-dropdown-item>
                    <b-dropdown-item>Rumphi</b-dropdown-item>
                    <b-dropdown-item>Dedza</b-dropdown-item>
                    <b-dropdown-item>Dowa</b-dropdown-item>
                    <b-dropdown-item>Kasungu</b-dropdown-item>
                    <b-dropdown-item>Lilongwe</b-dropdown-item>
                    <b-dropdown-item>Mchinji</b-dropdown-item>
                    <b-dropdown-item>Nkhotakota</b-dropdown-item>
                    <b-dropdown-item>Ntchewu</b-dropdown-item>
                    <b-dropdown-item>Ntchisi</b-dropdown-item>
                    <b-dropdown-item>Salima</b-dropdown-item>
                    <b-dropdown-item>Balaka</b-dropdown-item>
                    <b-dropdown-item>Blantyre</b-dropdown-item>
                    <b-dropdown-item>Chikwawa</b-dropdown-item>
                    <b-dropdown-item>Chiradzulu</b-dropdown-item>
                    <b-dropdown-item>Machinga</b-dropdown-item>
                    <b-dropdown-item>Mangochi</b-dropdown-item>
                    <b-dropdown-item>Mwanza</b-dropdown-item>
                    <b-dropdown-item>Nsanje</b-dropdown-item>
                    <b-dropdown-item>Thyolo</b-dropdown-item>
                    <b-dropdown-item>Phalombe</b-dropdown-item>
                    <b-dropdown-item>Zomba</b-dropdown-item>
                    <b-dropdown-item>Neno</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-form-group>
              <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4">Submit</b-button>
                  </b-col>
              </b-row>
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
