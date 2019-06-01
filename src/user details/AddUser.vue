<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill The Form To Add User</strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">First Name</label>
                <input type="text" class="form-control" placeholder="Enter first name">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Enter last name">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Contact Number</label>
                <input type="text" class="form-control" placeholder="Enter phone number">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Email</label>
                <input type="email" class="form-control" placeholder="Enter email">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Password</label>
                <input type="password" class="form-control" placeholder="Enter password">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Confirm Password</label>
                <input type="password" class="form-control" placeholder="Enter password">
              </b-form-group>
              <b-col cols="6">
                <b-button variant="primary" class="px-4">Submit</b-button>
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
