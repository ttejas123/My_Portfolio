import { useState, Fragment } from 'react'
import Avatar from '@components/avatar'
import Select from 'react-select'
import { ArrowLeft, ArrowRight, Edit, Trash2 } from 'react-feather'
import { selectThemeColors } from '@utils'
import { Label, FormGroup, Row, Col, Form, Input, Button, Media } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'
const GeneralInfo = ({ stepper, type }) => {
  const [img, setImg] = useState(null)
  const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
  ]
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
  const stateOptions = [
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Andhra Pradesh", label: "Andhra Pradesh"},
    {value: "Kerala", label: "Kerala"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"},
    {value: "Gujarat", label: "Gujarat"}
  ]
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  const cityOptions = [
    {value: "Pune", label: "Pune"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Nagpur", label: "Nagpur"},
    {value: "Nashik", label: "Nashik"},
    {value: "Solapur", label: "Solapur"}
  ]

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

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
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Personal Info</h5>
        <small>Enter Your Personal Info.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`first-name-${type}`}>
              First Name
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='John' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`last-name-${type}`}>
              Last Name
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='Doe' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`mobile-number-${type}`}>
              Mobile Number
            </Label>
            <Input type='text' name='mobile-number' id={`mobile-number-${type}`} placeholder='Doe' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`landline-${type}`}>
              LandLine
            </Label>
            <Input type='text' name='landline' id={`landline-${type}`} placeholder='Doe' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`designation-${type}`}>
              Designation
            </Label>
            <Input type='text' name='designation' id={`designation-${type}`} placeholder='Doe' />
          </FormGroup>
          {/* <FormGroup tag={Col} md='4'>
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
            <Input type='text' name='pincode' id={`pincode-${type}`} placeholder='Doe' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`address-${type}`}>
              Address
            </Label>
            <Input type='text' name='address' id={`address-${type}`} placeholder='Doe' />
          </FormGroup> */}
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`panCard-${type}`}>
              PanCard
            </Label>
            <Input type='text' name='panCard' id={`panCard-${type}`} placeholder='Doe' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`panCard-type-${type}`}>
              PanCard Type
            </Label>
            <Input type='text' name='panCard-type' id={`panCard-type-${type}`} placeholder='Doe' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`gst-number-${type}`}>
              GST Number
            </Label>
            <Input type='text' name='gst-number' id={`gst-number-${type}`} placeholder='Doe' />
          </FormGroup>
          <Col md='4' sm='12'>
  <Media className='mb-2'>
    {renderUserAvatar()}
    <Media className='mt-50' body>
      <h4> Logo </h4>
      <div className='d-flex flex-wrap mt-1 px-0'>
        <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
          <span className='d-none d-sm-block'>Change</span>
          <span className='d-block d-sm-none'>
            <Edit size={14} />
          </span>
          <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          <span className='d-none d-sm-block'>Remove</span>
          <span className='d-block d-sm-none'>
            <Trash2 size={14} />
          </span>
        </Button.Ripple>
      </div>
    </Media>
  </Media>
</Col>
          </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default GeneralInfo
