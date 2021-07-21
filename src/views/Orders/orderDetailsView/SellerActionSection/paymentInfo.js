import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button, Badge } from 'reactstrap'
import Select from 'react-select'

const SellerPaymentDetails = ({ filledColor, dir }) => {
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
      <Col xs='12' lg='12' md='12' sm='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius : '5px'}} className='py-1'>
      
            <div className="d-flex justify-content-between">
              <div className='h5'> 
              Order Id : ORD0001
            </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Current Status : </div>
              <h5 className='mb-1'>Pending From Buyer</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Number of Items : </div>
              <h5 className='mb-1'>3</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Shipping Charges : </div>
              <h5 className='mb-1'>100</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Total Amount : </div>
              <h5 className='mb-1'>10000</h5> 
            </div>
          </Col>
          </Row>
      </CardBody>
    </Card>
  )
}

export default SellerPaymentDetails
