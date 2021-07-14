// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, User, MapPin, Book, AtSign, Compass, StopCircle, Edit2, Edit3, FileText, Home, Award, Layers, Upload, Plus, Target, Percent, ArrowDownCircle, Box, ShoppingCart, Package, DollarSign, Truck, UserPlus, Star, Eye, Tool, Map } from 'react-feather'
import AppCollapse from '@components/app-collapse'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

import person from '@src/assets/images/avatars/raviKukreja.jpg'
import a1 from '@src/assets/images/avatars/1-small.png'
// ** Third Party Components
import '@styles/react/pages/page-profile.scss'

import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  Badge,
  TabContent,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardImg,
  Navbar,
  TabPane,
  Collapse,
  Nav, ListGroup, ListGroupItem,
  NavItem,
  UncontrolledAlert,
  NavLink
} from 'reactstrap'


// ** Custom Components
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)

  
const Bid = [
  {
    title: (<><Compass  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Bid Coin </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '1' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('1')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>List and Audit</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '2' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('2')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Request Form</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '3' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('3')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Rules</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  }
]

const bidCash = [
  {
    title: (<><StopCircle  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Bid Cash </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '4' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('4')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>List and Audit</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '5' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('5')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Request Form</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '6' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('6')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Rules</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
          
                    </ListGroup>
    )
  }
]


  return (
    <Fragment className="addPadding m-0">
      <div style={{marginTop:"-1rem"}} className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
        <BreadCrumbs  breadCrumbTitle='Rewards' breadCrumbParent='Rewards' breadCrumbChild='Dashboard' />
      </div>
      <div  >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
        <Row>
         
          <Col md='2' xs='12'> 
                <Card >
                  <CardBody className='p-1' > 
                    <h4>Rewards</h4>

                    <div style={activeTab >= '1' && activeTab <= '3' ? {borderLeft: '1px solid red'} : {paddingLeft: '0px'}} className="border-bottom"><AppCollapse data={Bid} /></div>
                    <div style={activeTab >= '4' && activeTab <= '6' ? {borderLeft: '1px solid red'} : {paddingLeft: '0px'}} className="border-bottom"><AppCollapse data={bidCash} /></div>
                  
                  </CardBody>
                </Card>  
                
            </Col>

            <Col md='10' xs='12'>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          List And Audit
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='2'>
                    <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Request Form
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='3'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Rules
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='4'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          List And Audit
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='5'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                           Request Form
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='6'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Rules
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                </TabContent>
            </Col>

          </Row>
        </div>
           
      </div>
      
    </Fragment>
  )
}

export default Details