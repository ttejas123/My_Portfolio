// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import InfoCard from './component/roleRightsD'

import { useRTL } from '@hooks/useRTL'

import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  Card,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  CardTitle,
  CardHeader,
  DropdownMenu
} from 'reactstrap'

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'

import image from '@src/assets/images/avatars/1-small.png'

const Product = props => {

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const Columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: 'Rights',
    selector: 'right',
    sortable: true
  }
]

const data = [
  {
    id: 1,
    rights:[ 
                {link:"MasterLink1", c: true, d: true, u: true, v: false}, 
                {link:"MasterLink1", c: true, d: false, u: true, v: true}, 
                {link:"MasterLink1", c: false, d: true, u: false, v: true}, 
                {link:"MasterLink1", c: true, d: true, u: true, v: true}
    ],
    name: "Master"
  },
  {
    id: 2,
    rights:[ 
                {link:"MasterLink1", c: false, d: true, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: false, u: true, v: false}, 
                {link:"MasterLink1", c: true, d: true, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: true, u: false, v: true}
    ],
    name: 'Report'
  },
  {
    id: 3,
    rights:[ 
                {link:"MasterLink1", c: false, d: false, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: false, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: false, u: false, v: false}, 
                {link:"MasterLink1", c: true, d: false, u: true, v: false}
    ],
    name: 'Bid'
  },
  {
    id: 4,
    rights:[
                {link:"MasterLink1", c: true, d: true, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: true, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: true, u: true, v: true}, 
                {link:"MasterLink1", c: true, d: true, u: true, v: true}
    ],
    name: 'Transactions'
  }
]

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>    
                    <Row>
                      <Col md='12' xs='12'>    
                              <InfoCard columns={Columns} data={data} Role={"Admin Rights"} />
                              <InfoCard columns={Columns} data={data} Role={"Project Lead Rights"} />
                              <InfoCard columns={Columns} data={data} Role={"Employee Rights"} />
                      </Col>
                      
                    </Row>
    </>
  )
}

export default Product