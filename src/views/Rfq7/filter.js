// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
import { Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
import Nouislider from 'nouislider-react'
import { data1 } from './data'
import '@styles/react/libs/noui-slider/noui-slider.scss'
import './style.css'

import { useRTL } from '@hooks/useRTL'
// ** Third Party Components
import axios from 'axios'
import { X, Heart, Star, Trash, Edit, ShoppingCart, Zap, Search, Plus, Filter, Bell, AlignJustify, Trash2, Calendar } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import '@styles/react/libs/flatpickr/flatpickr.scss'
import NumberInput from '@components/number-input'
import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { 
  Button, 
  Modal, 
  ModalHeader, 
  CardHeader, 
  CardBody, 
  ModalBody, 
  Card,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  CardTitle,
  FormGroup, 
  InputGroup, 
  InputGroupAddon, 
  InputGroupText, 
  Input, 
  Label, 
  Media,
  Badge, 
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem, 
  Row, 
  Col, 
  CardText
} from 'reactstrap'
// ** Styles
// ** Custom Components

import Mob from './assets/M1.jpg'
import Tel from './assets/T1.jpeg'
import TS from './assets/TS1.jpg'

import Polo from './assets/poloLogo.jpg'
import OneP from './assets/onPlusLogo.jpg'
import IphoLogo from './assets/IphoneLogo.jpg'

import Iphone12 from './assets/Iphone12.jpg'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Link to={`/bidDetails/${row.id}`}> <Avatar className='mr-1' img={row.avatar} width='32' height='32'  /> </Link>
  } else {
    return <Link to={`/bidDetails/${row.id}`}><Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" /> </Link>
  }
}

const part = (data2) => {
  return (<div className='d-flex justify-content-left align-items-center'>
          {renderClient(data2)}
        <div className=''>
                                          
          <div className='user-info text-truncate d-flex flex-column'>
            <span className='font-weight-bold'>{data2.Name}</span>
              <small className='text-truncate text-muted mb-0'>@{data2.username}</small>
          </div>
                                         
        </div>
    </div>)
}

