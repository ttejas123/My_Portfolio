// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
import { Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
import Nouislider from 'nouislider-react'
import '@styles/react/libs/noui-slider/noui-slider.scss'
import './style.css'
import { useRTL } from '@hooks/useRTL'
// ** Third Party Components
import axios from 'axios'
import { X, Heart, Star, Trash, Edit, ShoppingCart, Zap, Search, Plus, Filter, Bell, AlignJustify } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
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

import Mob from '@src/views/Rfq7/assets/M1.jpg'
import Tel from '@src/views/Rfq7/assets/T1.jpeg'
import TS from '@src/views/Rfq7/assets/TS1.jpg'

import Polo from '@src/views/Rfq7/assets/poloLogo.jpg'
import OneP from '@src/views/Rfq7/assets/onPlusLogo.jpg'
import IphoLogo from '@src/views/Rfq7/assets/IphoneLogo.jpg'

import Iphone12 from '@src/views/Rfq7/assets/Iphone12.jpg'

const AddNewModal = (prop) => {
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
    {value: "M1", label: "Mobile", img: Mob },
    {value: "T1", label: "Telivision", img: Tel},
    {value: "TS1", label: "T-Shirt", img: TS}
  ]

  const optionsSubCategory = [
    {value: "iphone", label: "iphone", img: IphoLogo},
    {value: "Oneplus", label: "OnePlus", img: OneP},
    {value: "Polo", label: "Polo", img: Polo}
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
      className='sidebar-sm'
     
      contentClassName='pt-0'
    >

      <ModalBody >
            

        <Row className='mt-1'>
          <Col sm='12' className='text-center mb-lg-1'>
            <h3 >Please Select from Category</h3>
          </Col>
          <Col sm='12'>
            <Row className='DropDowns'>
              
              <Col md='4' sm='12'>
              {catI !== null ? (<div > <img style={{width: "50px"}} className='mb-1' src={catI} alt="Category" /> </div>) : (null)}
                
                <FormGroup>
                        
                      <Select
                        id='State'
                        className='react-select'
                        classNamePrefix='select'
                        isClearable={false}
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
                </FormGroup> 
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                      {subcatI !== null ? (<img style={{width: "50px"}} className='mb-1' src={subcatI} alt="Category" />) : (null)} 
                      <Select
                        id='State'
                        className='react-select'
                        classNamePrefix='select'
                        isClearable={false}
                        options={optionsSubCategory}
                        theme={selectThemeColors}
                        value={values.SubCategory}
                        onChange={data => {
                                           setValues(
                                                    {
                                                       ...values,
                                                       SubCategory : data
                                                    } 
                                            )
                                            setSubCat(data.img)
                                          }
                                  }
                      />
                </FormGroup> 
              </Col>
              <Col md='4' sm='12'>
                {productI !== null ? (<img style={{width: "50px"}} className='mb-1' src={productI} alt="Category" />) : (null)}
                <FormGroup>
                        
                      <Select
                        id='State'
                        className='react-select'
                        classNamePrefix='select'
                        isClearable={false}
                        options={optionsProduct}
                        theme={selectThemeColors}
                        value={values.Product}
                        onChange={data => {
                                           setValues(
                                                    {
                                                       ...values,
                                                       Product : data
                                                    } 
                                            )
                                            setProductI(data.img)
                                          }
                                  }
                      />
                </FormGroup> 
              </Col>
            </Row>
          </Col>
          <Col sm='12' className='text-center mt-1 mb-lg-1'>
            <h3 >To create RFQ</h3>
          </Col>
          <Col sm='12' className='text-center mt-1 mb-lg-1'>
              <Button.Ripple className='pl-lg-3 pr-lg-4'><Plus  size={16}/><span>Got It</span></Button.Ripple>
          </Col>
        </Row>
      </ModalBody>
    
    </Modal>
  )
}

export default AddNewModal