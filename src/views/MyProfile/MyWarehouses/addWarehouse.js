// ** React Imports
import { useState, useEffect } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const AddWarehouse = () => {

  const [data, setData] = useState(null)
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isOnGround: 'No' }
  })

  const optionCountry = [
    {value: "India", label: "India"},
    {value: "UK", label: "UK"},
    {value: "USA", label: "USA"},
    {value: "Australia", label: "Australia"},
    {value: "China", label: "China"},
    {value: "Russia", label: "Russia"}
  ]
  const optionRole = [
    {value: "Admin", label: "Admin"},
    {value: "Intern", label: "Intern"},
    {value: "Full-time Employee", label: "Full-time Employee"}
  ]

  const optionState = [
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Andhra Pradesh", label: "Andhra Pradesh"},
    {value: "Kerala", label: "Kerala"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"},
    {value: "Gujarat", label: "Gujarat"}
  ]
  const optionCity = [
    {value: "Pune", label: "Pune"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Nagpur", label: "Nagpur"},
    {value: "Nashik", label: "Nashik"},
    {value: "Solapur", label: "Solapur"}
  ]
  const optionCurrency = [
    {value: "Indian Rupee", label: "Indian Rupee"},
    {value: "Us Dollar", label: "Us Dollar"},
    {value: "Euro", label: "Euro"},
    {value: "Armerian Dram", label: "Armerian Dram"},
    {value: "Canadian Dollar", label: "Canadian Dollar"}
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
    State:  [{value: "state", label: "Maharashtra"}],
    Country: [{value: "country", label: "India"}],
    Role: [{value: "role", label: "Intern"}]
  }
  const [values, setValues] = useState(initialvalues)
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
    console.log(values)
    //prop.editAction(values)
    setValues(initialvalues)
  }
  const selectedUser = {
    avatar: "",
    company: "Yotz PVT LTD",
    contact: "(479) 232-9151",
    country: "El Salvador",
    currentPlan: "enterprise",
    email: "gslixby0@abc.net.au",
    fullName: "Coense Solution",
    id: 1,
    role: "editor",
    status: "inactive",
    username: "gslixby0"
      }
  //console.log(selectedUser)
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)
  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Update user image on mount or change
  useEffect(() => {
    // if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
    //   setUserData(selectedUser)
    //   if (selectedUser.avatar.length) {
    //     return setImg(selectedUser.avatar)
    //   } else {
    //     return setImg(null)
    //   }
    // }
  })

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  return (
 
<Card className='mx-1'>
<CardHeader>
  <CardTitle tag='h1'>Add Warehouse</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='warehouseName'>Name</Label>
          <Input type='text' id='warehouseName' placeholder='Name' defaultValue={userData && userData.warehouseName} />
        </FormGroup>
      </Col>
      {/* <Col md='6' sm='12'>
        <FormGroup>
          <FormGroup className='mx-auto mt-1 pt-1 d-block'>
              <CustomInput
                className='mx-auto'
                inline
                type='checkbox'
                name='terms'
                id='emailTerms'
                value='Is Bidoyas Warehouse'
                label='Is Bidoyas Warehouse'
              />
               </FormGroup>
        </FormGroup>
      </Col> */}
<Col md='12' sm='12'>
      <Row>
        <Col sm='12'>
          <h4 className='mb-1 mt-2'>
            <MapPin size={20} className='mr-50' />
            <span className='align-middle'>Address</span>
          </h4>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='address-1'>Address Line 1</Label>
            <Input
              id='address-1'
              name='address1'
              placeholder='street 1'
              innerRef={register({ required: true })}
              className={classnames({
                'is-invalid': errors.address1
              })}
            />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='address-2'>Address Line 2</Label>
            <Input placeholder='street 1' id='address-2' name='address-2' />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='pincode'>PinCode</Label>
            <Input
              id='pincode'
              name='pincode'
              placeholder='597424'
              innerRef={register({ required: true })}
              invalid={errors.pincode && true}
            />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='Country'>Country</Label>
            <Select
              id='Country'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCountry}
              theme={selectThemeColors}
              value={values.Country[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             Country : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='State'>State</Label>
            <Select
              id='State'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionState}
              theme={selectThemeColors}
              value={values.State[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             State : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='City'>City</Label>
            <Select
              id='City'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCity}
              theme={selectThemeColors}
              value={values.City[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             City : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
      </Row>
      </Col> 
      <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
          Save Changes
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          Reset
        </Button.Ripple>
      </Col>
    </Row>
  </Form>
</Col>
</Row>
</CardBody>
</Card>
  )
}
export default AddWarehouse
