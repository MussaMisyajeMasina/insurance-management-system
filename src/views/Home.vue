<template>
  <div id="home">
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <a class="navbar-brand" href="#">INSURANCE MANAGEMENT SYSTEM</a>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
         <!-- <li class="nav-item active">
            <router-link class="nav-link" to="/Udashboard">User Login</router-link>
          </li>-->
          <li class="nav-item active">
            <router-link class="nav-link" to="/Loginform" >Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <h3 class="text-center my-4">Please sign in to continue</h3> -->
  <div id="showcase">
    <h1>IMS</h1>
    <h2>Insurance Management System</h2>

  </div>

  <!-- Footer -->
  <footer class="page-footer fixed-bottom font-small pt-4">

    <!-- Copyright -->
    <div class="footer-copyright text-center font-2xl py-3">
      Copyright©
      <a  href="#">Insurance Management System</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
</template>
<script>
export default {

}
</script>

<style scoped>
#home {
  font-family: 'Poppins', sans-serif;
  background:rgb(231, 226, 210);
  text-align: center;
  border-radius: 0px !important;
  /* background-image: src="require('../src/home.jpg')"; */
}
#showcase {

  padding-top: 20%;
  padding-bottom: 20%;
  color: #044e98;
}
#showcase h1 {
  font-size: 4rem;
  font-weight: bolder;

}
#showcase h2 {
  font-size: 3rem;
  font-weight: bolder;
}
.footer-copyright{
  background-color : #343a40;
  color: #ffff;
}
.footer-copyright a{
  color: #ffff;
}
.page-footer{
   background-color : #343a40;
}
.navbar-brand {
  font-size: 1rem;
}
#navbarMenu .nav-link:hover{
  color: rgba(51,103,214,1);
  font-weight: bold;
}
.footer-copyright a:hover{
  color: rgba(51,103,214,1);
}
.bg-dark{
  color: red;
}



</style>
