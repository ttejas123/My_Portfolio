import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
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
      
      </CardBody>
    </Card>
  )
}

export default PaymentDetails
