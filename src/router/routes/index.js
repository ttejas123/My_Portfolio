import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/Rfq7/rfqN',
    component: lazy(() => import('../../views/Rfq7/rfqN'))
  },
  {
    path: '/topbar',
    component: lazy(() => import('../../views/Rfq7/topbar'))
  },
  {
    path: '/serach-grid',
    component: lazy(() => import('../../views/Rfq7/searchGrid.js'))
  },
  {
    path: '/temp',
    component: lazy(() => import('../../views/Home.js'))
  },
  {
    path: '/home',
    component: lazy(() => import('../../views/Home/index.js'))
  },
  {
    path: '/create-cart',
    component: lazy(() => import('../../views/Rfq7/createCart.js'))
  },
  {
    path: '/cart-buyer',
    component: lazy(() => import('../../views/RFQ/cartBuyer.js'))
  },
  {
    path: '/product/productDetails',
    component: lazy(() => import('../../views/product/productDetail'))
  },
  {
    path: '/search/searchPage',
    component: lazy(() => import('../../views/search'))
  },
  {
    path: '/homes/dashBoard',
    component: lazy(() => import('../../views/Ddashboard'))
  },
  {
    path: '/create-cart',
    component: lazy(() => import('../../views/Rfq7/createCart.js'))
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/register/RegisterV1'))
  },
  {
    path: '/login', // USE THIS
    component: lazy(() => import('../../views/Login'))
  },
  {
    path: '/login1',
    component: lazy(() => import('../../views/register/LoginV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/register/RegisterV1'))
  },
  {
    path: '/log1',
    component: lazy(() => import('../../views/register/LoginV1')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/home1',
    component: lazy(() => import('../../views/Home/home_info_card'))
  }

]

export { DefaultRoute, TemplateTitle, Routes }
