import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const BillingAddress = (props) => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle tag='h4'>Billing Address</CardTitle>
            <hr />
            <div className="">
              <span className='font-small-2 '>{props.Address.shopName} <br/> 
              {props.Address.shopNumber}<br/> {props.Address.streetName} <br/>
              {props.Address.city}, {props.Address.state} 
              </span>
              <br/>
              <div>
              <span className='h5'>Phone Number : </span>
              <span>9876543210</span>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BillingAddress