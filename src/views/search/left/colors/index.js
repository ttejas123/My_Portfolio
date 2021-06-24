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
          className={ color === selectedColor ? (`d-inline-block rounded-circle border-${color}`) : ('d-inline-block')}
          onClick={() => setSelectedColor(color)}
        >
          <div style={{ borderRadius: "50%", position: "relative", cursor: "pointer", padding: "3px"}} className={`b-${color}`}>
            <div style={{ height: "18px", width: "18px", borderRadius: "50%"}} className={`bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }

  return (

    <>
            <h4 className="mt-2 mb-2"><b>Color</b></h4>
            <div id='ratings' className='ml-2'>
                <div className="p-0 m-0 pb-1 ">
                    
                    <div className="d-flex">
                      {renderColorOptions()}
                    </div>
                </div>    
            </div>
    </>
  )
}

export default Product
