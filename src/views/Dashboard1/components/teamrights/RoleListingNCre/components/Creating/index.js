//Amout, date, Allocate to, On behalf
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import RightsTable from './rights'
// ** Custom Components
import Avatar from '@components/avatar'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

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
    {value: "user1212", label: "Mobile"},
    {value: "user1231", label: "T-shirt"},
    {value: "user1234", label: "Watchs"},
    {value: "user2345", label: "Glass Covers"},
    {value: "user3456", label: "Tang Tops"},
    {value: "user2345", label: "Footballs"},
    {value: "user3456", label: "Bat"}
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
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Create New Role</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='role'>Role Name</Label>
                <InputGroup>
                  
                  <Input name="role" type="text" onChange={handleInputeChange} id='amount' value={values.role} />
                </InputGroup>
              </FormGroup>
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='amount'>Your Comment</Label>
                <InputGroup>
                  
                  <Input name="amount" type="textarea" onChange={handleInputeChange} id='amount' placeholder='Write Your Comment' value={values.amount} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='12' sm='12'>
              <RightsTable />
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