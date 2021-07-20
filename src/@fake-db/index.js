import mock from './mock'
import './apps/invoice'
import './apps/eCommerce'

import './jwt'

mock.onAny().passThrough()
