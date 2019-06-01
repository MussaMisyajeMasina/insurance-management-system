<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Fill The Form Add Policy</strong>
          </div>
          <b-card-body>
            <b-form>
              <b-form-group>
                <label class="col-form-label">Category</label>
                <input type="text" class="form-control" placeholder="category">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Sub category Name</label>
                <input type="text" class="form-control" placeholder="Select SubCategory Name">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Policy Name</label>
                <input type="text" class="form-control" placeholder="New Password">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Sum Assured</label>
                <input type="numeric" class="form-control" placeholder="Amount">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Premium</label>
                <input type="numeric" class="form-control" placeholder="Enter premium">
              </b-form-group>
              <b-form-group>
                <label class="col-form-label">Tenure</label>
                <input type="text" class="form-control" placeholder>
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
