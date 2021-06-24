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

  const ratings = [
    {
      ratings: 4,
      total: 160
    },
    {
      ratings: 3,
      total: 176
    },
    {
      ratings: 2,
      total: 291
    },
    {
      ratings: 1,
      total: 190
    }
  ]

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

  // ** Condition btn tag
  const CartBtnTag = 'button'
  const [isRtl, setIsRtl] = useRTL()
  return (

    <>
            <h4 className="mt-2 mb-2"><b>Ratings</b></h4>
             <div id='ratings' className='ml-2'>
                
                {ratings.map(item => {
                  return (
                    <div key={item.total} className='ratings-list'>
                      <a href='/' onClick={e => e.preventDefault()}>
                        <ul className='unstyled-list list-inline'>
                          
                            <li className='ratings-list-item pr-1'>
                               <Rating
                                  emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                                  fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                                  initialRating={item.ratings}
                                />
                            </li>
                          
                          <li>{`(${item.total})`}</li>
                        </ul>
                      </a>
                      
                    </div>
                  )
                })}
              </div>
    </>
  )
}

export default Product
