import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Select from 'react-select'

const TrackDispatch = ({ filledColor, dir }) => {
  const [previewArr, setPreviewArr] = useState([])
    const [values, setValues] = useState('')
    const [issueRaised, setIssueRaised] = useState(false)
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Track Dispatch</CardTitle>
      </CardHeader>
      <CardBody>
      
      </CardBody>
    </Card>
  )
}

export default TrackDispatch
