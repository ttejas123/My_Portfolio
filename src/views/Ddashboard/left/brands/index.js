// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import { useRTL } from '@hooks/useRTL'
import Nouislider from 'nouislider-react'
// ** Third Party Components
import wNumb from 'wnumb'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
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
  CustomInput
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
import '@styles/react/libs/noui-slider/noui-slider.scss'
import image from '@src/assets/images/avatars/1-small.png'

const Product = props => {

    // ** Array of brands
  const brands = [
    {
      title: 'Insignia™',
      total: 746
    },
    {
      title: 'Samsung',
      total: 633,
      checked: true
    },
    {
      title: 'Metra',
      total: 591
    },
    {
      title: 'HP',
      total: 530
    },
    {
      title: 'Apple',
      total: 422,
      checked: true
    },
    {
      title: 'GE',
      total: 394
    },
    {
      title: 'Sony',
      total: 350
    },
    {
      title: 'Incipio',
      total: 320
    },
    {
      title: 'KitchenAid',
      total: 318
    },
    {
      title: 'Whirlpool',
      total: 298
    }
  ]

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

  // ** Condition btn tag
  const CartBtnTag = 'button'
  const [isRtl, setIsRtl] = useRTL()
  return (

    <>
            <h4 className="mt-2 mb-2"><b>Brands</b></h4>
            <div className='brands ml-2' >
                
                <ul className='list-unstyled brand-list' style={{height: "250px", overflowY : "auto"}}>
                  {brands.map(brand => {
                    return (
                      <li key={brand.title} className='mb-1'>
                        <CustomInput
                          type='checkbox'
                          id={brand.title}
                          label={brand.title}
                          defaultChecked={brand.checked}
                        />
                        
                      </li>
                    )
                  })}
                </ul>
              </div>
    </>
  )
}

export default Product
