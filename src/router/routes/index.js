import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/Rfq7/rfqN'

// ** Merge Routes
const Routes = [
  {
    path: '/Rfq7/rfqN',
    component: lazy(() => import('../../views/Rfq7/rfqN'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/ccdashboard',
    component: lazy(() => import('../../views/dashboards/call_center'))
  },
  {
    path: '/ogedashbaord',
    component: lazy(() => import('../../views/dashboards/on_ground_executive'))
  },
  {
    path: '/comingSoon',
    component: lazy(() => import('../../views/pages/comingSoon'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
