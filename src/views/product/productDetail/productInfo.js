// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components

import { useRTL } from '@hooks/useRTL'
import virus from '@src/assets/images/logo/vi.svg'

import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  CardTitle,
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

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

  // ** Handle Wishlist item toggle

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
 
    <div>
        <CardTitle><h2><b>Digital Thermometer X30-Pro</b></h2></CardTitle>
        <CardText>
            Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.
        </CardText>
        <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </CardText>
    </div>
    <div>
        <Row>
          <Col md='3' xs='12'><div className="d-flex pt-2"><img className='mr-1' src="https://img.icons8.com/fluent-systems-regular/25/000000/bacteria.png"/><div><b>Study history up to 30 days</b></div></div></Col>
          <Col md='3' xs='12'><div className="d-flex pt-2"><img className='mr-1' src={virus} /><div><b>Up to 5 users simultaneously</b></div></div></Col>
          <Col md='3' xs='12'><div className="d-flex pt-2"><img className='mr-1' src="https://img.icons8.com/fluent-systems-regular/25/000000/certificate.png"/><div><b>Has HEALTH certificate</b></div></div></Col>
        </Row>
    </div>
    <div className="pt-2">
      <Col  md='10' xs='12'>
        <table class="table table-striped ps-table ps-table--oriented m-0 ">
          <tbody>
                                    <tr>
                                        <th class="ps-table__th">Power</th>
                                        <td>5,049</td>
                                    </tr>
                                    <tr>
                                        <th class="ps-table__th">Windows</th>
                                        <td>64bit Windows 7*, 8 or 10</td>
                                    </tr>
                                    <tr>
                                        <th class="ps-table__th">Graphic Card</th>
                                        <td>4Gb dedicated Graphics card (such as NVIDIA – Open GL 4.0 or later)</td>
                                    </tr>
                                    <tr>
                                        <th class="ps-table__th">HDD</th>
                                        <td>500Gb HDD (this is more driven by the amount of data you want to keep on your computer, rather than LSS itself)</td>
                                    </tr>
                                    <tr>
                                        <th class="ps-table__th">Screen</th>
                                        <td>Single HD Screen (1920×1080 with 100% desktop scaling) or 1366×768 with second monitor 1920×1080 or higher</td>
                                    </tr>
          </tbody>
        </table>
      </Col>
    </div>

    </>
  )
}

export default Product
