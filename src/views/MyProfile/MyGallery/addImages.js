import { useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus } from 'react-feather'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const AddImages = () => {
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
    <Card className='mx-1'>
      <CardHeader>
        <h4 className='card-title'>Upload Images</h4>
      </CardHeader>

      <CardBody>
        {/* <Repeater count={count}>
          {i => ( */}
            <Form key={i}>
              <Row className='justify-content-between align-items-center'>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`image-name-${i}`}>Image Name</Label>
                    <Input type='text' id={`image-name-${i}`} placeholder='Profile Picture' />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`description-${i}`}>Description</Label>
                    <Input type='number' id={`description-${i}`} placeholder='Some description' />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                  <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                  </FormGroup>
                </Col>
                {/* <Col md={2}>
                  <Button.Ripple color='danger' className='text-nowrap px-1 justify-content-end' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                </Col> */}
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
          {/* )}
        </Repeater> */}
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
          {/* <Plus size={14} /> */}
          <span className='align-middle ml-25'>Submit</span>
        </Button.Ripple>
      </CardBody>
    </Card>
  )
}

export default AddImages
