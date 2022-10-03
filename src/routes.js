import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Mechanic Section
const AddMechanic = React.lazy(() => import('./views/mechanic-section/AddMechanic'))
const ViewMechanic = React.lazy(() => import('./views/mechanic-section/ViewMechanic'))
const UpdateMechanic = React.lazy(() => import('./views/mechanic-section/UpdateMechanic'))
const DeleteMechanic = React.lazy(() => import('./views/mechanic-section/DeleteMechanic'))

// Vendor Section
const AddVendor = React.lazy(() => import('./views/vendor-section/AddVendor'))
const ViewVendor = React.lazy(() => import('./views/vendor-section/ViewVendor'))
const ManageVendor = React.lazy(() => import('./views/vendor-section/ManageVendors'))
const DeleteVendor = React.lazy(() => import('./views/vendor-section/DeleteVendor'))

// Rider Section
const AddRider = React.lazy(()=> import('./views/rider-section/AddRider'))
const ViewRider = React.lazy(()=> import('./views/rider-section/ViewRider'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  { path: '/mechanic-section/addMechanic', name: 'Add Mechanic', element: AddMechanic },
  { path: '/mechanic-section/viewMechanic', name: 'View Mechanics', element: ViewMechanic },
  { path: '/mechanic-section/updateMechanic', name: 'Update Mechanic', element: UpdateMechanic },
  { path: '/mechanic-section/deleteMechanic', name: 'Delete Mechanic', element: DeleteMechanic },
  
  { path: '/vendor-section/addVendor', name: 'Add A New Vendor', element: AddVendor },
  { path: '/vendor-section/viewVendor', name: 'View Vendors', element: ViewVendor },
  { path: '/vendor-section/manageVendor', name: 'Update Existing Vendor', element: ManageVendor },
  { path: '/vendor-section/deleteVendor', name: 'Delete A Vendor', element: DeleteVendor },

  {path: '/rider-section/addRider', name:'Add A New Rider', element: AddRider},
  {path: '/rider-section/viewRider', name:'View Rider', element: ViewRider}
]

export default routes
