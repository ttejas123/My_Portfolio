// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import Left from './left'
import Header from './header'
import InfoCard from './dashboardComponent/index'

import a1 from '@src/assets/images/avatars/1-small.png'
// ** Third Party Components
import '@styles/react/pages/page-profile.scss'

import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardImg,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Fragment>
      <div >

      </div>
          <BreadCrumbs breadCrumbTitle='Dashboard' breadCrumbParent='Home' breadCrumbChild='Dashboard' breadCrumbActive='Profile' />
      <div >
      <Header />
        <Row>
{ /*<<<<<<< HEAD
            <Col md='3' xs='12'>
                <Card>
                  <CardBody >
=======*/ }
            <Col md='12' xs='12'>
                 

                    <Left />
                  
            </Col>
            <Col md='9' xs='12'>
              {/* <Row> */}
              <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/>
              {/* <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/> */}

             {/* <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/>
             <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/>
             <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/> */}
              {/* </Row> */}
             
              </Col>
            
           
        </Row>
      </div>
    </Fragment>
  )
}

export default Details
