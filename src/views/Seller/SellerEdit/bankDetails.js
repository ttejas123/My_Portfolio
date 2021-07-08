import { Fragment, useState, useEffect  } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button, CardBody } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import '@styles/react/libs/react-select/_react-select.scss'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import { DragDrop } from '@uppy/react'
const AccountDetails = ({ stepper, type }) => {
  const [img, setImg] = useState(null)
  
  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    console.log(file)
    setImg(preview)
  })
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
        <h5 className='mb-0'>Bank Account Details</h5>
        <small className='text-muted'>Enter Your Bank Account Details.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
              Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`} placeholder='johndoe' />
          </FormGroup>
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
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`account-number-${type}`}>
              Account Number
            </Label>
            <Input type='text' name={`account-number-${type}`} id={`account-number-${type}`} placeholder='34547898745' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`ifsc-${type}`}>
              ISFC Code
            </Label>
            <Input type='text' name={`ifsc-${type}`} id={`ifsc-${type}`} placeholder='BANK0987' />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`micr-${type}`}>
              MICR Code
            </Label>
            <Input type='text' name={`micr-${type}`} id={`micr-${type}`} placeholder='MIC987452' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <CardBody>
        <h4 className='mb-1'>
            {/* <User size={20} className='mr-50' /> */}
            <span className='align-middle'>Upload Cancelled Cheque</span>
          </h4>
          <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
        </CardBody>
        </FormGroup>
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

export default AccountDetails
