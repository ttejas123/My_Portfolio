import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'

const ProofOfDelivery = () => {
  const [previewArr, setPreviewArr] = useState([])
    const [values, setValues] = useState('')
    const [issueRaised, setIssueRaised] = useState(false)

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true
  })

  const optionsIssues = [
      {value : 'Yes', label : 'Yes'},
      {value : 'No', label : 'No'}
  ]

  const optionsRequestFor = [
    {value : 'Refund', label : 'Refund'},
    {value : 'Return', label : 'Return'},
    {value : 'Bidoya Executive Help', label : 'Bidoya Executive Help'}
]

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Upload Proof Of Payment</CardTitle>
      </CardHeader>
      <CardBody>
      <Row>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
          <Col md='4' sm='12'>
        <FormGroup>
          <Label for='readonlyInput'>Product Name</Label>
          <Input type='text' id='readonlyInput' placeholder='Product Name' readOnly value={'Nike Basketball Shoes'}/>
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='readonlyInput'>MRP</Label>
          <Input type='text' id='readonlyInput' placeholder='mrp' readOnly value={'1999'}/>
        </FormGroup>
      </Col>
      <Col lg='12' sm='12' md='12'>
      <DragDrop uppy={uppy} />
        {renderPreview()}
      </Col>
      <Col md='4' sm='12' className='mt-2'>
      <FormGroup>
              <Label for='issues'>Do you have any Issue with the order</Label>
            <Select
              id='issues'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionsIssues}
              theme={selectThemeColors}
              value={values.issues}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             issues : data
                                          } 
                                  )
                                  { data.value === 'Yes' ? setIssueRaised(true) : setIssueRaised(false) }
                                }
                        }
            />
            </FormGroup> 
      </Col>
      { issueRaised ? (
          <>
           <Col md='4' sm='12' className='mt-2'>
           <FormGroup>
                   <Label for='requestFor'>Request For</Label>
                 <Select
                   id='requestFor'
                   className='react-select'
                   classNamePrefix='select'
                   isClearable={false}
                   options={optionsRequestFor}
                   theme={selectThemeColors}
                   value={values.requestFor}
                   onChange={data => {
                                      setValues(
                                               {
                                                  ...values,
                                                  requestFor : data
                                               } 
                                       )
                                     }
                             }
                 />
                 </FormGroup> 
           </Col>
            <Col md='4' sm='12' className='mt-2'>
            <FormGroup>
              <Label for='reasont'>What Issue do u have</Label>
              <Input type='text' id='reason' placeholder='Package broken'/>
            </FormGroup>
          </Col>
          </>
      ) : null}
       <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Submit
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                Reset
              </Button.Ripple>
            </Col>
      </Row>
      </Form>
      </Col>
      </Row>
      </CardBody>
    </Card>
  )
}

export default ProofOfDelivery
