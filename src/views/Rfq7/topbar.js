// // ** React Imports
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Select from 'react-select'
// import { selectThemeColors, isObjEmpty } from '@utils'
// // ** Third Party Components
// import classnames from 'classnames'
// import { X, Heart, Star, Trash, Edit, ShoppingCart, Zap, Search, Plus, Filter, Bell, AlignJustify } from 'react-feather'
// import { Card, CardBody, CardText, CardHeader, Button, Label, InputGroup, FormGroup, Input, InputGroupText, Row, Col, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
// import logo from '@src/assets/images/logo/bidoyaLogo.png'
// import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
// import Avatar from '@components/avatar'

// // ** Styles
// import '@styles/base/pages/app-ecommerce.scss'
// // ** Custom Components
// import NumberInput from '@components/number-input'

// const Topbar = props => {
//    const item = {
//         image: logo,
//         name:"Tejas Thakare",
//        brand:"Pravin",
//        price:2000,
//         slug:"Plese don't false rate",
//         rating:2,
//         Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
//         qty:16521,
//         offers:"This is msg from offers box",
//         shippingDate : "04 / 10 /2021",
       
//         id: 1
//       }
//   const userAvatar = defaultAvatar

//   const initialvalues = {
//     id:1,
//     name: "",
//     email: "",
//     isOnGround: "",
//     isActive: "",
//     logo : "",
//     phone : "",
//     panNumber: "",
//     Currency:  [{value: "currency", label: "Indian Rupee"}],
//     City:  [{value: "city", label: "Mumbai"}], 
//     Category:  [{value: "Mobile", label: "Mobile"}],
//     SubCategory: [{value: "iphone", label: "iphone"}],
//     Product: [{value: "iphone 12 pro max", label: "iphone 12 pro max"}]
//   }

//   const optionsCategory = [
//     {value: "Mobile", label: "Mobile"},
//     {value: "Television", label: "Telivision"},
//     {value: "T-Shirt", label: "T-Shirt"}
//   ]

//   const optionsSubCategory = [
//     {value: "iphone", label: "iphone"},
//     {value: "Oneplus", label: "OnePlus"},
//     {value: "Polo", label: "Polo"}
//   ]

//   const optionsProduct = [
//     {value: "iphone 12 pro max", label: "iphone 12 pro max"},
//     {value: "Oneplus 108cm", label: "Telivision"},
//     {value: "US polo", label: "US polo"}
//   ]

//   const [values, setValues] = useState(initialvalues)
//   // ** Props
//  // const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

//   // ** Function to convert Date
//   const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
//     if (!value) return value
//     return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
//   }

//   // ** Funciton Function to toggle wishlist item
//   const handleWishlistClick = (id, val) => {
//     // if (val) {
//     //   dispatch(deleteWishlistItem(id))
//     // } else {
//     //   dispatch(addToWishlist(id))
//     // }
//     // dispatch(getCartItems())
//   }

//   const handleSampleClick = () => {

//   }

//   const handleBidClick = () => {
    
//   }

//   // ** Render cart items
//   const renderCart = () => {
//       return (
//         <Card>
// <CardBody>
// <Row>
// <Col sm='12'>
//     <Row>
//       <Col md='3' sm='12'>
//           <div className='d-block my-auto'>
//       <img className='img-fluid d-block mx-auto mt-2' src={item.image} alt={item.name} height='200' width='200'/>
//       </div>
//       </Col>
//       <Col md='6' sm='12'>
//           <Row>
//               <Col md='8' sm='6'>
//               <FormGroup>
//           <Input type='text' id='category' placeholder='What are you looking for ?'  />
//         </FormGroup>
//               </Col>
//               <Col md='4' sm='6'>
//               <FormGroup>
//           <Input type='text' id='category' placeholder='Qty?'/>
//         </FormGroup>
//               </Col>
//               <Col md='10' sm='6'>
//               <FormGroup className='mt-1'>
//           <Input type='range' id='category' placeholder='Qty?'/>
//           <Label for='default-range' className='d-block'>
//               <span className='d-block mx-auto text-center font-weight-bold h6 font-italic'>
//               What is the budget per Unit?
//               </span>
//               </Label>
//         </FormGroup>
//               </Col>
//               <Col md='2' sm='6'>
//               <Button.Ripple className='px-1' style={{backgroundColor : '#000000'}} type='submit' color='primary'>
//                 <Search size={18} />
//         </Button.Ripple>
//               </Col>
//           </Row>
//       </Col>

