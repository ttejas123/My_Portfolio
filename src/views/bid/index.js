// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, User, Edit, Home, Award, Layers, Plus, Target, Percent, ArrowDownCircle, Box, ShoppingCart, Package, DollarSign, Truck, UserPlus, Star, Eye, Tool, Map } from 'react-feather'
import AppCollapse from '@components/app-collapse'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

import person from '@src/assets/images/avatars/raviKukreja.jpg'
import a1 from '@src/assets/images/avatars/1-small.png'
// ** Third Party Components
import '@styles/react/pages/page-profile.scss'
import BidList from '@src/views/Rfq7/rfqN'
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

import DetailsPage from '@src/views/Dashboard1/components/bidDetail/bidDetails.js'
import List from './components/PI/List'
import RfqN from './components/NewL/rfqN'

import Customi from './components/custom'

import AcceptReject from './components/PI/acceptReject'
import BidsList from './MyBids/myBids'
import RejectedBids from './RejectedBids'
import DeclinedBids from './DeclinedBids'
import NoShow from './NoShow'

// ** Custom Components
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)

  
const Bid = [
  {
    title: (<span style={{fontSize: '14px'}}> <ArrowDownCircle  size={17} style={{marginRight:"1px"}} /> Old Bids </span>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '2'} onClick={() => toggle1('2')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Declined</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '3'} onClick={() => toggle1('3')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Rejected</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '4'} onClick={() => toggle1('4')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>No Show</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  }
]

const PI = [
  {
    title: (<span style={{fontSize: '14px'}}> <Target  size={17} style={{marginRight:"1px"}} /> Purchase Intent </span>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '7'} onClick={() => toggle1('7')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>List</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '8'} onClick={() => toggle1('8')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Accepted/Rejected</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
          
                    </ListGroup>
    )
  }
]

const Customizations = [
  {
    title: (<span style={{fontSize: '14px'}}> <Eye  size={17} style={{marginRight:"1px"}} /> Customizations </span>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0  cursor-pointer' active={activeTab === '10'} onClick={() => toggle1('10')}>
                        <Nav className='mb-0 ml-md-0  cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='d-flex'>
                              <span className='d-none d-md-block'>List</span>
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
        <BreadCrumbs  breadCrumbTitle='Bid' breadCrumbParent='Bid' breadCrumbChild='Dashboard' />
      </div>
      <div  >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
        <Row>
         
          <Col md='2' xs='12'> 
                <Card >
                  <CardBody className='p-1' > 
                    <h4>Bid</h4>
                    
                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '1'} onClick={() => toggle1('1')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <Box  className='d-block' size={17} style={{marginRight:"5px"}} /><span style={{fontSize: '14px'}} className='d-none d-md-block'>My Bids</span>
                              
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <div className='border-bottom'><AppCollapse data={Bid} /></div>

                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '5'} onClick={() => toggle1('5')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <Layers  className='d-block' size={17} style={{marginRight:"5px"}} /><span style={{fontSize: '14px'}} className='d-none d-md-block'>Individual Bid</span>
                              
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>
                   
                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '6'} onClick={() => toggle1('6')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <Plus className='d-block' size={17} style={{marginRight:"5px"}} /><span style={{fontSize: '14px'}} className='d-none d-md-block'>New Leads</span>
                              
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>
                    
                    <div className='border-bottom'><AppCollapse data={PI} /></div>

                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '9'} onClick={() => toggle1('9')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <Percent className='d-block' size={17} style={{marginRight:"5px"}} /><span style={{fontSize: '14px'}} className='d-none d-md-block'>Sales Orders</span>
                              
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <div><AppCollapse data={Customizations} /></div>

                  </CardBody>
                </Card>  
                
            </Col>

            <Col md='10' xs='12'>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <BidList />
                  </TabPane>
                  <TabPane tabId='2'>
                   <DeclinedBids/>
                  </TabPane>
                  <TabPane tabId='3'>
                     <RejectedBids/>
                  </TabPane>
                  <TabPane tabId='4'>
                     <NoShow/>
                  </TabPane>
                  <TabPane tabId='5'>
                     <DetailsPage />
                  </TabPane>
                  <TabPane tabId='6'>
                     <RfqN />
                  </TabPane>
                  <TabPane tabId='7'>
                     <List />
                  </TabPane>
                  <TabPane tabId='8'>
                     <AcceptReject />
                  </TabPane>
                  <TabPane tabId='9'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Bulk Upload Form
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='10'>
                     <Customi />
                  </TabPane>
                  <TabPane tabId='11'>
                     <Customi />
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