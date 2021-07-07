// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import InfoC from './infoC'
import { useRTL } from '@hooks/useRTL'
import AddCard from './addC'
import Prodectmodel from './prodmodel'
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

import image from './assets/b.jpg'

const Product = props => {
  const [modal, setModal] = useState(false)
      const view = () => {
            //here we passing id to delete this specific record
           setModal(true)
        }

    const handleModal = () => {
        setModal(!modal)
    }

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
    <Row className="border m-0 p-0">
      <Col className='d-flex align-items-center justify-content-center' md='3' xs='12'>
        <Col sm='12' >
          <div className=" imageSection">
            <div className="searchCon" onClick={() => view()}>
              <li className="d-inline-block rounded-circle border"><img style={{borderRadius: "50%", position: "relative", cursor: "pointer", padding: "3px"}} src="https://img.icons8.com/fluent-systems-filled/18/000000/search.png"/></li >
            </div>

            <img className="img-fluid" style={{width:"130%", height:"35vh"}} src={props.image} alt="Product Page" />
            
          </div>
        </Col>
      </Col>
      <Col md='5' xs='12'>
        <InfoC name={props.name} brandName={props.brandName} price={props.price} />
      </Col>
      <Col md='4' xs='12'>
        <AddCard price={props.price}  />
      </Col>
      <Prodectmodel open={modal} handleModal={handleModal} className="d-none" />
    </Row>
    </>
  )
}

export default Product
