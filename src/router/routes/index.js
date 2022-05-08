import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/Homes/myprofile'

// ** Merge Routes
const Routes = [
  {
    path: '/Homes/myprofile',
    component: lazy(() => import('@src/views/MyProd/index.js'))
  },
  {
    path: '/Homes/studymeterial',
    component: lazy(() => import('@src/views/ecommerce/shop/index.js'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
