// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import AutoG from './autoI' 
import { useRTL } from '@hooks/useRTL'

import { Star, ShoppingCart, Percent, ShoppingBag, Box, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
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


  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
     <h4 className='pl-1'>Digital Thermometer X30-Pro</h4>
    <Row>    
      <Col className='d-flex align-items-center m-0 p-0' md='7' xs='12'>
        
          <AutoG isRtl={isRtls} />

      </Col>
      <Col md='5' xs='12'>
        
        <div className='  mt-1'>
          <ul className='unstyled-list list-inline '>
    
                <li className='ratings-list-item pr-1'>
                   <Rating
                      emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                      fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                      initialRating={2}
                    />
                </li><br />
              (21 Reviews)
          </ul>
          <CardText>
            Available -<span className='text-success ml-25'>In stock</span>
          </CardText>
        </div>

        <hr />

        <div style={{paddingTop: '5px'}}>
          <Percent size={18} /> <span style={{paddingLeft:"5px"}}>Offer : 5%</span>
        </div>

        <div style={{paddingTop: '5px'}}>
          <Box size={18} /> <span style={{paddingLeft:"5px"}}>MOQ : 100 Pcs</span>
        </div>

        <div style={{paddingTop: '5px'}}>
          <ShoppingBag size={18} /> <span style={{paddingLeft:"5px"}}>Inventory : 200 Pcs</span>
        </div>

        <div style={{paddingTop: '5px'}}>
          <Truck size={18} /> <span style={{paddingLeft:"5px"}}>Delivery : 5 days</span>
        </div>

         <hr />
        
        <div style={{paddingTop: '5px'}}>
          <b>Tag:</b> <span style={{paddingLeft:"5px"}}>Health, Thermometer</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <b>SKU:</b> <span style={{paddingLeft:"5px"}}>8DJ21A</span>
        </div>
        
      </Col>
      
    </Row>
    </>
  )
}

export default Product
