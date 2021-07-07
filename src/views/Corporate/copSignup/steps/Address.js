import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
const Address = ({ stepper, type }) => {
  const City = [
    { value: 'Airoli', label: 'Airoli' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Navi Mumbai', label: 'Navi Mumbai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Surat', label: 'Surat' }
  ]

  const State = [
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Utter Pradesh', label: 'Utter Pradesh' },
    { value: 'Bihar', label: 'Bihar' }
  ]

  const Country = [
    { value: 'India', label: 'India' },
    { value: 'France', label: 'France' },
    { value: 'Spen', label: 'Spen' },
    { value: 'Itali', label: 'Itali' },
    { value: 'Japan', label: 'Japan' }
  ]
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`address-${type}`}>
              Address
            </Label>
            <Input
              type='text'
              id={`address-${type}`}
              name={`address-${type}`}
              placeholder='98  Borough bridge Road, Birmingham'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`City`}>
              City
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`City`}
              options={City}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`language-${type}`}>
              State
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language-${type}`}
              options={State}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`language-${type}`}>
              Country
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language-${type}`}
              options={Country}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`pincode-${type}`}>
              Pincode
            </Label>
            <Input type='text' name={`pincode-${type}`} id={`pincode-${type}`} placeholder='658921' />
          </FormGroup>
         
        </Row>
        <Row >
            <Col md='5'>
              <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                <span className='align-middle d-sm-inline-block d-none'>Previous</span>
              </Button.Ripple>  
            </Col>
            <Col className='ml-2' md='5'>
              
                <Button.Ripple color='success' className='btn-submit m-0' onClick={() => alert('submitted')}>
                  Submit
                </Button.Ripple>
              
            </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default Address
