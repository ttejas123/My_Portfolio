// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import CardAction from '@components/card-actions'

// ** Third Party Components
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { X, Heart, Star, Trash, Edit, ShoppingCart, Zap, Search, Plus, Filter, Bell, AlignJustify } from 'react-feather'
import { Card, CardBody, CardText, CardHeader, Button, Label, CardTitle, FormGroup, Input, Media, Row, Col, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import Avatar from '@components/avatar'
import img1 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
import img2 from '@src/assets/images/elements/nike-air-zoom.jpg'
import img3 from '@src/assets/images/elements/nike-unisex-shoes.jpg'
import img4 from '@src/assets/images/elements/puma-unisex-basketball.jpg'
import img5 from '@src/assets/images/elements/puma-super-mario.jpg'
// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Custom Components
import NumberInput from '@components/number-input'
import CardFooter from 'reactstrap/lib/CardFooter'
import Topbar from './topbar'

const CreateCart = props => {
  
 // const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props
 const [picker, setPicker] = useState(new Date())
 const [basic, setBasic] = useState(new Date())
 const data = [
     {
         title : "Nike Unisex Black LEBRON XVIII Basketball Shoes",
         img : img1,
         mrp : "2000",
         offer : "1000",
         moq : "100",
         delivery : "30",
         inventory : "50"
     },
     {
        title : "Nike Unisex White AIR ZOOM BB NXT Basketball Shoes",
        img : img2,
        mrp : "3000",
        offer : "2000",
        moq : "1000",
        delivery : "30",
        inventory : "500"
    },
    {
        title : "Nike Unisex White & Black Colourblocked LEBRON XVIII LOW Basketball Shoes",
        img : img3,
        mrp : "4000",
        offer : "4000",
        moq : "200",
        delivery : "30",
        inventory : "100"
    },
    {
        title : "Puma Unisex Black & Blue Rise XT FUSE 1 Basketball Shoes",
        img : img4,
        mrp : "5000",
        offer : "4000",
        moq : "50",
        delivery : "20",
        inventory : "30"
    },
    {
        title : "PUMA Hoops Unisex Red & Blue Colourblocked RS-Dreamer Super Mario 64 Basketball Shoes",
        img : img5,
        mrp : "6000",
        offer : "5500",
        moq : "100",
        delivery : "10",
        inventory : "50"
    }
 ]
 const item = {
    title : "PUMA Hoops Unisex Red & Blue Colourblocked RS-Dreamer Super Mario 64 Basketball Shoes",
    img : img5,
    mrp : "6000",
    offer : "5500",
    moq : "100",
    delivery : "10",
    inventory : "50"
  }

  const userAvatar = defaultAvatar
  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  const renderProducts = () => {
    return data.map(item => {
        return (
        <Col lg='6'>
        <Card >
      <CardHeader className='pb-0'> 
        <span className='text-truncate font-weight-bold'>{item.title}</span>
      </CardHeader>
      <Row>
      <Col lg='8' md='6' className='py-1'>
    
      <div className='d-block my-auto'>
      <img className='img-fluid d-block mx-auto mt-2' src={item.img} alt={item.title} height='200' width='300'/>
      </div>
    
        </Col>
        <Col lg='4' md='6' className=''>
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
            <CardBody className='py-4 pl-0'>
                <a><span className='h2' style={{color:'#2876c6'}}>View</span></a>
            </CardBody>
            <CardBody className='px-0 py-4'>
            <div style={{bottom:0}}>
                <div className='d-inline'>
      <Button.Ripple className='px-1' type='submit' color='primary'>
      <ShoppingCart className='' size={12} />
      <span className='font-weight-bold font-small' style={{paddingLeft:5}}>Cart</span>
        </Button.Ripple>
      </div>
      <div className='d-inline ml-1'>
      <Button.Ripple className='px-1' type='submit' color='primary'>
      <Zap className='' size={12} />
      <span className='font-weight-bold font-small' style={{paddingLeft:5}}>RFQ</span>
        </Button.Ripple>
      </div>
      </div>
            </CardBody>
        </Col>
        </Row>
    </Card>
    </Col>)
    })
  }


  return  (
        <div id='dashboard-ecommerce'>
            <Topbar/>
             {/* <Card>
<CardBody>
<Row>
<Col sm='12'>
    <Row>
      <Col md='3' sm='12'>
          <div className='d-block my-auto'>
      <img className='img-fluid d-block mx-auto mt-2' src={logo} alt={`logo`} height='200' width='200'/>
      </div>
      </Col>
      <Col md='6' sm='12'>
          <Row>
              <Col md='8' sm='6'>
              <FormGroup>
          <Input type='text' id='category' placeholder='What are you looking for ?'  />
        </FormGroup>
              </Col>
              <Col md='4' sm='6'>
              <FormGroup>
          <Input type='text' id='category' placeholder='Qty?'/>
        </FormGroup>
              </Col>
              <Col md='10' sm='10'>
              <FormGroup className='mt-1'>
          <Input type='range' id='category' placeholder='Qty?'/>
          <Label for='default-range' className='d-block'>
              <span className='d-block mx-auto text-center font-weight-bold h6 font-italic'>
              What is the budget per Unit?
              </span>
              </Label>
        </FormGroup>
              </Col>
              <Col md='2' sm='2'>
              <Button.Ripple className='px-1' style={{backgroundColor : '#000000'}} type='submit' color='primary'>
                <Search size={18} />
        </Button.Ripple>
              </Col>
          </Row>
      </Col>

      <Col md='3' sm='12' >
          <div  className='d-block mx-auto'>
          <div>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link d-block mx-auto' onClick={e => e.preventDefault()}>
          <div>
          <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
          <span className='user-name font-weight-bold ml-2'>{'Rajiv Ajmera'}</span>
          </div>
        <span className='user-status'>{'Buyer'}</span>
      </DropdownToggle>
      </div>
      <div className='d-inline'>
      <Button.Ripple className='' type='submit' color='primary'>
      <ShoppingCart className='' size={14} />
      <span className='font-weight-bold' style={{paddingLeft:10}}>Cart</span>
        </Button.Ripple>
      </div>
      <div className='d-inline ml-2'>
      <Button.Ripple className='' type='submit' color='primary'>
      <Zap className='' size={18} />
      <span className='font-weight-bold' style={{paddingLeft:10}}>RFQ</span>
        </Button.Ripple>
      </div>
      </div>
      </Col>
      </Row>
      </Col>
      </Row>
      <hr/>
      <Row className='mt-3'>
          <Col sm='12'>
              <Row>
              <Col md='9' sm='9'>
              <AlignJustify size={20}/>
              <div className='d-inline-block'>
              <Search className='ml-3' size={24} />
              </div>
      <span className='font-weight-bold h3 ml-2' style={{color : '#827071'}}>SEARCH RESULT</span>
      </Col>
     
      <Col md='3' sm='3' >
        <div className='d-inline-block ml-2'>
            <Filter size={18} />
            <span>Filter(63)</span>
        </div>
        <div className='d-inline-block ml-2'>
            <span>0</span>
            <Bell size={18} />
        </div>
        <div className='d-inline-block ml-2'>
        <Avatar color={ 'secondary'} className='mr-1' content={'?'}  />
        </div>
        
      </Col>
              </Row>
          </Col>
      </Row>
      </CardBody>

        </Card>  */}
        <Col>
        <Row>
        <Col lg='12' sm='12'>
        <CardAction className='text-truncate py-0' title={`Create : Mobile iphone iphone 12 pro max`} actions='remove'>
      <Row>
      <Col lg='9' md='6' className='py-1'>
    <Row>
        <Col md='1' sm='1'>
        </Col>
         <Col md='3' sm='12'>
        <FormGroup>
          <Label for='budgetPerUnit'>Budget Per Unit</Label>
          <Input type='text' id='budgetPerUnit' placeholder='Rs. 5000' />
        </FormGroup>
      </Col>  
      <Col md='3' sm='12'>
        <FormGroup>
          <Label for='quantity'>Quantity</Label>
          <Input type='text' id='quantity' placeholder='500 units' />
        </FormGroup>
      </Col>  
      <Col md='3' sm='12'>
        <FormGroup>
          <Label for='days'>Days</Label>
          <Input type='text' id='days' placeholder='120 days' />
        </FormGroup>
      </Col>    
    </Row>
    <Row>
        <Col md='1' sm='1'>
        </Col>
         <Col md='3' sm='12'>
        <FormGroup>
          {/* <Label for='budgetPerUnit'>Invoice Address</Label> */}
          <Input type='text' id='budgetPerUnit' placeholder='Invoice Address' />
        </FormGroup>
      </Col>  
      <Col md='3' sm='12'>
        <FormGroup>
          {/* <Label for='quantity'>Ship To Address</Label> */}
          <Input type='text' id='quantity' placeholder='Ship To Address' />
        </FormGroup>
      </Col>  
      <Col md='3' sm='12'>
        <FormGroup  className='mb-0 mt-1'>
          <Label for='days'><span className='h6 ' style={{paddingTop:5}}>+ Add Ship To Address</span></Label>
         {/* <Input type='text' id='days' placeholder='120 days' /> */}
        </FormGroup>
      </Col>    
    </Row>
    <Row>
        <Col md='1' sm='1'>
        </Col>
         <Col md='10' sm='12'>
        <FormGroup>
          <Label for='budgetPerUnit'>Customization : <span style={{color:'#2876c6'}}>if required</span></Label>
          <Input type='textarea' id='budgetPerUnit' placeholder='Invoice Address' />
        </FormGroup>
      </Col>   
    </Row>
        </Col>
        <Col lg='3' md='6' className=''>
     <Row>
         <Col md='12' sm='12'>
             <span className='h4'>RFQ CLOSING</span>
         </Col>
     </Row>
     <Row>
         <Col md='6' sm='5'>
         <Fragment>
         <Label for='default-picker'>Date</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Fragment>
         </Col>
         <Col md='4' sm='5'>
         <Fragment>
         <Label id='timepicker'>Time</Label>
      <Flatpickr
        className='form-control'
        value={basic}
        id='timepicker'
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
          time_24hr: true
        }}
        onChange={date => setBasic(date)}
      />
        </Fragment>
         </Col>
     </Row>
     <Row>
         <Col md='6' sm='6'>
             <CardBody className='px-0'>
             <Button.Ripple color='secondary' outline>
             <div>
             <span>Select From</span>
             </div>
             <CardBody className='px-0'>
                 <div className='d-inline-block'>
                 <ShoppingCart  size={30}/>
             <span className='d-inline-block ml-1' >(18)</span>
                 </div>
             </CardBody>
        </Button.Ripple>
             </CardBody>
         
         </Col>
     </Row>
     <Row>
     <Col className='d-flex flex-sm-row flex-column mt-1' sm='12'>
        <Button.Ripple className='mb-1 mr-0 mr-sm-1' type='submit' color='primary'>
          Submit
        </Button.Ripple>
        <Button.Ripple className='mb-1 mr-0 mr-sm-1' color='secondary' outline>
          Reset
        </Button.Ripple>
      </Col>
     </Row>
        </Col>
        </Row>
    </CardAction>
    </Col>
        </Row>
      </Col>
      </div>
      )
  
}

export default CreateCart
