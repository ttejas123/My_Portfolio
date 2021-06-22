// ** React Imports
import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

// import RelatedProducts from './RelatedProducts'
import '@styles/react/libs/swiper/swiper.scss'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import Right from './right'
// ** Third Party Components

import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'

const Details = () => {

  return (
    <Fragment>
      <div >

      </div>
      <BreadCrumbs breadCrumbTitle='Search Page' breadCrumbParent='Home' breadCrumbChild='Shop' breadCrumbActive='Search' />
      <div >
        <Row>
            <Col md='3' xs='12'>
                <Card>
                  <CardBody>
                    Left side
                  </CardBody>
                </Card>
            </Col>
            
            <Col md='9' xs='12'>
                <Card>
                  <CardBody>
                    <Right />
                  </CardBody>
                  
                </Card>
            </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Details
