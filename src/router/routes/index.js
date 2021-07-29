import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/Homes/response',
    component: lazy(() => import('@src/views/invoice/list'))
  },
  {
    path: '/tabless/tables1ss',
    component: lazy(() => import('@src/views/invoice/list/dummyTable'))
  },
  {
    path: '/Homes/mproduct',
    component: lazy(() => import('@src/views/MyProd/index.js'))
  },
  {
    path: '/Rfq7/rfqN',
    component: lazy(() => import('../../views/Rfq7/rfqN'))
  },
  {
    path: '/Homes/bidDetailPage/:id',
    component: lazy(() => import('@src/views/Dashboard1/components/bidDetail/bidDetails.js'))
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
    path: '/Homes/invoicepreview/:id',
    component: lazy(() => import('../../views/Orders/components/invoice/preview')),
    meta: {
      navLink: '/Homes/invoicepreview'
    }
  },
  {
    path: '/Homes/invoicepreview',
    exact: true,
    component: () => <Redirect to='/Homes/invoicepreview/4987' />
  },
  {
    path: '/Homes/invoiceprint',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/Orders/components/invoice/print'))
  },
  {
    path: '/Homes/invoiceedit/:id',
    component: lazy(() => import('../../views/Orders/components/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
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
    path: '/Homes/bidCreate',
    component: lazy(() => import('../../views/Rfq7/bidDetails'))
  },
  {
    path: '/Homes/searchPage',
    component: lazy(() => import('../../views/search'))
  },
  {
    path: '/homes/dashBoard',
    component: lazy(() => import('../../views/Ddashboard'))
  },
  {
    path: '/Homes/Dashboards',
    component: lazy(() => import('../../views/Dashboard1'))
  },
  {
    path: '/seller-rfq',
    component: lazy(() => import('../../views/RFQ/SellerRfq'))
  },
  {
    path: '/Homes/Bid',
    component: lazy(() => import('../../views/bid'))
  },
  {
    path: '/Homes/Orders',
    component: lazy(() => import('../../views/Orders'))
  },
  {
    path: '/Homes/Products',
    component: lazy(() => import('../../views/Products'))
  },
  {
    path: '/Homes/Rewards',
    component: lazy(() => import('../../views/Rewards'))
  },
  {
    path: '/Homes/Sponsorship',
    component: lazy(() => import('../../views/Sponsorship'))
  },
  {
    path: '/Homes/Notifications',
    component: lazy(() => import('../../views/Notifications'))
  },
  {
    path: '/create-cart',
    component: lazy(() => import('../../views/Rfq7/createCart.js'))
  },
  {
    path: '/seller/seller-edit',
    component: lazy(() => import('../../views/Seller/SellerEdit'))
  },
  {
    path: '/seller/my-products',
    component: lazy(() => import('../../views/Seller/Products/MyProducts'))
  },
  {
    path: '/seller/create-product',
    component: lazy(() => import('../../views/Seller/Products/CreateProduct'))
  },
  {
    path: '/buyer/buyer-edit',
    component: lazy(() => import('../../views/Buyer/BuyerEdit'))
  },
  {
    path: '/rights/teamr',
    component: lazy(() => import('../../views/rights'))
  },
  {
    path: '/profile/rewards',
    component: lazy(() => import('../../views/MyRewards'))
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/register/RegisterV1'))
  },
  {
    path: '/my-profile',
    component: lazy(() => import('../../views/MyProfile'))
  },
  {
    path: '/edit-product/:id',
    component: lazy(() => import('../../views/Seller/Products/CreateProduct/editProduct'))
  },
  {
    path: '/login', // USE THIS
    component: lazy(() => import('../../views/Login'))
  },
  {
    path: '/order-details', // USE THIS
    component: lazy(() => import('../../views/Orders/orderDetailsView/orderDetails'))
  },
  {
    path: '/login1',
    component: lazy(() => import('../../views/register/LoginV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/site-map',
    component: lazy(() => import('../../views/SiteMap'))
  },
  {
    path: '/sales-order',
    component: lazy(() => import('../../views/Orders'))
  },
  {
    path: '/raise-redressal',
    component: lazy(() => import('../../views/MyProfile/Redressal/raiseRedressal'))
  },
  {
    path: '/redressal-list',
    component: lazy(() => import('../../views/MyProfile/Redressal/redressalList'))
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
  },
  {
    path: '/edit_customization',
    component: lazy(() => import('../../views/Rfq7/Customization_Edit'))
  },
  {
    path: '/notification/all',
    component: lazy(() => import('../../views/Notification/All'))
  },
  {
    path: '/order/purchase_intent/all',
    component: lazy(() => import('../../views/PurchaseIntent/'))
  },
  {
    path: '/profile/setting',
    component: lazy(() => import('../../views/AccountSetting'))
  },
  {
    path: '/profile/setting1',
    component: lazy(() => import('../../views/AccountSetting/'))
  }

]

export { DefaultRoute, TemplateTitle, Routes }
