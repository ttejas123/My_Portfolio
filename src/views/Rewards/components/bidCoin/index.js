//Amout, date, Allocate to, On behalf
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams, Link } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus, Compass  } from 'react-feather'

import Avatar from '@components/avatar'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'
// ** Renders Client Columns

const RequestChange = (prop) => {
  // const { id } = useParams()
  const initialvalues = {
    id:0,
    type: '',
    Name: "",
    onBihalf: "",
    allocate:"",
    behalf: "",
    amount: 0
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  

  //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }


  const submitHandle = (event) => {
    const { name, value } = event.target
    console.log({
      ...values,
      [name] : values
    })
    setValues({
      ...values,
      [name] : values
    })
    //prop.editAction(values)
    
    setValues(initialvalues)
    alert("Data successfully inserted")
  }

  return (
    <Card>
      <Row>
      
        <Col sm='12' className="d-flex justify-content-between pl-5 pt-2 pr-5">
          <h2 className="mb-1">Add Bidcoin</h2>
          <h6 className="mb-1">02/11/2021</h6>
        </Col>
      
      <CardBody className=' pl-3 pt-2'>
      <Col sm='12' className='d-flex justify-content-between pr-3'>
        <div className='mb-2 d-flex justify-content-left align-items-center'>
              <Avatar color={'primary'} size='lg' className='mr-1' content={'Bidoya'} initials status="online" />
              <div className='d-flex flex-column'>
                
                  <h4 className='mb-0'><span className='font-weight-bold'>Bidoya Limited LTD, PVT</span></h4>
                  <h6><small className='text-truncate text-muted mb-0'>@bidoyaOfficial</small></h6>
              </div>
        </div>
        <div className='mb-2 d-flex flex-column justify-content-end align-items-end'>
              <p className='mb-0'>Available</p>
              <div className='d-flex '>
                
                  <h4 className='mb-0'><span className='font-weight-bold'><Compass style={{color: 'yellow'}}  size={23} /></span></h4>
                  <h6 style={{paddingTop: '3px'}}><small className='text-truncate text-muted ml-1 mb-0'>2436258</small></h6>
              </div>
        </div>
      </Col>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='amount'>Enter Bidcoin</Label>
                <InputGroup>
                  
                  <Input name="amount" type="number" onChange={handleInputeChange} id='amount'  />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='amount'>Request Reason</Label>
                <InputGroup>
                  
                  <Input name="amount" type="textarea" onChange={handleInputeChange} id='amount' placeholder='Write Your Reason'  />
                </InputGroup>
              </FormGroup>
            </Col>


            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle(e)
                                                        }
                                                      } color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={ () => setValues(initialvalues) } outline>
                Reset
              </Button.Ripple>
            </Col> 
          </Row>
        </Form>
      </Col>
      </CardBody> 
    </Row>
    </Card>
  )
}

export default RequestChange

// 5. name date (disable) 
//    user select, rights, resne for request