import { useState } from 'react'
import Rating from 'react-rating'
import { Star } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'

const RatingAndReview = ({ filledColor, dir }) => {
  const [previewArr, setPreviewArr] = useState([])
    const [values, setValues] = useState('')
    const [issueRaised, setIssueRaised] = useState(false)
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Rating and Review</CardTitle>
      </CardHeader>
      <CardBody>
      <Row >
          <Col xs='12' lg='5' md='5' sm='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)'}} className='py-1'>
            <CardTitle tag='h4'>{`Product`}</CardTitle>
            <hr />
            <Rating
              emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
              fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
              onChange={rate => {}}
              direction={dir}
            />
             <FormGroup className='mt-1'>
                  <Label for='review'>Review</Label>
                  <Input type='textarea' id='review' placeholder='Feedback...' />
                </FormGroup>
               
          </Col>
          <Col lg='2' md='2' sm='0' xs='0'>
          </Col>
          <Col xs='12' lg='5' md='5' sm='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)'}} className='py-1'>
            <CardTitle tag='h4'>{`Seller`}</CardTitle>
            <hr />
            <Rating
              emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
              fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
              onChange={rate => {}}
              direction={dir}
            />
             <FormGroup className='mt-1'>
                  <Label for='review'>Review</Label>
                  <Input type='textarea' id='review' placeholder='Feedback...' />
                </FormGroup>
          </Col>
        </Row>
        <FormGroup className='mt-1'>
                  <Label for='additionalFeedback'>Additional Feedback ( For Bidoya )</Label>
                  <Input type='textarea' id='additionalFeedback' placeholder='Feedback...' />
                </FormGroup>
      </CardBody>
    </Card>
  )
}

export default RatingAndReview
