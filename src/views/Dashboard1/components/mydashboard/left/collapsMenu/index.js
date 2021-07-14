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
      <h4><b>Dashboard</b></h4>
      <div>
          <ListGroup flush>
            <ListGroupItem tag={Link} to='/home' className='cursor-pointer'>
              <span className="mr-1">Home</span>
              <Badge color='primary' pill>
                New
              </Badge>
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/search/searchPage' className='cursor-pointer'>
              <span >Search Page</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/Rfq7/rfqN' className='cursor-pointer'>
              <span >RFQ</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/product/productDetails' className='cursor-pointer'>
              <span >Product Details</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/seller/productGrid' className='cursor-pointer'>
              <span >Seller Product Grid</span>
              
            </ListGroupItem>
            
            <ListGroupItem tag={Link} to='/search-grid' className='cursor-pointer'>
              <span >Search Grid</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/cart-search' className='cursor-pointer'>
              <span >Cart Search</span>
              
            </ListGroupItem>
            
            <ListGroupItem tag={Link} to='/invoice-to-select' className='cursor-pointer'>
              <span >Invoice Select</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/create-cart' className='cursor-pointer'>
              <span >Create Cart</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/cart-buyer' className='cursor-pointer'>
              <span >Cart Buyer</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/cart-page' className='cursor-pointer'>
              <span >Cart Page</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/buyer/buyer-edit' className='cursor-pointer'>
              <span >Buyer Profile Edit</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/seller/seller-edit' className='cursor-pointer'>
              <span >Seller Profile Edit</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/seller/create-product' className='cursor-pointer'>
              <span >Seller Create Product</span>
              
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/seller/my-products' className='cursor-pointer'>
              <span >My Products</span>
              
            </ListGroupItem>
          </ListGroup>
         
      </div>
      {/* <DashboardMenuItem /> */}
    </>
  )
}

export default Product
