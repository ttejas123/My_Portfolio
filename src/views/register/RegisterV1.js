import { Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'

import ContactNumber  from '../../components/register/ContactNumber'
import CountrySelect  from '../../components/register/CountrySelect'
import StateSelect  from '../../components/register/StateSelect'


const RegisterV2 = () => {
  const [skin, setSkin] = useSkin()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const initialvalues = {
    country:  {value: "+91", label: "Search Country"},
    state:  {value: "Maharashtra", label: "Search State"}
  }
  const [values, setValues] = useState(initialvalues) 

  const optionCode = [
    {value: "91", label: "+91"},
    {value: "+21", label: "+21"},
    {value: "+32", label: "+32"},
    {value: "+56", label: "+56"},
    {value: "+67", label: "+67"}
]

const countryCode = [
  { value: 'USA', label: 'USA' },
  { value: 'India', label: 'India' },
  { value: 'China', label: 'China' }

]
const stateCode = [
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Kerala', label: 'Kerala' },
  { value: 'Kashmir', label: 'Kashmir' }

]

const handleCountryFilter = val => {
  console.log("handleCountryFilter echnage of country", val)
  setValues(
    {
        ...values,
        country : val
    } 
)

}

const handleStateFilter = val => {
  console.log("handleCountryFilter echnage of country", val)
  setValues(
    {
        ...values,
        state : val
    } 
)

}

const  onChangeCountry = (data) => {
  console.log("thc echnage of country", data)
      setValues(
            {
                ...values,
                country : data
            } 
    )
}


  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const RememberMe = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        
        <Col className='d-none d-lg-flex align-items-center p-5' lg='6' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
          </div>
        </Col>
        <Col className='d-flex align-items-center px-2 p-lg-5' lg='6' sm='12'>
        <Row>
          <Col>
          <Card className='mb-0'>
          <CardBody>
              <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>
             
              <FormGroup>
                <Label className='form-label' for='register-registeras'>
                  Register As
                </Label>
                  <div className='demo-inline-spacing'>
                    <CustomInput
                      type='checkbox'
                      className='custom-control-Primary'
                      id='Primary'
                      label='Seller'
                      
                      inline
                    />
                    <CustomInput
                      type='checkbox'
                      className='custom-control-Primary'
                      id='secondary'
                      label='Buyer'
                      
                      inline
                    /></div>
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Input type='email' id='register-email' placeholder='john@example.com' />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle className='input-group-merge' id='register-password' />
              </FormGroup>

              <FormGroup>
                <Label className='form-label' for='register-fusername'>
                  First Name
                </Label>
                <Input type='text' id='register-fusername'  autoFocus />
              </FormGroup>
              {/* FirstName, Last Name,
               Mobile Number,
               Landline, 
               Designation, 
               Country,State,
                City, Pincode,
                Address,PanCard,Pancard type,Profile Image,GST Number */}

              <FormGroup>
                <Label className='form-label' for='register-lusername'>
                  Last Name
                </Label>
                <Input type='text' id='register-lusername'  autoFocus />
              </FormGroup>
                <FormGroup>
                  <ContactNumber lable= {"Mobile Number"} />
                </FormGroup>
                <FormGroup>
                  <ContactNumber lable= {"Land Line"} />
                </FormGroup>
                <FormGroup>
                  <Label className='form-label' for='register-address'>
                    Address
                </Label>
                  <Input type='textarea' id='register-address' autoFocus />
                </FormGroup>
                <FormGroup>
                <Label className='form-label' for='register-state'>
                  Country
                </Label>
                  <CountrySelect style = {{width: '45%'}} value = {values.country} optionCode = {countryCode} onChange1 = {handleCountryFilter}/>

                </FormGroup>
                <FormGroup>
                <Label className='form-label' for='register-state'>
                  State
                </Label>
                  <StateSelect style = {{width: '45%'}} value = {values.state} optionCode = {stateCode} onChange1 = {handleStateFilter}/>

                </FormGroup>
                <FormGroup>
                <Label className='form-label' for='register-pin'>
                  PIN Code
                </Label>
                <Input type='text' id='register-pin'  autoFocus />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-gst'>
                  GST Number
                </Label>
                <Input type='text' id='register-gst'  autoFocus />
              </FormGroup>

              <FormGroup>
                <CustomInput
                  type='checkbox'
                  className='custom-control-Primary'
                  id='remember-me'
                  label={<RememberMe />}
                />
              </FormGroup>
              <Button.Ripple color='primary' block>
                Sign up
              </Button.Ripple>
            </Form>
          </CardBody>
          </Card>
          </Col>
        </Row>
       
       
        </Col>
      </Row>
    </div>
  )
}

export default RegisterV2
