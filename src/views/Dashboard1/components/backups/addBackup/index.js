//Amout, date, Allocate to, On behalf
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams, Link } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
// ** Custom Components
import RightsTable from './rights'
import Avatar from '@components/avatar'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'
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

  const optionPartners = [
    {value: "user1212", label: part(data[0])},
    {value: "user1231", label: part(data[1])},
    {value: "user1234", label: part(data[2])},
    {value: "user2345", label: part(data[3])},
    {value: "user3456", label: part(data[4])}
  ]

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
          <h2 className="mb-1">Add Backup</h2>
          <h6 className="mb-1">02/11/2021</h6>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <div className='mb-2 d-flex justify-content-left align-items-center'>
              <Avatar color={'primary'} size='lg' className='mr-1' content={'Bidoya'} initials status="online" />
              <div className='d-flex flex-column'>
                
                  <h4 className='mb-0'><span className='font-weight-bold'>Bidoya Limited LTD, PVT</span></h4>
                  <h6><small className='text-truncate text-muted mb-0'>@bidoyaOfficial</small></h6>
              </div>
        </div>
      </Col>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='allocate'>Select Backup</Label>
                <Select
                  id='allocate'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionPartners}
                  theme={selectThemeColors}
                  value={values.Name}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Name : data
                                              } 
                                      )
                                    }
                            }
                />
              </FormGroup>
            </Col>

             <Col md='12' sm='12'>
              <RightsTable />
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