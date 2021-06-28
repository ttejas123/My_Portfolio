// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import CollapsData from './collapData.js'
import DashboardMenuItem from './DashboardMenuItem.js'

import { useRTL } from '@hooks/useRTL'

import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket, User } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  Card,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ListGroup, ListGroupItem,
  Badge
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

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
      <h4><b>Links</b></h4>
      <div>
          <ListGroup flush>
            <ListGroupItem tag={Link} to='/home' className='cursor-pointer'>
              <span className="mr-1">Home</span>
              <Badge color='primary' pill>
                New
              </Badge>
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/search/searchPage' className='cursor-pointer'>
              <span className="mr-1">Search Page</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/Rfq7/rfqN' className='cursor-pointer'>
              <span className="mr-1">RFQ</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/product/productDetails' className='cursor-pointer'>
              <span className="mr-1">Product Details</span>
              
            </ListGroupItem>
            
          </ListGroup>
         
      </div>
      {/* <DashboardMenuItem /> */}
    </>
  )
}

export default Product
