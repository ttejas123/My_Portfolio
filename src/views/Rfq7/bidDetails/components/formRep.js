import { useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus } from 'react-feather'

const RepeatingForm = () => {
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  return (
    <>
              <h4 className='card-title'>Add Multiple Shipping Address</h4>
     
        <Repeater count={count}>
          {i => (
            <form key={i}>
              <Row className=' align-items-center'>
                <Col md={8}>
                  <FormGroup>
                    <Label for={`item-name-${i}`}>Add New Shipping Address</Label>
                    <Input type='textarea' row='3' id={`item-name-${i}`} placeholder='Add New Address' />
                  </FormGroup>
                </Col>
               
                <Col md={2}>
                  <Button.Ripple color='danger' className='d-flex' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </form>
          )}
        </Repeater>
        <div className=' d-flex justify-content-between '>
          <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
            <Plus size={14} />
            <span className='align-middle ml-25'>Add New</span>
          </Button.Ripple>
          <Button.Ripple className='btn-icon' color='success'>
            
            <span className='align-middle ml-25'>Submit</span>
          </Button.Ripple>
        </div>
    </>
  )
}

export default RepeatingForm
