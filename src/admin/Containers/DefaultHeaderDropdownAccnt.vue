
<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/Myaccount.png"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-user" />My Profile</b-dropdown-item>
      <b-dropdown-item><i class="icon-settings"/>Change Password</b-dropdown-item>
      <b-dropdown-item @click="logout()"><i class="fa fa-lock" />Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>
<script>

import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'UdefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    logout(){
      localStorage.removeItem("auth");this.$root.auth={};
      this.$router.push("Loginform");
    }

  },
}
</script>
