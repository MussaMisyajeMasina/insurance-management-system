export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-doc',
    },
    {
      title: true,
      name: 'Categories',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'New Category',
      url: '/AddCategory',
      icon: 'icon-plus '
    },
     {
        name: 'Manage Categories',
          url: '/ManageCategory',
          icon: 'icon-doc'
    },

    {
     name: 'Manage SubCategories',
      url: '/ManageSubCategory',
       icon: 'icon-doc'
    },

      {
        title: true,
        name: 'Claims',
        class: '',
        wrapper: {
          element: '',
          attributes: {}
        }
      }, {
        name: 'Accepted claims',
        url: '/AcceptedClaims',
        icon: 'icon-doc',
      }, {
        name: 'Rejected Claims',
        url: '/RejectedClaims',
        icon: 'icon-doc',
      }, {
        name: 'Pending Claims',
        url: '/PendingClaims',
        icon: 'icon-doc',
      },
      {
        title: true,
        name: 'Employees',
        class: '',
        wrapper: {
          element: '',
          attributes: {}
        },
      },
      {
        name: 'New Employee',
        url: '/AddEmployee',
        icon: 'icon-plus',
      },
      {
        name: 'Manage Employees',
        url: '/AllEmployee',
        icon: 'icon-doc',
      },
      {
        title: true,
        name: 'Users',
        class: '',
        wrapper: {
          element: '',
          attributes: {}
        },
      },
      {
        name: 'New User',
        url: '/AddUser',
        icon: 'icon-plus',
      },
      {
        name: 'All Users',
        url: '/AllUser',
        icon: 'icon-doc',
      },
    {
      divider: true
    },
  ]
}

