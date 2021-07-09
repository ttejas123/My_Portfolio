// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
// ** Product detail components

import ProductDetails from './components'
// import RelatedProducts from './RelatedProducts'
import '@styles/react/libs/swiper/swiper.scss'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Card, CardBody, Col, Row } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
//import { getProduct, deleteWishlistItem, addToWishlist, addToCart } from '../store/actions'


const Details = () => {
const [size, setSize] = useState([1, 2, 3, 4])
  return (
    <Fragment>

      <div className='pl-lg-4 ml-lg-3'>
        <BreadCrumbs breadCrumbTitle='Bid Create' breadCrumbParent='Home' breadCrumbChild='Bid Create' breadCrumbActive='Bid Details' />
      </div>
      <Row>
        
        <Col className='pl-lg-4 ml-lg-4' lg='11'>
          <Row>
            
                  <Col lg="12" >
                    <Card>
                      <CardBody>
                        <ProductDetails />
                      </CardBody>
                      
                    </Card>
                  </Col>
                        
          </Row>
        </Col>
        
      </Row>
    </Fragment>
  )
}

export default Details
