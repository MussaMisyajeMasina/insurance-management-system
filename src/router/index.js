import Vue from 'vue'
import Router from 'vue-router'

//Home
const Home = () => import('@/views/Home')
//login
const Login = () => import('@/views/Loginform')
//categories
const AddCategory = () => import('@/insuranceCategories/AddCategory')
const ManageCategory =() => import('@/insuranceCategories/ManageCategory')
const AddSubCategory =()=>import('@/insuranceCategories/AddSubCategory')
const ManageSubCategory = () => import('@/insuranceCategories/ManageSubCategory')

//dropdown acccount
const MyProfile = () => import('@/admin account details/MyProfile')
const ChangePassword = () => import('@/admin account details/ChangePassword')

//polices
const AddPolicy = () => import('@/insurance policy/AddPolicy')
const ManagePolicy =()=>import('@/insurance policy/ManagePolicy')

//user details
const AddUser = ()=> import('@/user details/AddUser')
const AllUser= () => import('@/user details/AllUser')


//user imports
//anything starting U, is related to user dashboard
const UdefaultContainer = () => import('@/user/UdefaultContainer')
const Udashboard = () => import('@/user/Udashboard')


// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

Vue.use(Router)


export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
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
        {
          path: 'AddSubCategory',
          name: 'Sub Category',
          component: AddSubCategory,
        },
        {
          path: 'ManageSubCategory',
          name: 'Sub Category',
          component: ManageSubCategory,
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
        {
          path: 'AddPolicy',
          name: 'Policies',
          component: AddPolicy,
        },
        {
          path: 'ManagePolicy',
          name: 'policies',
          component: ManagePolicy,
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

      ]
    },
    {
      path: '/Udashboard',
      name: 'Home',
      component: UdefaultContainer,
      children: [{
          path: 'UDashboard',
          name: 'Udashboard',
          component: Udashboard

        },
        {
          path: 'AddCategory',
          name: 'Add Category',
          component: AddCategory,
        },

      ]
    },
  ]
})
