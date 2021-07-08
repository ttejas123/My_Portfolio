import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import '@styles/react/libs/react-select/_react-select.scss'

const Address = ({ stepper, type }) => {
    const countryOptions = [
        { value: 'UK', label: 'UK' },
        { value: 'USA', label: 'USA' },
        { value: 'Spain', label: 'Spain' },
        { value: 'France', label: 'France' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Australia', label: 'Australia' }
      ]
      const stateOptions = [
        {value: "Maharashtra", label: "Maharashtra"},
        {value: "Andhra Pradesh", label: "Andhra Pradesh"},
        {value: "Kerala", label: "Kerala"},
        {value: "Telangana", label: "Telangana"},
        {value: "Karnataka", label: "Karnataka"},
        {value: "Gujarat", label: "Gujarat"}
      ]
      const cityOptions = [
        {value: "Pune", label: "Pune"},
        {value: "Mumbai", label: "Mumbai"},
        {value: "Nagpur", label: "Nagpur"},
        {value: "Nashik", label: "Nashik"},
        {value: "Solapur", label: "Solapur"}
      ]
    
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
        <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`country-${type}`}>
              Country
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`country-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={countryOptions}
              defaultValue={countryOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`state-${type}`}>
              State
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`state-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={stateOptions}
              defaultValue={stateOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`city-${type}`}>
              City
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`city-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={cityOptions}
              defaultValue={cityOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`pincode-${type}`}>
              Pincode
            </Label>
            <Input type='text' name='pincode' id={`pincode-${type}`} placeholder='543223' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`address-${type}`}>
              Address
            </Label>
            <Input type='text' name='address' id={`address-${type}`} placeholder='ABC' />
          </FormGroup>
        </Row>
        <Row >
        </Row>
          <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Submit</span>
          </Button.Ripple>
        </div>
      </Form>

    </Fragment>
  )
}

export default Address
