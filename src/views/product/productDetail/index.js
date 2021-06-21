// ** React Imports
import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

// ** Product detail components
import ItemFeatures from './ItemFeatures'
import ProductDetails from './productDetails'
// import RelatedProducts from './RelatedProducts'
import '@styles/react/libs/swiper/swiper.scss'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import ProductInfo from './productInfo'
// ** Third Party Components
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
//import { getProduct, deleteWishlistItem, addToWishlist, addToCart } from '../store/actions'


const Details = () => {
  // ** Vars
  // const params = useParams().product
  // const productId = params.substring(params.lastIndexOf('-') + 1)

  // // ** Store Vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.ecommerce)

  // ** ComponentDidMount : Get product
  // useEffect(() => {
  //   dispatch(getProduct(productId))
  // }, [])

  return (
    <Fragment>
      <div >

        
      </div>
      <BreadCrumbs breadCrumbTitle='Product Details' breadCrumbParent='Equipment' breadCrumbChild='Digital' breadCrumbActive='Thermometer X30-Pro' />
      <div >
       
          <Card>
            <CardBody>
              <ProductDetails />
            </CardBody>
            
          </Card>

          <Card className='pb-1'>
            <CardBody>
               <ProductInfo />
            </CardBody>           
          </Card>

          <Card className='pb-1'>
            <CardBody>
               <ItemFeatures />
            </CardBody>           
          </Card>
        
      </div>
    </Fragment>
  )
}

export default Details
