import Chart from 'react-apexcharts'
import { Card, CardTitle, CardHeader, CardBody, Row, Col } from 'reactstrap'

const OrderCustomization = () => {
  return (
    <Card className='Details-card'>
    <CardBody>
      <Row>
        <Col xs='12'>
          <CardHeader className='p-0'>
          <CardTitle tag='h4'>Customizations</CardTitle>
      </CardHeader>
          <hr />
          <ul>
          <li className="">
            <span className='font-small-2 '>
              Added Logo on the product
            </span>
          </li>
          <li className="">
            <span className='font-small-2 '>
              Changed the button Colors on the product
            </span>
          </li>
          </ul>
        </Col>
      </Row>
    </CardBody>
  </Card>
  )
}

export default OrderCustomization