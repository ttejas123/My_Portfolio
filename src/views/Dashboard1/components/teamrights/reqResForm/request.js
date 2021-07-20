//Amout, date, Allocate to, On behalf
// ** React Imports
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import RightsTable from './components/Creating/rights'
// ** Custom Components
import Avatar from '@components/avatar'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'


const MySwal = withReactContent(Swal)

const handleTitleAlert = () => {
    return MySwal.fire({
      title: 'Request Registered',
      text: 'Please Wait For Response !',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
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
      
      <Col sm='12' className="d-flex justify-content-between pl-5 pt-2 pr-5">
          <h2 className="mb-1">Rights Request Form</h2>
          <h6 className="mb-1">02/11/2021</h6>
      </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Row className='pl-1'>
          <Col lg='6'>
            <div className='mb-2 d-flex justify-content-left align-items-center'>
                  <Avatar color={'primary'} size='lg' className='mr-1' content={'Bidoya'} initials status="online" />
                  <div className='d-flex flex-column'>
                    
                      <h4 className='mb-0'><span className='font-weight-bold'>Bidoya Limited LTD, PVT</span></h4>
                      <h6><small className='text-truncate text-muted mb-0'>@bidoyaOfficial</small></h6>
                  </div>
            </div>
          </Col>

          <Col lg='6' className='d-flex'>
            <h3>Super User :-</h3>
            <div className='mb-2 ml-1 d-flex justify-content-left align-items-end'>
                  <Avatar color={'primary'} size='lg' className='mr-1' content={'Super'} initials status="online" />
                  <div className='d-flex flex-column'>
                    
                      <h4 className='mb-0'><span className='font-weight-bold'>Super User</span></h4>
                      <h6><small className='text-truncate text-muted mb-0'>@superuserOffilcial</small></h6>
                  </div>
            </div>
          </Col>
      </Row>

      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='12' sm='12'>
              <RightsTable />
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={handleTitleAlert} color='primary'>
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