const AddNewModal = (prop) => {
      const optionPartners = [
        {value: "user1212", label: part(data1[0])},
        {value: "user1231", label: part(data1[1])},
        {value: "user1234", label: part(data1[2])},
        {value: "user2345", label: part(data1[3])},
        {value: "user3456", label: part(data1[4])}
      ]
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
    {value: "M1", label: "Mobile" },
    {value: "2132", label: "Telivision"},
    {value: "4325", label: "T-Shirt"},
    {value: "M3423", label: "Mobile" },
    {value: "T345", label: "Telivision"},
    {value: "TS142", label: "T-Shirt"},
    {value: "M35345", label: "Mobile" },
    {value: "T1424", label: "Telivision"},
    {value: "TS134", label: "T-Shirt"},
    {value: "M142", label: "Mobile" },
    {value: "T132", label: "Telivision"},
    {value: "TS14", label: "T-Shirt"}
  ]

  const optionsLocation = [
    {value: "Mumbai", label: "Mumbai"},
    {value: "Navi Mumbai", label: "Navi Mumbai"},
    {value: "Goa", label: "Goa"}
  ]

  const optionsProduct = [
    {value: "iphone 12 pro max", label: "iphone 12 pro max", img: Iphone12},
    {value: "Oneplus 108cm", label: "Telivision", img: Tel},
    {value: "US polo", label: "US polo", img: Polo}
  ]

  const [values, setValues] = useState(initialvalues)
  const [count, setCount] = useState(0)
  const [catI, setCat] = useState(null)
  const [subcatI, setSubCat] = useState(null)
  const [productI, setProductI] = useState(null) 
  const [isRtls, setIsRtl] = useRTL()

  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  const view = (val) => {
    //here we passing id to delete this specific record
   setModal(true)
  }


  const cols = { md: '3', sm: '6' }
    const data = [
        {
          title: 'Price Range',
          subtitle: '1000-2000'
        },
        {
          title: 'Inventory',
          subtitle: '1k'
        },
        {
          title: '#Sellers',
          subtitle: '10'
        },
        {
          title: 'Created Date',
          subtitle: '10-11-12'
        }
      ]
    
      const renderData = () => {
        return data.map((item, index) => {
          const margin = Object.keys(cols)
          return (
            <Col
              key={index}
              {...cols}
              className={classnames({
                [`mb-2 mt-0 mb-${margin[0]}-0`]: index !== data.length - 1
              })}
            >
              <Media>
                <Media className='my-auto' body>
                  <h5 className='font-weight-bolder text-center mb-0'>{item.title}</h5>
                  <CardText className='font-small-3 text-center mb-0'>{item.subtitle}</CardText>
                </Media>
              </Media>
            </Col>
          )
        })
      }
    
    const onChange = e => {
        if (handleFilter) {
          handleFilter(e)
        } else {
          setSearchTerm(e.target.value)
        }
      }
  

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebarFilter'
      contentClassName='pt-0'
    >

      <ModalBody >
      
        <CardTitle><h2><b>Filter</b></h2></CardTitle>
        <div className='nav-vertical'>
          <Nav tabs className='nav-left border-right'>
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
               RFQ item
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                Quantity

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
              >
                Delivery Time
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '4'}
                onClick={() => {
                  toggle('4')
                }}
              >
                RFQ Owner (18)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '5'}
                onClick={() => {
                  toggle('5')
                }}
              >
                Budget
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '6'}
                onClick={() => {
                  toggle('6')
                }}
              >
                Location

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '7'}
                onClick={() => {
                  toggle('7')
                }}
              >
                Creation Date
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '8'}
                onClick={() => {
                  toggle('8')
                }}
              >
                Pending
              </NavLink>
            </NavItem>
          </Nav>
            <TabContent activeTab={active}>
              <TabPane tabId='1'>
              
                        <div className='col-lg-10' style={{height: "300px"}}>  
                          <Select
                            id='State'
                            isMulti
                            isClearable
                            isSearchable
                            className='react-select'
                            classNamePrefix='select'
                            closeMenuOnSelect={false}
                      
                            options={optionsCategory}
                            theme={selectThemeColors}
                            value={values.Category}
                            onChange={data => {
                                               setValues(
                                                        {
                                                           ...values,
                                                           Category : data
                                                        } 
                                                )
                                                setCat(data.img)
                                              }
                                      }
                          />
                        </div>
                    
              </TabPane>
              <TabPane tabId='2'>
                        <div className='col-lg-10'>
                          <Input type='number' placeholder="Budget" />
                        </div>
              </TabPane>
              <TabPane tabId='3'>
                <div className='col-lg-10' >
                  <FormGroup>
                    <Label for='date'>Delivery Date</Label>
                       <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <Calendar size={15} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Flatpickr
                          id='date'
                          tag={Flatpickr}
                          name='date '
                          className='form-control'
                          onChange={(date) => setValues(
                                                    {
                                                         ...values,
                                                        date  : date[0]
                                                    }
                                               )}
                          value={values.date }
                          options={{
                            dateFormat: 'd-m-Y'
                          }}
                        />
                      </InputGroup>
                  </FormGroup>
                </div>
              </TabPane>
              <TabPane tabId='4'>
                        <div className='col-lg-10' style={{height: "300px"}}>
                          <FormGroup>
                            <Label for='BidStatus'>Partners</Label>
                            <Select
                              id='BidStatus'
                              isMulti
                              isClearable
                              isSearchable
                              className='react-select'
                              classNamePrefix='select'
                              closeMenuOnSelect={false}
                              
                              options={optionPartners}
                              theme={selectThemeColors}
                              value={values.Name}
                              onChange={data => {
                                                 setValues(
                                                          {
                                                             ...values,
                                                             extra : data
                                                          } 
                                                  )
                                                }
                                        }
                            />
                          </FormGroup>
                        </div>
              </TabPane>
              <TabPane tabId='5'>
                        <div className='col-lg-10'>
                          <Input type='number' placeholder="Budget" />
                        </div>
              </TabPane>
              <TabPane tabId='6'>
                        <div className='col-lg-10' style={{height: "300px"}}>
                          <FormGroup>
                            <Label for='BidStatus'>Location</Label>
                            <Select
                              id='BidStatus'
                              isMulti
                              isClearable
                              isSearchable
                              className='react-select'
                              classNamePrefix='select'
                              closeMenuOnSelect={false}
                              
                              options={optionsLocation}
                              theme={selectThemeColors}
                              value={values.Name}
                              onChange={data => {
                                                 setValues(
                                                          {
                                                             ...values,
                                                             loc : data
                                                          } 
                                                  )
                                                }
                                        }
                            />
                          </FormGroup>
                        </div>
              </TabPane>
              <TabPane tabId='7'>
                <div className='col-lg-10' >
                  <FormGroup>
                    <Label for='date'>Delivery Date</Label>
                       <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <Calendar size={15} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Flatpickr
                          id='date'
                          tag={Flatpickr}
                          name='date '
                          className='form-control'
                          onChange={(date) => setValues(
                                                    {
                                                         ...values,
                                                        date1  : date[0]
                                                    }
                                               )}
                          value={values.date }
                          options={{
                            dateFormat: 'd-m-Y'
                          }}
                        />
                      </InputGroup>
                  </FormGroup>
                </div>
              </TabPane>
              <TabPane tabId='8'>
                        <div className='col-lg-10'>
                          <Input type='number' placeholder="pending" />
                        </div>
              </TabPane>
            </TabContent>
        </div>
        <hr />
        <div className='d-flex float-right'>
          <div>
            <Button.Ripple className='mr-2'><Filter size={14} /><span style={{paddingLeft: "4px"}}>Filter</span></Button.Ripple>
          </div>
          <div>
            <Button.Ripple><Trash2 size={14} /><span style={{paddingLeft: "4px"}}>Delete</span></Button.Ripple>
          </div>
        </div>

      </ModalBody>
    
    </Modal>
  )
}

export default AddNewModal