// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import AutoG from './autoG' 
import { useRTL } from '@hooks/useRTL'
import AddCard from './addCard'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
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
  // ** Props
  //const { data, deleteWishlistItem, dispatch, addToWishlist, getProduct, productId, addToCart } = props

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
 const colorsData = ["primary", "success", "warning", "danger", "info"]
  // ** Renders color options
  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')

  // ** Renders color options
  const renderColorOptions = () => {
   
    return colorsData.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }

  // ** Handle Wishlist item toggle
  // const handleWishlist = val => {
  //   if (val) {
  //     dispatch(deleteWishlistItem(productId))
  //   } else {
  //     dispatch(addToWishlist(productId))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // ** Handle Move/Add to cart
  // const handleCartBtn = (id, val) => {
  //   if (val === false) {
  //     dispatch(addToCart(id))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
    <Row>
      <Col className='d-flex align-items-center justify-content-center m-0 p-0  mb-md-0 w-100' md='6' xs='12'>
        <Col sm='9' className='m-0 p-0'>
          <AutoG isRtl={isRtls} />
        </Col>
      </Col>
      <Col md='3' xs='12'>
        <h4>Digital Thermometer X30-Pro</h4>
        <CardText tag='span' className='item-company'>
          By
          <a className='pl-1 company-name' href='/' onClick={e => e.preventDefault()}>
            Apple
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <ul className='unstyled-list list-inline '>
    
                <li className='ratings-list-item pr-1'>
                   <Rating
                      emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                      fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                      initialRating={2}
                    />
                </li>
              (21 Reviews)
          </ul>
        </div>
        <hr />
        <CardText>
          Available -<span className='text-success ml-25'>In stock</span>
        </CardText>
        <div style={{paddingTop: '5px'}}>
          <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Study history up to 30 days</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Up to 5 users simultaneously</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Has HEALTH certificate</span>
        </div>

        <hr />
        
        <div style={{paddingTop: '5px'}}>
          <DollarSign size={18} /> <span style={{paddingLeft:"5px"}}>100% Money back</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <Pocket size={18} /> <span style={{paddingLeft:"5px"}}>Non-contact shipping</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <Truck size={18} /> <span style={{paddingLeft:"5px"}}>Free delivery for order over $200</span>
        </div>

         <hr />
        
        <div style={{paddingTop: '5px'}}>
          <b>Tag:</b> <span style={{paddingLeft:"5px"}}>Health, Thermometer</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <b>SKU:</b> <span style={{paddingLeft:"5px"}}>8DJ21A</span>
        </div>

        <div className='auth-footer-btn d-flex justify-content-left mt-1 mb-1'>
              <Button.Ripple className='mr-1' style={{padding:"10px"}} color='facebook'>
                <Facebook size={15} />
              </Button.Ripple>
              <Button.Ripple className='mr-1 ' style={{padding:"10px"}} color='twitter'>
                <Twitter size={15} />
              </Button.Ripple>
              <Button.Ripple className='mr-1 ' style={{padding:"10px"}} color='google'>
                <Mail size={15} />
              </Button.Ripple>
              <Button.Ripple className='mr-1 ' style={{padding:"10px"}} color='github'>
                <GitHub size={15} />
              </Button.Ripple>
        </div>
        
      </Col>
      <Col md='3' xs='12'>
        <AddCard />
      </Col>
    </Row>
    </>
  )
}

export default Product
