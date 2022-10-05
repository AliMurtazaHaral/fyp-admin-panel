import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Mechanic Management',
  },
  {
    component: CNavItem,
    name: 'Add Mechanic',
    to: '/mechanic-section/addMechanic',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View Mechanic',
    to: '/mechanic-section/viewMechanic',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Edit Mechanic',
    to: '/mechanic-section/updateMechanic',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Delete Mechanic',
    to: '/mechanic-section/deleteMechanic',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Vendor Shop Management',
  },
  {
    component: CNavItem,
    name: 'Add A New Vendor',
    to: '/vendor-section/addVendor',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View Vendors',
    to: '/vendor-section/viewVendor',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Manage Vendor',
    to: '/vendor-section/manageVendor',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
  {
    component: CNavItem,
    name: 'Delete Vendor',
    to: 'vendor-section/deleteVendor',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  
  {
    component: CNavTitle,
    name: 'Rider Management',
  },
  {
    component: CNavItem,
    name: 'Add A New Rider',
    to: '/rider-section/addRider',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View Riders',
    to: '/rider-section/viewRider',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  
]

export default _nav
