// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
import AutoG from './autoimg'
import { useRTL } from '@hooks/useRTL'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Star, Pocket, Truck } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import NumberInput from '@components/number-input'
import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Button, Modal, ModalHeader, CardHeader, CardBody, ModalBody, Card, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, CardText } from 'reactstrap'
// ** Styles
import './style.css'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
     const [count, setCount] = useState(0)
   const [isRtls, setIsRtl] = useRTL()
  const [values, setValues] = useState('')
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  const view = (val) => {
    //here we passing id to delete this specific record
   setModal(true)
  }

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
     
      contentClassName='pt-0'
    >

      <ModalBody >
            <Row>
                  <Col className='d-flex align-items-center justify-content-center m-0 p-0  mb-md-0 w-100' md='6' xs='12'>
                    <Col sm='9' className='m-0 p-0'>
                      <AutoG isRtl={isRtls} />
                    </Col>
                  </Col>
                  <Col md='5' xs='12'>
                    
                    <Badge className="mt-1 mb-1" color='light-danger'>
                          OUT OF STOCK
                    </Badge>
                   
                    <h4>Digital Thermometer X30-Pro</h4>
                    <CardText tag='span' className='item-company'>
                      By
                      <a className='pl-1 company-name' href='/' onClick={e => e.preventDefault()}>
                        Apple
                      </a>
                    </CardText>
                    <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
                      <ul className='unstyled-list list-inline '>
                
                            <li className='ratings-list-item pr-1'>
                               <Rating
                                  emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                                  fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                                  initialRating={2}
                                />
                            </li>
                          (21 Reviews)
                      </ul>
                    </div>
                    <hr />
                    <CardText>
                      Available -<span className='text-success ml-25'>In stock</span>
                    </CardText>
                    <div style={{paddingTop: '5px'}}>
                      <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Study history up to 30 days</span>
                    </div>
                    <div style={{paddingTop: '5px'}}>
                      <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Up to 5 users simultaneously</span>
                    </div>
                    <div style={{paddingTop: '5px'}}>
                      <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Has HEALTH certificate</span>
                    </div>

                    <hr />
                    <h1 className="mb-1"><b>$77.65</b></h1>
                    <CardBody className="p-0 m-0 mb-1">
                        <Row>
                          <Col md='12' xs='12'>
                              <div className="mb-1"><b>Quantity</b></div>
                          </Col>
                          <Col md='4' xs='12'>  
                            <NumberInput id='basic-number-input' value={count} onChange={count => setCount(count)} />
                          </Col>
                          <Col md='8' xs='12'>
                              <div className=" d-flex">
                                <Button.Ripple className='round' style={{width:"100%"}} color='primary' outline>
                                   Add To Cart
                                </Button.Ripple>
                              </div> 
                          </Col>
                          
                        </Row>
                      </CardBody>

                    <hr />
                    
                    <div style={{paddingTop: '5px'}}>
                      <b>Tag:</b> <span style={{paddingLeft:"5px"}}>Health, Thermometer</span>
                    </div>
                    <div style={{paddingTop: '5px'}}>
                      <b>SKU:</b> <span style={{paddingLeft:"5px"}}>8DJ21A</span>
                    </div>
                    
                  </Col>

            </Row>
        
      </ModalBody>
    
    </Modal>
  )
}

export default AddNewModal