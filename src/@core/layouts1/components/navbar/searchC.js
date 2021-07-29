// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
import { Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
import Nouislider from 'nouislider-react'
import '@styles/react/libs/noui-slider/noui-slider.scss'

import { useRTL } from '@hooks/useRTL'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Star, Pocket, Truck, Search } from 'react-feather'
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
      className=''
     
      contentClassName='pt-0'
    >

      <ModalBody >
            

        <div className='d-flex mx-auto'>
            <Col lg='12'>
              <div>
            <CardBody className=''>
                  <CardTitle>
                    <h3 className=' font-weight-bolder text-center' >What are you looking for ?</h3>
                  </CardTitle>
            <Row className='px-2'>
              <Col md='8' sm='6'>
                <FormGroup>
                  <Input type='text' id='category' placeholder='Product Name'  />
                </FormGroup>
              </Col>
              <Col md='4' sm='6'>
                <FormGroup>
                  <Input type='text' id='category' placeholder='Qty?'/>
                </FormGroup>
              </Col>
              <Col md='8' sm='6'>
                  <FormGroup className='mt-1'>
                    <Nouislider
                        start={[40, 60]}
                        direction={'ltr'}
                        behaviour={'drag'}
                        connect={true}
                        range={{
                          min: 20,
                          max: 80
                        }}
                    />
                    <Label for='default-range' className='d-block mt-1'>
                        <span className='d-block mx-auto text-center font-weight-bold h6 font-italic'>
                            Budget / Unit
                        </span>
                    </Label>
                  </FormGroup>
              </Col>
              <Col md='2' sm='6'>
              <Button.Ripple className='mb-1  mr-0 ml-1' color='primary'>
                <Search size={14} /> </Button.Ripple>
              </Col>
          </Row>
      </CardBody>
        </div>
       
        </Col>
        </div>

        
      </ModalBody>
    
    </Modal>
  )
}

export default AddNewModal