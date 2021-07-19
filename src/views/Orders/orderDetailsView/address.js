import Chart from 'react-apexcharts'
import { Card, CardTitle, CardHeader, CardBody, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const ShippingAddress = (props) => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardHeader className='p-0'>
            <CardTitle tag='h4'>Shipping Address</CardTitle>
            <div color='' className='bg-transparent border-0' >
          <Link>
              <Button>
                View All
              </Button>
          </Link>
        </div>
        </CardHeader>
            <hr />
            <ul>
            <li className="">
              <span className='font-small-2 '>{props.Address.shopName} <br/> 
              {props.Address.shopNumber}<br/> {props.Address.streetName} <br/>
              {props.Address.city}, {props.Address.state} 
              </span>
              <br/>
              <div>
              <span className='h5'>Phone Number : </span>
              <span>9876543210</span>
              </div>
            </li>
            <li className="">
              <span className='font-small-2 '>{props.Address.shopName} <br/> 
              {props.Address.shopNumber}<br/> {props.Address.streetName} <br/>
              {props.Address.city}, {props.Address.state} 
              </span>
              <br/>
              <div>
              <span className='h5'>Phone Number : </span>
              <span>9876543210</span>
              </div>
            </li>
            </ul>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ShippingAddress