//       <Col md='3' sm='12'>
//           <div className=''>
//       <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link d-block mx-auto' onClick={e => e.preventDefault()}>
//           <div>
//           <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
//           <span className='user-name font-weight-bold ml-2'>{'Rajiv Ajmera'}</span>
//           </div>
//         <span className='user-status'>{'Buyer'}</span>
//       </DropdownToggle>
//       </div>
//       <div className='d-inline'>
//       <Button.Ripple className='' type='submit' color='primary'>
//       <ShoppingCart className='' size={14} />
//       <span className='font-weight-bold' style={{paddingLeft:10}}>Cart</span>
//         </Button.Ripple>
//       </div>
//       <div className='d-inline ml-2'>
//       <Button.Ripple className='' type='submit' color='primary'>
//       <Zap className='' size={18} />
//       <span className='font-weight-bold' style={{paddingLeft:10}}>RFQ</span>
//         </Button.Ripple>
//       </div>
//       </Col>
//       </Row>
//       </Col>
//       </Row>
//       <hr/>
//       <Row className='mt-3'>
//           <Col sm='12'>
//               <Row>
//               <Col md='2' sm='12'>
//               <AlignJustify size={20}/>
//               <Zap className='ml-3' size={24} />
//       <span className='font-weight-bold h3' style={{color : '#827071'}}>RFQ</span>
//       </Col>
//       <Col md='2' sm='12'>
//       <FormGroup>
              
//             <Select
//               id='State'
//               className='react-select'
//               classNamePrefix='select'
//               isClearable={false}
//               options={optionsCategory}
//               theme={selectThemeColors}
//               value={values.Category[0]}
//               onChange={data => {


//                                  setValues(
//                                           {
//                                              ...values,
//                                              State : data
//                                           } 
//                                   )
//                                 }
//                         }
//             />
//             </FormGroup> 
//       </Col>
//       <Col md='2' sm='12'>
//       <FormGroup>
              
//             <Select
//               id='State'
//               className='react-select'
//               classNamePrefix='select'
//               isClearable={false}
//               options={optionsSubCategory}
//               theme={selectThemeColors}
//               value={values.SubCategory[0]}
//               onChange={data => {


//                                  setValues(
//                                           {
//                                              ...values,
//                                              State : data
//                                           } 
//                                   )
//                                 }
//                         }
//             />
//             </FormGroup> 
//       </Col>
//       <Col md='2' sm='12'>
//       <FormGroup>
              
//             <Select
//               id='State'
//               className='react-select'
//               classNamePrefix='select'
//               isClearable={false}
//               options={optionsProduct}
//               theme={selectThemeColors}
//               value={values.Product[0]}
//               onChange={data => {


//                                  setValues(
//                                           {
//                                              ...values,
//                                              State : data
//                                           } 
//                                   )
//                                 }
//                         }
//             />
//             </FormGroup> 
//       </Col>
//       <Col md='4' sm='12' >
//       <Button.Ripple className='ml-3' type='submit' color='primary'>
//       <Plus className='' size={18} />
//       <span className='font-weight-bold'>Create</span>
//         </Button.Ripple>
//         <div className='d-inline-block ml-2'>
//             <Filter size={18} />
//             <span>Filter(63)</span>
//         </div>
//         <div className='d-inline-block ml-2'>
//             <span>0</span>
//             <Bell size={18} />
//         </div>
//         <div className='d-inline-block ml-2'>
//         <Avatar color={ 'secondary'} className='mr-1' content={'?'}  />
//         </div>
//       </Col>
//               </Row>
//           </Col>
//       </Row>
//       </CardBody>
//         </Card>  
//       )
//   }

//   return (
//     <div className='ecommerce-application '>
//       <div style={{marginTop:'-1rem'}} className='checkout-items list-view' >{1 ? renderCart() : <h4>Your cart is empty</h4>}</div>
//     </div>
//   )
// }

// export default Topbar


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
        <Card style={{marginTop:'-2rem'}} className='mb-sm-2 '>
<CardBody className='pb-0'>
<Row> 
          <Col lg='10' sm='12' className='pl-2'>
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
                          What is the budget per Unit?
                          </span>
                          </Label>
                    </FormGroup>
                  </Col>
                  <Col md='3' sm='6'>
                  <Search size={30} className='mr-1 ' />
                      {/* <Button.Ripple className='px-1' style={{backgroundColor : '#000000'}} type='submit' color='primary'>
                        <Search size={13} className='mr-1' />
                        <span>Search</span>
                      </Button.Ripple> */}
                  </Col>
                  
              </Row>
          </Col>

          <Col lg='2' sm='12' className='d-flex flex-md-row flex-column align-md-items-center align-items-start justify-content-end border-bottom'>  
              <div className='d-flex'>
                <Button.Ripple className='mr-1' type='submit' color='primary'>
                  <ShoppingCart className='' size={13} />
                  <span className='font-weight-bold ml-1' >Cart</span>
                </Button.Ripple>
              </div>
              <div className='d-flex'>
                <Button.Ripple className='' type='submit' color='primary'>
                  <Zap className='' size={13} />
                  <span className='font-weight-bold ml-1' >RFQ</span>
                </Button.Ripple>
              </div>
          </Col>
</Row>
      
      </CardBody>
        </Card>  
      )
  }

  return (
    <div >
      <div  >{1 ? renderCart() : <h4>Your cart is empty</h4>}</div>
    </div>
  )
}

export default Topbar
