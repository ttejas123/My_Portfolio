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
import '@styles/react/libs/noui-slider/noui-slider.scss'
import image from '@src/assets/images/avatars/1-small.png'

const Product = props => {

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

  // ** Condition btn tag
  const CartBtnTag = 'button'
  const [isRtl, setIsRtl] = useRTL()
  return (

    <>
            <h4 className="mt-2 mb-3"><b>By Price</b></h4>
            <div className='price-slider ml-2'>
                
                <div className='price-slider'>
                  <Nouislider
                    className='range-slider mt-2'
                    direction={isRtl ? 'rtl' : 'ltr'}
                    start={[1500, 3500]}
                    connect={true}
                    tooltips={[true, true]}
                    format={wNumb({
                      decimals: 0
                    })}
                    range={{
                      min: 51,
                      max: 5000
                    }}
                  />
                </div>
              </div>
    </>
  )
}

export default Product
