// ** React Imports
import { Link } from 'react-router-dom'
import Nouislider from 'nouislider-react'
import useC from '../../assets/images/logo/useC.jpg'
import { useRTL } from '@hooks/useRTL'
import '@styles/react/libs/noui-slider/noui-slider.scss'
// ** Third Party Components
import classnames from 'classnames'
import { X, Heart, Star, Trash, ShoppingCart, Zap } from 'react-feather'
import { Card, CardBody, CardText, CardHeader, Button, Badge, CustomInput, InputGroupAddon, Input, InputGroupText, Row, Col } from 'reactstrap'
import img1 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
// ** Custom Components
import NumberInput from '@components/number-input'
import Topbar from './topbar'

const Cart = props => {
  // ** Props
  const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Funciton Function to toggle wishlist item
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
        img : img1,
        mrp : "2000",
        offer : "1000",
        moq : "100",
        delivery : "30",
        inventory : "50"
    
  }

  const item1 = {
    image: img1,
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
  const [isRtl, setIsRtl] = useRTL()
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
          return (
            <>
        <Card>
          <div>
             <Row >
                <Col lg='3' sm='3' xs='6' className="m-0 pl-3 mt-1 mb-1">
                  <b>Shoe</b>
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
          <Card  key={item1.name} className='mb-0'>
            <Row>
              <Col md='3' sm='12' xs='12' className='d-block'>
            <div className='px-2 py-1'>
                  <div className='item-img '>
              <Link to={`/apps/ecommerce/product/${item1.slug}`}>
                <img className='img-fluid' height='200' width='130' src={item1.image} alt={item1.name} />
              </Link>
            </div>
            </div>
            </Col>
            <Col>
            <Card>
            <CardBody style={{borderRight : '2px solid #ebe9f1'}}>
              <Row >
                <Col md='5' sm='12' xs='12'>
                  <div className='item-name m-0'>
                    <CardBody className='px-0 pt-0'>
                      <div>
                      <span className='h6 dblock' >Quantity: </span>
                      </div>
                      <Link to={`/apps/ecommerce/product/${item1.slug}`} className='pt-1'>300-400 unites</Link>
                      </CardBody>
                      <CardBody className='px-0 '>
                        <div>
                        <span className='h6 dblock'>Budget: </span>
                        </div>
                      <Link  className='pt-1' to={`/apps/ecommerce/product/${item1.slug}`}>$ 3000-4000</Link>
                      </CardBody>
                  </div>
                </Col>
                <Col md='6' sm='12' xs='12'>  
                  <div className='item-name'>
                  <CardBody className=' pt-0 pl-0'>
                      <div>
                      <span className='h6 dblock' >Delivery Location: </span>
                      </div>
                      <Link to={`/apps/ecommerce/product/${item1.slug}`} className='pt-1'> Multiple </Link>
                      </CardBody>
                      <CardBody className=' pl-0'>
                      <div>
                      <span className='h6 dblock'>Delivery Time: </span>
                      </div>
                      <Link  className='pt-1' to={`/apps/ecommerce/product/${item1.slug}`}>10-30 Days</Link>
                      </CardBody>
                        </div>
                </Col>
            </Row>  
            </CardBody>
            </Card>
            </Col>
            <Col md='4' sm='4'>
            <div className='item-options'>
              <Row>
                <Col md='7' sm='7' >
                  <div className='item-name '>
                  <CardBody className='px-0'>
                      <div>
                      <span >Seller Quote: </span>
                      </div>
                      <Link to={`/apps/ecommerce/product/${item1.slug}`} className='pt-1'>$ 8000.00 - 8500.00</Link>
                      </CardBody>
                      <CardBody className='px-0 '>
                      <div>
                      <span>No of Quote: </span>
                      </div>
                      <Link  className='pt-1' to={`/apps/ecommerce/product/${item1.slug}`}>3 of 5 Nos.</Link>
                      </CardBody>
                        </div>
                </Col>
                <Col md='5' sm='5'>
                  <Card className='ecommerce-card mb-0 '>

                  <div className='item-options '>
                    <a><span className='font-weight-bold h5 d-block mx-auto mb-1' style={{color:'#2876c6'}}>Compare</span></a>
                        <Button className='mb-1 remove-wishlist' color='light' onClick={() => handleSampleClick()}>
                          
                          <span>Sample</span>
                        </Button>
                        <Button className='mb-1 remove-wishlist' color='light' onClick={() => handleBidClick()}>
                          
                          <span>Bid</span>
                        </Button>
                        <Button
                          className='mb-1'
                          color='primary'
                          onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
                        >
                          
                          <span className='text-truncate'>Revise</span>
                        </Button>
                  </div>
                  </Card>
                </Col>

              </Row>
              </div>
              </Col>
              </Row>
          </Card>
          </Col>
        </Card>
        <Col>
        <Row>
        <Col lg='12'>
        <Card >
            <Row>
              <Col md='4' sm='4'>
                  <CardBody>
                  <span>
                Buyer (Base Rate + GST = Budget)
                </span>
                  </CardBody>
              </Col>
              <Col md='4' sm='4'>
              <CardBody>
              <span>
              Seller (Base Rate + GST = Quote)
                  </span>
                  </CardBody>
              </Col>
              <Col md='4' sm='4'>
                <CardBody>
                <span className='mr-1'>
              Close Negotiation BID CWT652942
                  </span>
                  <CustomInput className='d-inline'  type='checkbox' id='user-3' label='' />
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col md='8' sm='4'>
                <CardText>
                <Row>
                  <Col md='6' sm='6'>
                    <CardBody className='pt-0'>
                    <span className='font-weight-bold h5'>
                  5357.14 + 12% = 6000.00
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className='pt-0'>
                    <span className='font-weight-bold h5 d-block mx-auto text-right'>
                  5357.14 + 12% = 6000.00
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='12' sm='12'>
                    <CardBody className='pt-0'>
                    <Nouislider className='slider-success mt-md-1 mt-3 mb-4' {...colorOptions} />
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className='pt-0'>
                    <span className='font-weight-bold h5'>
                    Quantity : 500pcs
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className='pt-0'>
                    <span className='font-weight-bold h5 d-block mx-auto text-right'>
                    Quantity : 500pcs
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className=''>
                    <span className='font-weight-bold h5'>
                    Delivery : 20 days
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className=''>
                    <span className='font-weight-bold h5 d-block mx-auto text-right'>
                    Delivery : 20 days
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className=''>
                    <span className='font-weight-bold h5'>
                    Customization : View
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className=''>
                    <span className='font-weight-bold h5 d-block mx-auto text-right'>
                    Customization : View
                  </span>
                    </CardBody>
                  </Col>
                  <Col md='6' sm='6'>
                    <CardBody className='pt-0'>
                    <span className='font-weight-bold h6' style={{color:'rgb(237 146 32)'}}>
                    Pending Bidoya Approval
                  </span>
                    </CardBody>
                  </Col>
                </Row>
                </CardText>
              </Col>
              <Col md='4' sm='4'>
              <CardHeader className='pb-0 pl-0'> 
        <span className='text-truncate font-weight-bold'>{item.title}</span>
      </CardHeader>
      <Row>
      <Col lg='6' md='6' className='py-1'>
    
      <div className='d-block my-auto'>
      <img className='img-fluid d-block mx-auto mt-2' src={item.img} alt={item.title} height='200' width='120'/>
      </div>
    
        </Col>
        <Col lg='6' md='6' className=''>
      <div className="d-flex justify-content-between mt-3 d-block mx-auto">
              <div className='font-small-2 font-weight-bold'>
                  <span className='text-truncate font-weight-bold h6'>MRP : </span>
                  </div>
              <h6 className='mb-1 d-block mx-auto'>{`Rs ${item.mrp} /-`}</h6>
            </div>
            <div className="d-flex justify-content-between d-block mx-auto">
              <div className='font-small-2 font-weight-bold'>
                  <span className='text-truncate font-weight-bold h6'>Offer : </span>
                  </div>
              <h6 className='mb-1 d-block mx-auto'>{`Rs ${item.offer} /-`}</h6>
            </div>
            <div className="d-flex justify-content-between d-block mx-auto">
              <div className='font-small-2 font-weight-bold'>
                  <span className='text-truncate font-weight-bold h6'>MOQ : </span>
                  </div>
              <h6 className='mb-1 d-block mx-auto'>{`${item.moq} pcs`}</h6>
            </div>
            <div className="d-flex justify-content-between  d-block mx-auto">
              <div className='font-small-2 font-weight-bold'>
                  <span className='text-truncate font-weight-bold h6'>Delivery : </span>
                  </div>
              <h6 className='mb-1 d-block mx-auto'>{`${item.delivery} days`}</h6>
            </div>
            <div className="d-flex justify-content-between  d-block mx-auto">
              <div className='font-small-2 font-weight-bold'>
                  <span className='text-truncate font-weight-bold h6'>Inventory : </span>
                  </div>
              <h6 className='mb-1 d-block mx-auto'>{`${item.inventory} pcs`}</h6>
            </div>
            
        </Col>
        </Row>
        <Row>
        <Col md='12' sm='12'>
        <a><span className='font-weight-bold h6 d-block mx-auto mb-1' style={{color:'#2876c6'}}>Close Negotiation BID History</span></a>
      </Col>
        </Row>
        <Row>
        <Col className='d-flex flex-sm-row flex-column mt-2 mb-2' sm='12'>
        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
          Submit
        </Button.Ripple>
        <Button.Ripple color='primary'>
          Order
        </Button.Ripple>
      </Col>
        </Row>
              </Col>
            </Row>
          </Card>
          </Col>
        </Row>
      </Col>
  
        </>
        
      )
  }

  return (
    <div className='ecommerce-application'>
      <Topbar/>
      <div className='checkout-items list-view' >{products.length ? renderCart() : <h4>Your cart is empty</h4>}</div>
      
    </div>
  )
}

export default Cart
