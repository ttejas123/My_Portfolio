// ** React Imports
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import OverViewCard from './Component/OverViewCard'
import Revenue from './Component/Revenue'
import TopCategory from './Component/TopCategory'
import TopProduct from './Component/TopProducts'

import { ThemeColors } from '@src/utility/context/ThemeColors'

import { kFormatter } from '@utils'

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
    DropdownMenu,
    CardHeader,
    CardTitle
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

const MainSubMenu = props => {
  const context = useContext(ThemeColors)
 
 const suggestions = [
    {
      avatar: require('@src/views/search/right/card/assets/b1.jpg').default,
      name: 'Airmax Tshirts',
      brand : 'Nike',
      unitsold : '231',
      revenue :'1200'
    },
    {
        avatar: require('@src/views/search/right/card/assets/b3.jpg').default,
        name: 'Airmax Bike',
        brand : 'Yamaha',
        unitsold : '100',
        revenue :'100'
      }
  ]
    return (
        <Row>
            <Col md='12' xs='12' lg = '12'>
                <Row className='match-height'>
                    <Col md='8' xs='12'>
                        <Row>
                            <OverViewCard kFormatter={kFormatter} />
                        </Row>
                    </Col>
                    <Col md='4' xs='12'>
                        {/* <Revenue /> */}
                        <TopProduct data={suggestions} />

                    </Col>
                </Row>
            </Col>
           
            <Col md='6' xs='12'>
            <TopCategory
                    primary={context.colors.primary.main}
                    warning={context.colors.warning.main}
                    danger={context.colors.danger.main} />
            </Col>
            <Col md='6' xs='12'>
               
                                    <Revenue/>

            </Col>
        </Row>
    )
}

export default MainSubMenu
