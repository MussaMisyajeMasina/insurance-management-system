import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource';
import Notifications from 'vue-notification';
import VueSweetalert2 from 'vue-sweetalert2';
import moment from 'moment';
 import Multiselect from 'vue-multiselect';





//Home
const Home = () => import('@/views/Home')
//login
const Login = () => import('@/views/Loginform')

//categories
const AddCategory = () => import('@/admin/Categories/AddCategory')
const ManageCategory =() => import('@/admin/Categories/ManageCategory')
const ManageSubCategory = () => import('@/admin/Categories/ManageSubCategory')
const SaveCategory =()=>import('@/admin/Categories/SaveCategory')

//claims
const AcceptedClaims = () =>import('@/admin/Claims/AcceptedClaims')
const RejectedClaims = () =>import('@/admin/Claims/RejectedClaims')
const PendingClaims = () =>import('@/admin/Claims/PendingClaims')

//Employees
const AddEmployee = () =>import('@/admin/Employees/AddEmployee')
const AllEmployee = () =>import('@/admin/Employees/AllEmployee')

//manage users
const AddUser = () =>import('@/admin/Users/AddUser')
const AllUser = () =>import('@/admin/Users/AllUser')
const SaveUser = () =>import('@/admin/Users/SaveUser')


//dropdown acccount
const MyProfile = () => import('@/admin/Account/MyProfile')
const ChangePassword = () => import('@/admin/Account/ChangePassword')

// Containers
const DefaultContainer = () => import('@/admin/Containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')


//employee dashbord imports
const UdefaultContainer = () => import('@/user/Containers/UdefaultContainer')
const Udashboard = () => import('@/user/Containers/Udashboard')

//clients
const AddClient = () =>import('@/user/Clients/AddClient')
const User = () =>import('@/user/Clients/User')
const ClientPolicy = () =>import('@/user/Clients/ClientPolicy')
const ManageClientPolicy = () =>import('@/user/Clients/ManageClientPolicy')
const SMS = () =>import('@/user/Clients/SMS')
const Vehicle = () =>import('@/user/Clients/Vehicle')
const Driver = () =>import('@/user/Clients/Driver')
//Claims
const ClaimHistory = () =>import('@/user/Claims/ClaimHistory')
const ManageClaim = () =>import('@/user/Claims/ManageClaim')
const RegisterClaim = () =>import('@/user/Claims/RegisterClaim')

//Premiums
const Bonus = () =>import('@/user/Premiums/Bonus')
const ManagePremium = () =>import('@/user/Premiums/ManagePremium')
const Payment = () =>import('@/user/Premiums/Payment')

//Reports
const Report = () =>import('@/user/Reports/Report')
const Policy = () => import('@/user/Reports/Policy')


Vue.use(Router)
Vue.use(vueResource)
Vue.use(Notifications)
Vue.use(VueSweetalert2)
Vue.use(Multiselect)

Vue.filter('upText', function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
});
Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY');
});



export default new Router({
  // mode: 'hash', // https://router.vuejs.org/api/#mode
  // linkActiveClass: 'open active',
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  mode:"history",
  routes: [{
      path: '/Home',
      component: Home

    },
    {
      path: '/Loginform',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Home',
      name: 'Home',
      component: DefaultContainer,
      children: [{
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'AddCategory',
          name: 'Add Category',
          component: AddCategory,
        },
        {
          path:'ManageCategory',
          name: 'Manage Category',
          component: ManageCategory,
        },
        /*{
          path: 'AddSubCategory',
          name: 'Sub Category',
          component: AddSubCategory,
        },
        {
          path: 'SaveCategory',
          name: 'Categories',
          component: SaveCategory,
        },*/
        {
          path: 'ManageSubCategory',
          name: 'Categories',
          component: ManageSubCategory,
        },

        {
          path: 'SaveCategory',
          name: 'Categories',
          component: SaveCategory,
        },
        {
          path:'AcceptedClaims',
          name: 'Claims',
          component: AcceptedClaims,
        },
        {
          path: 'RejectedClaims',
          name: 'Claims',
          component: RejectedClaims,
        },
        {
          path: 'PendingClaims',
          name: 'Claims',
          component: PendingClaims,
        },
        {
          path: 'AddEmployee',
          name: 'Employees',
          component: AddEmployee,
        },
        {
          path: 'AllEmployee',
          name: 'Employees',
          component: AllEmployee,
        },

        {
          path: 'AddUser',
          name: 'Users',
          component: AddUser,
        },
        {
          path: 'AllUser',
          name: 'Users',
          component: AllUser,
        },
        {
          path: 'SaveUser',
          name: 'Users',
          component: SaveUser,
        },
        {
          path: '/MyProfile',
          name: 'Admin profile',
          component: MyProfile,
        },
        {
          path: '/ChangePassword',
          name: 'Admin profile',
          component:ChangePassword,
        },
      ]
    },
      // employees staffs
    {
      path: '/',
      name: 'Home',
      component: UdefaultContainer,
      children: [{
          path: 'UDashboard',
          name: 'Udashboard',
          component: Udashboard
        },
        {
          path: 'AddClient',
          name: 'Clients',
          component: AddClient,
        },

        {
          path: 'User',
          name: 'Clients',
          component: User,
        },
        {
          path: 'ClientPolicy',
          name: 'Clients',
          component:ClientPolicy,
        },
        {
          path: 'ManageClientPolicy',
          name: 'Clients',
          component: ManageClientPolicy,
        },
        {
          path: 'SMS',
          name: 'Clients',
          component: SMS,
        },
        {
          path: 'ClaimHistory',
          name: 'Claims',
          component: ClaimHistory,
        },
        {
          path: 'ManageClaim',
          name: 'Claims',
          component: ManageClaim,
        },
        {
          path: 'RegisterClaim',
          name: 'Claims',
          component: RegisterClaim,
        },
        {
          path: 'Bonus',
          name: 'Premiums',
          component: Bonus,
        },
        {
          path: 'ManagePremium',
          name: 'Premiums',
          component: ManagePremium,
        },
        {
          path: 'Payment',
          name: 'Premiums',
          component: Payment,
        },
        {
          path: 'Report',
          name: 'Reports',
          component: Report,
        },
        {
          path: 'Vehicle',
          name: 'Clients',
          component: Vehicle,
        },
        {
          path: 'Driver',
          name: 'Clients',
          component: Driver,
        },
        {
          path: 'Policy',
          name: 'Reports',
          component: Policy,
        },

      ]
    },
  ]
})
