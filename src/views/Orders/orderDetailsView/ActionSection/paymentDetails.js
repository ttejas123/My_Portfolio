import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button, Badge } from 'reactstrap'
import Select from 'react-select'

const PaymentDetails = ({ filledColor, dir }) => {
  const [previewArr, setPreviewArr] = useState([])
    const [values, setValues] = useState('')
    const [issueRaised, setIssueRaised] = useState(false)
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Payment Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
        <Col xs='0' sm='0' lg='3' md='3'>
        </Col>
      <Col xs='12' lg='6' md='6' sm='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius : '5px'}} className='py-1'>
      
            <div className="d-flex justify-content-between">
              <div className='h5'> 
              <Badge color='light-success'>Pending</Badge> </div>
              <h5 className='mb-1'>01/02/2021</h5> 
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Current Status : </div>
              <h5 className='mb-1'>Pending From Seller</h5> 
            </div>
          </Col>
          </Row>
      </CardBody>
    </Card>
  )
}

export default PaymentDetails
