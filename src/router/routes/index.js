import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/table/tables',
    component: lazy(() => import('@src/views/invoice/list'))
  },
  {
    path: '/tabless/tables1ss',
    component: lazy(() => import('@src/views/invoice/list/dummyTable'))
  },
  {
    path: '/Rfq7/rfqN',
    component: lazy(() => import('../../views/Rfq7/rfqN'))
  },
  {
    path: '/Rfq7s/subbar',
    component: lazy(() => import('../../views/Rfq7/subBar'))
  },
  {
    path: '/topbar',
    component: lazy(() => import('../../views/Rfq7/topbar'))
  },
  {
    path: '/search-grid',
    component: lazy(() => import('../../views/RFQ/searchGrid'))
  },
  {
    path: '/cart-search',
    component: lazy(() => import('../../views/RFQ/cartSearch.js'))
  },
  {
    path: '/invoice-to-select',
    component: lazy(() => import('../../views/RFQ/invoiceToSelect.js'))
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
    path: '/aboutUs',
    component: lazy(() => import('../../views/AboutUs/index.js'))
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
    path: '/cart-page',
    component: lazy(() => import('../../views/RFQ/cartPage.js'))
  },
  {
    path: '/product/productDetails',
    component: lazy(() => import('../../views/product/productDetail'))
  },
  {
    path: '/corporate/team',
    component: lazy(() => import('../../views/Corporate/teamNDrights'))
  },
  {
    path: '/corporate/role',
    component: lazy(() => import('../../views/Corporate/teamNDrights/roles'))
  },
  {
    path: '/corporate/signup',
    component: lazy(() => import('../../views/Corporate/copSignup'))
  },
  {
    path: '/corporate/signin',
    component: lazy(() => import('../../views/Corporate/copSignin'))
  },
  {
    path: '/seller/productGrid',
    component: lazy(() => import('../../views/prodSellerGrid'))
  },
  {
    path: '/rfq/rfqN/bidDetails',
    component: lazy(() => import('../../views/Rfq7/bidDetails'))
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
