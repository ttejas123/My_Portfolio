// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import InfoCard from './staticCard'
import { data } from './data'
import StatsVertical from './inVactiV'
import { useRTL } from '@hooks/useRTL'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket, Bookmark } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  Card,
  Media,
  CardTitle,
  CardHeader,
  ListGroupItem,
  CardBody,
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

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
      <Card>
        <CardBody >
          <CardTitle>Recent Activities</CardTitle><hr />
          {data.map(item => {
                    return (
                      <><StatsVertical icon={item.icon} color={item.color} stats={item.name} statTitle='Job Bookmarked' /><hr /></>
                    )
                  })}
        </CardBody>
      </Card>
    </>
  )
}

export default Product
