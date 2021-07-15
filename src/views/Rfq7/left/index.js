import { useEffect, Fragment } from 'react'

import {
  Row,
  Card, CardBody,
  Col
} from 'reactstrap'
const BidsMenu = () => {
    return (
    
        <Fragment >
              <div style={{ marginTop: "-1rem" }} className="ml-lg-4 mr-lg-4">
        <div className="ml-lg-5" >
          <BreadCrumbs breadCrumbTitle='Notifications' />
        </div>
        <div className="ml-lg-4 mr-lg-4" >
          <Row>
            <Col md='3' xs='12'>
              <Card>
                <CardBody>
                 Hi
                </CardBody>
              </Card>
            </Col>

            <Col md='9' xs='12'>
              <Card  >
                <CardBody>
                
                </CardBody>

              </Card>
            </Col>
          </Row>
        </div>
      
      </div>
        </Fragment>
            )
}

export default BidsMenu
