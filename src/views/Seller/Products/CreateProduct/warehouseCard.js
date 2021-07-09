import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const WarehouseAddressCard = (props) => {
  return (
    <Card className=''>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle tag='h4'>{`Warehouse # ${props.Address.title}`}</CardTitle>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Name: </div>
              <h5 className='mb-1'> {props.Address.shopName}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Street Name : </div>
              <h5 className='mb-1'> {props.Address.streetName}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>City : </div>
              <h5 className='mb-1'> {props.Address.city}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>State :  </div>
               <h5 className='mb-1'> {props.Address.state}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Country : </div>
              <h5 className='mb-1'> {props.Address.country}</h5>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default WarehouseAddressCard