// ** React Imports
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Nouislider from 'nouislider-react'
import { useRTL } from '@hooks/useRTL'
import '@styles/react/libs/noui-slider/noui-slider.scss'
// ** Third Party Components
import SubBar from './subBar'
import AutoG from './autoG'
import classnames from 'classnames'
import { X, Heart, Star, Trash, ShoppingCart, ThumbsUp, ThumbsDown, Zap, ChevronDown, Box, DollarSign, MapPin, Calendar, FileText } from 'react-feather'
import { Card, CardBody, CardText, CardHeader, Button, Badge, CustomInput, InputGroupAddon, Input, InputGroupText, Row, Col } from 'reactstrap'
import img11 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
import img22 from '@src/assets/images/logo/sh3.jpg'
// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
// ** Custom Components
import NumberInput from '@components/number-input'
import Topbar from './topbar'
import '@styles/react/libs/swiper/swiper.scss'
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

import { useState } from 'react'
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
const Cart = props => {
  // ** Props
  const [render, setRender] = useState([1, 2, 3, 4, 5])
  SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
  const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props
  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Funciton Function to OpenStyle wishlist item
  const handleWishlistClick = (id, val) => {
    // if (val) {
    //   dispatch(deleteWishlistItem(id))
    // } else {
    //   dispatch(addToWishlist(id))
    // }
    // dispatch(getCartItems())
  }


  const handleSampleClick = () => {

  }

  const handleBidClick = () => {
    
  }

    const item = {
      
        title : "Nike Unisex Black LEBRON XVIII Basketball Shoes",
        img1 : img11,
        img2 : img22,
        mrp : "2000",
        offer : "1000",
        moq : "100",
        delivery : "30",
        inventory : "50"
    
  }

  const item1 = {
    image: img11,
    name:"Tejas Thakare",
   brand:"Pravin",
   price:2000,
    slug:"Plese don't false rate",
    rating:2,
    Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
    qty:16521,
    offers:"This is msg from offers box",
    shippingDate : "04 / 10 /2021",
   
    id: 1
  }
  
const direction = 'ltr'
  const colorOptions = {
    start: [40, 60],
    connect: true,
    behaviour: 'drag-tap',
    step: 10,
    tooltips: true,
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'steps',
      stepped: true,
      density: 5
    },
    direction
  }

  // ** Render cart items
  const renderCart = () => {
    const MySwal = withReactContent(Swal)
    const [isRtls, setIsRtl] = useRTL()
    const [OpenStyle, setOpenStyle] = useState(false)
    const [Reject, SetReject] = useState(true)
    const handleTitleAlert = () => {
      SetReject(!Reject)
      return MySwal.fire({
        title: '<strong>Rejecting Bid</strong>',
        html:
          'Are Your Sure?, ' +
          'If Not Click Undo!',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: (
          <span onClick={() => SetReject(true)} className='align-middle'>
            <span onClick={() => SetReject(true)} className='align-middle'>Done!</span>
          </span>
        ),
        cancelButtonText: (
          <span onClick={() => SetReject(true)} className='align-middle'>
            <span className='align-middle'>Undo!</span>
          </span>
        ),
        customClass: {
          confirmButton: 'btn btn-outline-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false
      })
    }
          return (
            <>
        <Card className={Reject === true ? ('shadow') : ('shadow bg-transparent')} style={OpenStyle ? ({marginBottom:"10px" }) : ({marginBottom:"10px" })}>
          <div>
             <Row >
                <Col lg='3' sm='3' xs='6' className="m-0 pl-3 mt-1 mb-1">
                  <h5 className='Col-lg-8 text-truncate'><b>Air Jordan 3 Blue Cap Dark Purple Dust Atomic Pink</b></h5>
                </Col>
                <Col lg='3' sm='3' xs='6' className="m-0 mt-1 mb-1">
                    mr.pankaj khurana 
                </Col>
                <Col lg='4' sm='3' xs='6' className="m-0 pl-3 mt-1 mb-1">
                    <b> RFQ: </b> S1236223AD    <b> Closing </b> 15-11-2017
                </Col>
                <Col lg='2' sm='3' xs='6' className="m-0 mt-1 mb-1">
                  <Trash size={14} /> <span>Delete</span>
                  <span className='d-inline-block ml-1' style={{marginRight : 5}}>All</span>
                  <CustomInput className='d-inline'  type='checkbox' id='user-4' label='' />
                </Col>
             </Row>   
          </div>
            <Col lg='12' sm='12'>
              <Card  key={item1.name} className='mb-0 bg-transparent'>
                <Row>
                  <Col md='3' sm='12' className=' text-center mb-0  '>
                    <div className='  '>
                          <div >
                          
                              <AutoG isRtl={isRtls} />
                          </div>
                    </div>
                  </Col>

                  <Col md='5' sm='12' className='ml-0 pl-0'>
                    <Card className='m-0 p-0 bg-transparent'>
                      <CardBody className='mb-0 pb-0' style={{borderRight : '2px solid #ebe9f1'}}>
                        <Row >
                          <Col md='5' sm='12' xs='12'>
                            <div className='m-0'>
                                <CardBody className='px-0 pt-0 m-0 ml-1'>
                                  <div>
                                  <span className='h5 dblock' ><Box size={17} style={{marginRight:"3px"}} /> Quantity: </span>
                                  </div>
                                  <Link to={`/apps/ecommerce/product/${item1.slug}`} className='h6 pt-1'>300-400 unites</Link>
                                </CardBody>
                                <CardBody className='px-0 ml-1'>
                                  <div>
                                  <span className='h5 dblock'><DollarSign size={17} style={{marginRight:"3px"}} />Budget: </span>
                                  </div>
                                  <Link  className='h6 pt-1 ' to={`/apps/ecommerce/product/${item1.slug}`}>$ 3000-4000</Link>
                                </CardBody>
                            </div>
                          </Col>

                          <Col md='7' sm='12' xs='12'>  
                            <div className='item-name'>
                            <CardBody className=' pt-0 pl-0'>
                                <div>
                                <span className='h5 dblock' > <MapPin size={17} style={{marginRight:"3px"}} />Delivery Location: </span>
                                </div>
                                <Link to={`/apps/ecommerce/product/${item1.slug}`} className='h6 pt-1'> Multiple </Link>
                                </CardBody>
                                <CardBody className=' pl-0'>
                                <div>
                                <span className='h5 dblock'> <Calendar size={17} style={{marginRight:"3px"}} />Delivery Time: </span>
                                </div>
                                <Link  className='h6 pt-1' to={`/apps/ecommerce/product/${item1.slug}`}>10-30 Days</Link>
                                </CardBody>
                                  </div>
                          </Col>
                        </Row>  
                      </CardBody>
                    </Card>
                  </Col>
            
                  <Col md='3' sm='4'>
                    <div className='item-options mb-0'>
                      <Row>
                        <Col md='9' sm='7' >
                          <div className='item-name '>
                          <CardBody className='px-0'>
                              <div>
                              <span className='h5 dblock' ><FileText size={17} className='mr-1' />____________: </span>
                              </div>
                              <Link to={`/apps/ecommerce/product/${item1.slug}`} className='h6 pt-1'>$ ______________</Link>
                              </CardBody>
                              <CardBody className='px-0 '>
                              <div>
                              <span className='h5 dblock'><FileText size={17} className='mr-1' />______________: </span>
                              </div>
                              <Link  className='h6 pt-1' to={`/apps/ecommerce/product/${item1.slug}`}>_____________</Link>
                              </CardBody>
                                </div>
                        </Col>

                        <Col md='3' sm='5' className='my-auto'>
                          
                                
                          <div className='my-auto ml-1'>
                                
                                <Button style={{width:"100px"}} className='mb-1 remove-wishlist' color='light' onClick={() => handleSampleClick()}>
                                  
                                  <span>Accept</span>
                                </Button>
                                <Button color='danger' style={{width:"100px"}} className='mb-1 remove-wishlist' onClick={() => handleTitleAlert()}>
                                  
                                  <span>Reject</span>
                                </Button>
                          </div>
                          
                        </Col>

                      </Row>
                    </div>
                  </Col>
                </Row>
              </Card>
          </Col>
          <Button.Ripple tag={Link} to='/Homes/response' className='d-none d-lg-block pt-0 m-0 p-0 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <ChevronDown  size={40} className='d-block mx-auto' style={{marginTop:-10, zIndex:1000}}/>
          </Button.Ripple>
        
    </Card>

        </>
        
      )
  }
  return (
  <>
    <div className=''>
      <div className="mb-1">
              <SubBar className='' rfq="true" createBtn='true' />
      </div>
      <div className='checkout-items list-view' >
          { 
            render.map((val) => {
              return (<div key={val}>{renderCart()}</div>)
            })
          }
          
      </div>
      
    </div>
  </>
  )
}

export default Cart
