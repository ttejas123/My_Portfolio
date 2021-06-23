import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'

import ContactNumber from '../../components/register/ContactNumber'
import CountrySelect from '../../components/register/CountrySelect'
import StateSelect from '../../components/register/StateSelect'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
import { dummyText } from '../../utility/missl'


const Login = () => {
    const [skin, setSkin] = useSkin()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const initialvalues = {
        country: { value: "+91", label: "Search Country" },
        state: { value: "Maharashtra", label: "Search State" }
    }
    const [values, setValues] = useState(initialvalues)

    const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default
    return (

        <div className='auth-wrapper auth-v2'>

            <Row className='auth-inner m-0'>
                <Col className='p-5' lg='6' sm='12'>
                    <CardText>
                        <h3 className='font-weight-normal'>
                            {dummyText}
                        </h3>
                    </CardText>
                    <CardText>
                        <h3 className='font-weight-bolder'>
                            {dummyText}
                        </h3>
                    </CardText>

                </Col>
                <Col className='d-flex px-2 p-lg-5' lg='6' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <Card className='mb-0'>
                            <CardBody>
                                <CardTitle tag='h4' className='mb-1'>
                                    Welcome to Bidoya
              </CardTitle>
                                <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>


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
            </Row>
        </div>


    )
}

export default Login
