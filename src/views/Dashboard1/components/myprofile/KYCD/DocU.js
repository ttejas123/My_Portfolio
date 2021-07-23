import { useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus } from 'react-feather'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'
import { DragDrop } from '@uppy/react'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import { selectThemeColors } from '@utils'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import DragDropComponent from '@uppy/react/src/DragDrop'
import DragnDropComponent from './DND'

const AddImages = () => {

    const optionDocumentName = [
        {value: "Aadhar Card", label: "Aadhar Card"},
        {value: "Pan Card", label: "Pan Card"},
        {value: "Driving License", label: "Driving License"}
          ]
  const [values, setValues] = useState('')
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

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

  const i = 1
  return (
    <Card className=''>
      <CardHeader>
        <h4 className='card-title'>Upload Images</h4>
      </CardHeader>

      <CardBody>
        <Repeater count={count}>
          {i => (
            <Form key={i}>
              <Row className='justify-content-between align-items-center'>
                <Col md={6}>
                  <FormGroup>
                  <Label className='mr-1 mt-1' for='search-input'>
                Document Name
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionDocumentName}
                value={values.documentName}
                onChange={data => {
                  setValues(
                           {
                              ...values,
                              documentName : data
                           } 
                   )
                 }
         }
              />
              </div>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`additionalInformation-${i}`}>Additional Information</Label>
                    <Input type='number' id={`additionalInformation-${i}`} placeholder='Some additionalInformation' />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                  <DragnDropComponent/>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <Button.Ripple color='danger' className='text-nowrap px-1 justify-content-end' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
          )}
        </Repeater>
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add new</span>
        </Button.Ripple>
      </CardBody>
    </Card>
  )
}

export default AddImages
