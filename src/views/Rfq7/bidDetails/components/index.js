// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import AutoG from './autoI' 
import { useRTL } from '@hooks/useRTL'
import Modelsss from './formModel'
import { Star, Edit, Zap, Trash2, ShoppingCart, Percent, ShoppingBag, Box, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Label,
  FormGroup,
  CustomInput,
  Input
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
  // ** Props
  //const { data, deleteWishlistItem, dispatch, addToWishlist, getProduct, productId, addToCart } = props
  const [modal, setModal] = useState(false)
      const view = () => {
            //here we passing id to delete this specific record
           setModal(true)
        }

    const handleModal = () => {
        setModal(!modal)
    }
SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
 const colorsData = ["primary", "success", "warning", "danger", "info"]
  // ** Renders color options
  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')
  const [edits, setedit] = useState(true)
  // ** Renders color options
  const renderColorOptions = () => {
   
    return colorsData.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }


  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
    <Col lg='12' className='p-0 d-lg-flex justify-content-between'>
      <h4>Air Jordan 300xs Shoes with korean style</h4>
      <div className='d-lg-flex text-right'>
        <div className='mx-1 d-lg-flex'><div className='mr-1'>Created Date:</div><Input   type='text' name='text' id='exampleText'  placeholder='Enter Date' /> </div>
        <div className='mr-1 d-lg-flex'><div className='mr-1'>End Date :</div><Input  type='text' name='text' id='exampleText' placeholder='Enter Date' /> </div>
      </div>
    </Col>
    <Row>    
      <Col className=' align-items-center m-0 p-0' md='3' xs='12'>
        
          <AutoG isRtl={isRtls} />
          <div>
                <Label>Billing Address:-</Label><br />
                <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Billing Address' />
          </div>
          <div >
                <Label>Shipping Address:-</Label><br />
                <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Shipping Address' />
          </div>
          <div className='pt-1 '>
            <Button.Ripple color='primary' block onClick={() => view()}><span style={{paddingLeft: "4px"}}>Add More</span></Button.Ripple>
          </div>
      </Col>
      <Col md='5' xs='12'>
        <div className='  mt-1'>
          <ul className='unstyled-list list-inline '>
    
                <li className='ratings-list-item pr-1'>
                   <Rating
                      emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                      fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                      initialRating={2}
                    />
                </li><br />
              (21 Reviews)
          </ul>
          <CardText>
            Available -<span className='text-success ml-25'>In stock</span>
          </CardText>
        </div>

        <hr />
        <Row>
          <Col md='5' xs='12'> 
            <div style={{paddingTop: '5px'}}>
              <DollarSign size={18} /> <span style={{paddingLeft:"5px"}}>MRP : ₹2000 - ₹3500</span>
            </div>

            <div style={{paddingTop: '5px'}}>
              <Percent size={18} /> <span style={{paddingLeft:"5px"}}>Offer : 5 - 7</span>
            </div>

            <div style={{paddingTop: '5px'}}>
              <Box size={18} /> <span style={{paddingLeft:"5px"}}>MOQ : 100 - 150 Pcs</span>
            </div>

            <div style={{paddingTop: '5px'}}>
              <ShoppingBag size={18} /> <span style={{paddingLeft:"5px"}}>Inventory : 200 Pcs</span>
            </div>

            <div style={{paddingTop: '5px'}}>
              <Truck size={18} /> <span style={{paddingLeft:"5px"}}>Delivery : 5 - 7 days</span>
            </div>
          </Col>

          <Col md='7' xs='12' className={edits  ? ("d-block") : ("d-block")}> 
            <div className='d-lg-flex' >
              <Label style={{marginTop: '0.5rem', marginRight: "10px"}}> Rate:-</Label>
              <Input   type='text' name='text' id='exampleText'  placeholder='Enter Rate(₹) / MRP(₹)' />
            </div>

            <div className='d-lg-flex ' style={{ marginTop: '0.8rem'}}>
              <Label style={{marginTop: '9px', marginRight: "10px"}}> Quantity:-</Label>
              <Input   type='text' name='text' id='exampleText'  placeholder='eg. 200' />
            </div>

            <div className='d-lg-flex ' style={{marginTop: '0.6rem'}}>
              <Label style={{marginTop: '0.7rem', marginRight: "10px"}}>Days:-</Label>
              <Input   type='text' name='text' id='exampleText'  placeholder='eg. 5' />
            </div>
          </Col>
        </Row>
        <hr />
        
        <div style={{paddingTop: '5px'}}>
          <b>SKU:</b> <span style={{paddingLeft:"5px"}}>8DJ21A</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <b>Bill To:</b> <span style={{paddingLeft:"5px"}}>Navi Mumbai, Airoli, sector-15</span>
        </div>
        <div style={{paddingTop: '5px'}}>
          <b>Ship to:</b> <span style={{paddingLeft:"5px"}}>Multiple</span>
        </div>

        <Button.Ripple block color='primary' ><span style={{paddingLeft: "4px"}}>Select from Cart (20 Products)</span></Button.Ripple>


        <hr />
      </Col>

      <Col md='4' xs='12' className=''>
        <div className='mt-lg-5 pt-lg-5'>
          <CardText>
            Add your Required Customization
          </CardText>
          <Input className='col-md-12' type='textarea' name='text' id='exampleText' rows='3' placeholder='Customization' />
          <div className={edits  ? ("d-block") : ("d-block")}> 
            
            <div className='divider ' style={{marginBottom: '7px'}}>
              <div className='divider-text'>or</div>
            </div>
            <div style={{paddingTop: '5px'}}>
               <FormGroup>
                <CustomInput
                  inline
                  type='checkbox'
                  id='exampleCustomCheckbox5'
                  label='Sampling'
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <Col md='12' style={{position:'absolute', bottom:'0', textAlign:'right', width:'100%'}}>
            <Button.Ripple color='primary' className='mr-1'><span style={{paddingLeft: "4px"}}>Submit</span></Button.Ripple>
            <Button.Ripple color='primary' className='mr-1'><span style={{paddingLeft: "4px"}}>Reset</span></Button.Ripple>
            <Button.Ripple color='danger' className='mr-1'><Trash2 size={14} /><span style={{paddingLeft: "4px"}}>Delete</span></Button.Ripple>
        </Col>
      </Col>
    </Row>
    <Row className='pl-0 '>
        {/*<Col md='8' className='d-lg-flex pl-0'>

        </Col>
        <Col md='4' className='pl-lg-5 mt-lg-0'>
                    <Button.Ripple color='primary' className='mr-1'><span style={{paddingLeft: "4px"}}>Submit</span></Button.Ripple>
                    <Button.Ripple color='primary' className='mr-1'><span style={{paddingLeft: "4px"}}>Reset</span></Button.Ripple>
                    <Button.Ripple color='danger' ><Trash2 size={14} /><span style={{paddingLeft: "4px"}}>Delete</span></Button.Ripple>
                </Col>*/}
        <Modelsss open={modal} handleModal={handleModal} />
    </Row>
    </>
  )
}

export default Product
