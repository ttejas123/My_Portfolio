import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Label, FormGroup, Row, Col, Form, Input, Button, Card, CardBody, Table, CardHeader, CardTitle } from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'
import { Fragment, useState } from 'react'
import XLSX from 'xlsx'
import Uppy from '@uppy/core'
import { X, MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, Plus, ArrowLeft, ArrowRight } from 'react-feather'
import { DragDrop } from '@uppy/react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import ExtensionsHeader from '@components/extensions-header'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const PersonalInfo = ({ stepper, type }) => {
    const initialvalues = {
    id:0,
    logo:'',
    Name:''
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  
  const [Brand, setBrand] = useState(null)

    const uppy1 = new Uppy({
                  meta: { type: 'avatar' },
                  restrictions: { maxNumberOfFiles: 1 },
                  autoProceed: true
                })

    uppy1.use(thumbnailGenerator)

    uppy1.on('thumbnail:generated', (file, preview) => {
              console.log(file)
              setBrand(preview)
    })
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
      logo : Brand
    })
    // setValues({
    //   ...values,
    //   [name] : values
    // })
    // //prop.editAction(values)
    
    setValues(initialvalues)
    setBrand(null)
    alert("Data successfully inserted")
  }
  const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
  ]

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Personal Info</h5>
        <small>Enter Your Personal Info.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='6'>
          
                    
                        <DragDrop uppy={uppy1}  />
                        { Brand !== null ? <img className='rounded ml-1' src={Brand} alt='avatar' /> : null}
                      
                
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

export default PersonalInfo