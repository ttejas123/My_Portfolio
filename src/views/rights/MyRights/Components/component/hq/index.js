import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Headquarter = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'><h4><b>Headquarter</b></h4></CardTitle>
            <hr />
            <div className="d-flex justify-content-between">
              
              <h5 className=''>Mumbai</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-3'>Kandivali East, Maharashtra,</div>
              
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-3'>400101, India,</div>
              
            </div>
              
            <div className="d-flex justify-content-between">
              <div className='font-small-3'>9876543244</div>
              
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-3'>bidoya@gmail.com</div>
             
            </div>   
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Headquarter