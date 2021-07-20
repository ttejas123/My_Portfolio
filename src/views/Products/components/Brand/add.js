//DropDown of brands else txbox to add new brand, Dealing since , options to upload files(Invoice)
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'

import Select, { components } from 'react-select'
import { DragDrop } from '@uppy/react'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import {
  Facebook,
  Twitter,
  Linkedin,
  GitHub,
  Instagram,
  Dribbble,
  Gitlab,
  File,
  FileText,
  Image,
  Figma,
  Chrome,
  Command,
  Slack,
  Youtube
} from 'react-feather'
import { data } from './data'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import '@styles/react/apps/app-users.scss'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
// ** Custom Components
import Avatar from '@components/avatar'

import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

  const initialvalues = {
    id:0,
    logo:'',
    Name:''
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [show, setShow] = useState(true)
  const [picker, setPicker] = useState(new Date()) 
  const [Brand, setBrand] = useState(null)
  const [Invoice, setInvoice] = useState(null)

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

    const uppy2 = new Uppy({
                  meta: { type: 'avatar' },
                  restrictions: { maxNumberOfFiles: 1 },
                  autoProceed: true
                })

    uppy2.use(thumbnailGenerator)

    uppy2.on('thumbnail:generated', (file, preview) => {
              console.log(file)
              setInvoice(preview)
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

  const OptionComponent = ({ data, ...props }) => {
  const Icon = data.icon

  return (
    <components.Option {...props}>
      <Icon className='mr-50' size={14} />
      {data.label}
    </components.Option>
  )
}

  const iconOptions = [
  {
    label: 'Brands',
    options: [
      {
        value: 'facebook',
        label: 'Facebook',
        icon: Facebook
      },
      {
        value: 'twitter',
        label: 'Twitter',
        icon: Twitter
      },
      {
        value: 'linkedin',
        label: 'Linkedin',
        icon: Linkedin
      },
      {
        value: 'github',
        label: 'Github',
        icon: GitHub
      },
      {
        value: 'instagram',
        label: 'Instagram',
        icon: Instagram
      },
      {
        value: 'dribbble',
        label: 'Dribbble',
        icon: Dribbble
      },
      {
        value: 'gitlab',
        label: 'Gitlab',
        icon: Gitlab
      }
    ]
  },
  {
    label: 'File Types',
    options: [
      { value: 'pdf', label: 'PDF', icon: File },
      { value: 'word', label: 'word', icon: FileText },
      { value: 'image', label: 'Image', icon: Image }
    ]
  }
]

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

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Add Your Brand</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12' style={{zIndex:1000, position:'relative'}} className={show === false ? ('d-none') : ('d-block mb-1')}>
                <Label>Select Your Brand</Label>
                <Select

                  options={iconOptions}
                  className='react-select'
                  classNamePrefix='select'
                  components={{
                    Option: OptionComponent
                  }}
                />
            </Col>

            <Col md='12' sm='12' className={show === false ? ('d-none') : ('d-block mb-1')}>
              <CustomInput type='checkbox' id='check-select' onClick={() => setShow(!show)} label='If Brand Not in DropDown' />
            </Col>

            <Col md='6' sm='12' className={show === false ? ('d-block') : ('d-none')}>
              <FormGroup>
                <Label for='Name'>Enter Brand Name</Label>
                <InputGroup>
                  
                  <Input name="Name" onChange={handleInputeChange} id='Name' type="text" value={values.Name} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                
                    <Label for='default-picker'>Dealing since</Label>
                    <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                 
              </FormGroup>
            </Col>

            <Col md='12' sm='12' className={show === false ? ('d-block pl-0') : ('d-none')}>
                <FormGroup >
                    <Card >
                      <CardHeader >
                        <CardTitle >Add Brand Icon</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DragDrop uppy={uppy1}  />
                        { Brand !== null ? <img className='rounded mt-2 ml-1' src={Brand} alt='avatar' /> : null}
                      </CardBody>
                    </Card>
                </FormGroup>
            </Col>

            <Col md='12' sm='12' className='pl-0'>
                <FormGroup >
                    <Card >
                      <CardHeader >
                        <CardTitle >Add Your Invoice</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DragDrop uppy={uppy2}  />
                        { Invoice !== null ? <img className='rounded mt-2 ml-1' src={Invoice} alt='avatar' /> : null}
                      </CardBody>
                    </Card>
                </FormGroup>
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle(e)
                                                        }
                                                      } color='primary'>
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
export default UserAccountTab
