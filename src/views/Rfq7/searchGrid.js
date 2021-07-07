// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import classnames from 'classnames'
import ReactPaginate from 'react-paginate'

import { X, Heart, Star, Trash, Edit, ShoppingCart, Zap, Search, Plus, Filter, Bell, AlignJustify } from 'react-feather'
import { Card, CardBody, CardText, CardHeader, Button, Label, CardTitle, FormGroup, Input, Media, Row, Col, Pagination, PaginationItem, PaginationLink, DropdownToggle, DropdownItem } from 'reactstrap'
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
// ** Custom Components
import NumberInput from '@components/number-input'
import CardFooter from 'reactstrap/lib/CardFooter'
import SubBar from './subBar'
import Topbar from './topbar'

const SearchGrid = props => {
  
 // const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

 const Previous = () => {
    return <span className='align-middle d-none d-md-inline-block'>Prev</span>
  }
  
  const Next = () => {
    return <span className='align-middle d-none d-md-inline-block'>Next </span>
  }
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
  // ** Render cart items
  const renderCart = () => {
     
  }

  return  (
        <div id='dashboard-ecommerce'>
  
        <Topbar/>
        <SubBar search='true'/>
        <Col className='mt-3'>
        <Row>
        {renderProducts()}
        </Row>
      </Col>
      <ReactPaginate
          pageCount={10}
          nextLabel={<Next />}
          breakLabel={'...'}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeClassName={'active'}
          pageClassName={'page-item'}
          previousLabel={<Previous />}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousClassName={'page-item prev'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName={'pagination react-paginate'}
        />
      </div>
      )
  
}

export default SearchGrid
