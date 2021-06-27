import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import './style.css'
import ContactNumber from '../../components/register/ContactNumber'
import CountrySelect from '../../components/register/CountrySelect'
import StateSelect from '../../components/register/StateSelect'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
import { dummyText } from '../../utility/missl'


const RegisterV2 = () => {
  const [skin, setSkin] = useSkin()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const initialvalues = {
    country: { value: "+91", label: "Search Country" },
    state: { value: "Maharashtra", label: "Search State" }
  }
  const [values, setValues] = useState(initialvalues)

  const optionCode = [
    { value: "91", label: "+91" },
    { value: "+21", label: "+21" },
    { value: "+32", label: "+32" },
    { value: "+56", label: "+56" },
    { value: "+67", label: "+67" }
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
        country: val
      }
    )

  }

  const handleStateFilter = val => {
    console.log("handleCountryFilter echnage of country", val)
    setValues(
      {
        ...values,
        state: val
      }
    )

  }

  const onChangeCountry = (data) => {
    console.log("thc echnage of country", data)
    setValues(
      {
        ...values,
        country: data
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

    <div style={{
          marginTop:-25,
          backgroundColor:'#f8f1e8'
        }} >

      <Row className='auth-inner m-0'>

        {/* <div className='misc-inner p-2 p-sm-3'>
      <div className='w-100 text-center'>
        <h2 className='mb-1'>Bid Bulk Buy</h2>
        </div></div> */}
      {/* //  d-none d-lg-flex  */}
        <Col className='pt-5' lg='12' sm='12'>
          <Row>
            <Col md='3' sm='12'>
               
            </Col>
            <Col md='5' sm='12' className='text-center'>
               <img className="img-fluid" src={logo} />
            </Col>
            <Col md='4' sm='12'>
               
            </Col>
          </Row>
        </Col>

        <Col className=' col-pb-1' lg='1' sm='12'>
         
        </Col>
        <Col className='p-lg-5 p-2 col-p-1' lg='4' sm='12'>
          {/* <div className='w-100 d-lg-flex  px-5'>
            <div className='text-center'>
              <h1 className='mt-5'>Pricing Plans</h1>

            </div>
          </div> */}
          <CardText>
            <h3 className=' d-none d-lg-block font-weight-normal mt-lg-2'>
             {dummyText}
            </h3>
          </CardText>
          <CardText>
            <h3 className=' d-none d-lg-block mt-lg-3 font-weight-bolder strong'>
             Sign up today to get must-read HR stories from. Lattice and other trusted sources as well as profiles and insights from members of Resources for Humans delivered directly to your inbox every week.
            </h3>
          </CardText>

        </Col>
        <Col className='d-flex align-items-center  p-lg-5' lg='6' sm='12'>
          {/* <Row>
        <Col> */}
          <Col  sm='8' md='6' lg='12'>
            <Card className='mb-0'>
              <CardBody>
                <Row className='mb-1'>
                  <Col md="1">
                    
                  </Col>
                  <Col md="10">
                    <div className="text-center RbidoyaCreate">
                      <h3>Create Your Account</h3>
                    </div>
                  </Col>
                  <Col md="1">
                    
                  </Col>
                </Row>

                <Row>
                  <Col md="1">
                    
                  </Col>
                  <Col md="10">
                    <div className="text-center bidoyaCreate ">
                      <p>Please fill the following fields with appropriate information to register a new MartPlace account.</p>
                    </div>
                  </Col>
                  <Col md="1">
                    
                  </Col>
                </Row>

                <div className='border'></div>


                <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>

                  <FormGroup>
                    <Label className='form-label TakeFont m-0 d-flex' for='register-registeras'>
                      <div ><h5 className="text-danger" style={{margin: "0px", marginRight: "5px"}}>* </h5></div><b>Register As</b>
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
                    <Label className='form-label TakeFont d-flex' for='register-email'>
                      <div ><h5 className="text-danger" style={{marginRight: "5px"}}>* </h5></div><b> Email</b>
              </Label>
                    <Input type='email' id='register-email' placeholder='john@example.com' />
                  </FormGroup>
                  <FormGroup>
                    <Label className='form-label TakeFont d-flex' for='register-password'>
                      <div ><h5 className="text-danger" style={{marginRight: "5px"}}>* </h5></div><b>Password</b>
              </Label>
                    <InputPasswordToggle className='input-group-merge' id='register-password' />
                  </FormGroup>

                  <FormGroup>
                    <Label className='form-label TakeFont d-flex' for='register-fusername'>
                      <div ><h5 className="text-danger" style={{marginRight: "5px"}}>* </h5></div><b>First Name</b>
              </Label>
                    <Input type='text' id='register-fusername' autoFocus />
                  </FormGroup>
                  {/* FirstName, Last Name,
             Mobile Number,
             Landline, 
             Designation, 
             Country,State,
              City, Pincode,
              Address,PanCard,Pancard type,Profile Image,GST Number */}

                  <FormGroup>
                    <Label className='form-label TakeFont d-flex' for='register-lusername'>
                       <div ><h5 className="text-danger" style={{marginRight: "5px"}}>* </h5></div><b>Last Name</b>
              </Label>
                    <Input type='text' id='register-lusername' autoFocus />
                  </FormGroup>
                  <FormGroup>
                    <ContactNumber  lable={"Mobile Number"} />
                  </FormGroup>
                  <FormGroup>
                    <ContactNumber lable={"Land Line"} />
                  </FormGroup>
                  <FormGroup>
                    <Label className='form-label TakeFont d-flex' for='register-address'>
                       <div ><h5 className="text-danger" style={{marginRight: "5px"}}>* </h5></div><b>Address</b>
              </Label>
                    <Input type='textarea' id='register-address' autoFocus />
                  </FormGroup>
                  <FormGroup>
                    <Label className='form-label TakeFont d-flex' for='register-state'>
                       <div ><h5 className="text-danger" style={{marginRight: "5px"}}>* </h5></div><b>Country</b>
              </Label>
                    <CountrySelect style={{ width: '45%' }} value={values.country} optionCode={countryCode} onChange1={handleCountryFilter} />

                  </FormGroup>
                  <FormGroup>
                    <Label className='form-label TakeFont' for='register-state'>
                      <b>State</b>
              </Label>
                    <StateSelect style={{ width: '45%' }} value={values.state} optionCode={stateCode} onChange1={handleStateFilter} />

                  </FormGroup>
                  <FormGroup>
                    <Label className='form-label TakeFont' for='register-pin'>
                      <b>PIN Code</b>
              </Label>
                    <Input type='text' id='register-pin' autoFocus />
                  </FormGroup>
                  <FormGroup>
                    <Label className='form-label TakeFont' for='register-gst'>
                      <b>GST Number</b>
              </Label>
                    <Input type='text' id='register-gst' autoFocus />
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

        </Col>
        {/* </Row>
      </Col> */}
      <Col md="3" lg='12'>
      </Col>
      </Row>
    </div>
  )
}

export default RegisterV2
