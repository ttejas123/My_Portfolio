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
const [size, setSize] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  return (
    <Fragment>
      <Row>
       
        <Col lg='12'>
          <Row>
            {size.map((val) => {
                return (
                  <Col lg="6" >
                    <Card>
                      <CardBody>
                        <ProductDetails />
                      </CardBody>
                      
                    </Card>
                  </Col>
                  )
            })}          
          </Row>
        </Col>
        
      </Row>
    </Fragment>
  )
}

export default Details
