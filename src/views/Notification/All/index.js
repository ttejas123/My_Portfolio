import { useEffect, Fragment } from 'react'

import {
    Row,
    Card, CardBody,
    Col
  } from 'reactstrap'
  
  import Filters from './Filter'
  import Content from './Content'

  import BreadCrumbs from '@components/breadcrumbs'

import '@styles/react/libs/swiper/swiper.scss'


const Notifications = () => {
    return (
        <Fragment >
        <div style={{marginTop:"-1rem"}} className="ml-lg-4 mr-lg-4">
        <div className="ml-lg-5" >
        <BreadCrumbs  breadCrumbTitle='Notifications' />
      </div>
          <div className="ml-lg-4 mr-lg-4" >
            <Row>
                <Col md='3' xs='12'>
                    <Card>
                       <CardBody>
                        <Filters />
                      </CardBody>
                    </Card>
                </Col>
                
                <Col md='9' xs='12'>
                    <Card  >
                      <CardBody>
                        <Content />
                      </CardBody>
                      
                    </Card>
                </Col>
            </Row>
          </div>
        </div>
        </Fragment>
      )
}

export default Notifications
