// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import classnames from 'classnames'
import { X, Heart, Star, Trash, Edit, ShoppingCart, Zap, Search, Plus, Filter, Bell, AlignJustify } from 'react-feather'
import { Card, CardBody, CardText, CardHeader, Button, Label, InputGroup, FormGroup, Input, InputGroupText, Row, Col, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import Avatar from '@components/avatar'
import { useSelector, useDispatch } from 'react-redux'
import { SearhPrp } from '@src/redux/actions/loginOut/index.js'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
// ** Custom Components
import NumberInput from '@components/number-input'

const Topbar = props => {
   const item = {
        image: logo,
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
  const userAvatar = defaultAvatar

  const initialvalues = {
    id:1,
    name: "",
    email: "",
    isOnGround: "",
    isActive: "",
    logo : "",
    phone : "",
    panNumber: "",
    Currency:  [{value: "currency", label: "Indian Rupee"}],
    City:  [{value: "city", label: "Mumbai"}], 
    Category:  [{value: "Mobile", label: "Mobile"}],
    SubCategory: [{value: "iphone", label: "iphone"}],
    Product: [{value: "iphone 12 pro max", label: "iphone 12 pro max"}]
  }

  const optionsCategory = [
    {value: "Mobile", label: "Mobile"},
    {value: "Television", label: "Telivision"},
    {value: "T-Shirt", label: "T-Shirt"}
  ]

  const optionsSubCategory = [
    {value: "iphone", label: "iphone"},
    {value: "Oneplus", label: "OnePlus"},
    {value: "Polo", label: "Polo"}
  ]

  const optionsProduct = [
    {value: "iphone 12 pro max", label: "iphone 12 pro max"},
    {value: "Oneplus 108cm", label: "Telivision"},
    {value: "US polo", label: "US polo"}
  ]

  const [values, setValues] = useState(initialvalues)
  // ** Props
  const usDispatch = useDispatch()
 // const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

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

  // ** Render cart items
  const renderCart = () => {
      return (

        <Card className='mb-0 shadow-none w-100 ' style={{zIndex:'-1', position:'absolute', marginTop: '1.2rem'}} >
        <CardBody className='pb-0'>
        <Row> 
          <Col lg='9' sm='12' className='pl-lg-2'>

              <Row className=''>
                  <Col md='4' sm='6'>
                    <FormGroup>
                      <Input type='text' id='category' placeholder='What are you looking for ?'  />
                    </FormGroup>
                  </Col>
                  <Col md='2' sm='6'>
                    <FormGroup>
                      <Input type='text' id='category' placeholder='Qty?'/>
                    </FormGroup>
                  </Col>
                  <Col md='3' sm='6'>
                    <FormGroup className='mt-1'>
                          <Input type='range' id='category' placeholder='Qty?'/>
                          <Label for='default-range' className='d-block'>
                          <span className='d-block mx-auto text-center font-weight-bold h6 font-italic'>
                            budget per Unit?
                          </span>
                          </Label>
                    </FormGroup>
                  </Col>

                  <Col md='3' sm='6'>
                  <Button.Ripple className='p-0 bg-white' color='white' tag={Link} to='/homes/searchpage'>
                    <Search  size={30} className='mr-1' onClick={() => usDispatch(SearhPrp())} />
                  </Button.Ripple> 
                      {/* <Button.Ripple className='px-1' style={{backgroundColor : '#000000'}} type='submit' color='primary'>
=======
                  <Col md='3' sm='6' >
                      <Button.Ripple className='px-1' style={{backgroundColor : '#000000'}} type='submit' color='primary'>
>>>>>>> Tejas
                        <Search size={13} className='mr-1' />
                        <span>Search</span>
                      </Button.Ripple> */}
                  </Col>
                  
              </Row>
          </Col>

          <Col lg='1' sm='12' className='ml-lg-5 mt-1 mt-lg-0'>  
          
                <Button.Ripple className='d-flex' style={{backgroundColor : '#000000'}} type='submit' color='primary'>
                        <ShoppingCart size={13} className='mr-1' />
                        <span>Cart</span>
                </Button.Ripple>
          </Col>
          <Col lg='1' sm='12' className='ml-2'>  
              
                <Button.Ripple className='d-flex' type='submit' color='primary'>
                  <Zap size={13} className='mr-1' />
                  <span >RFQ</span>
                </Button.Ripple>
            
          </Col>
</Row>
      
      </CardBody>
        </Card>  
      )
  }

  return (
    <div style={{marginTop: '-2rem'}} >
      <div  >{renderCart()}</div>
    </div>
  )
}

export default Topbar
