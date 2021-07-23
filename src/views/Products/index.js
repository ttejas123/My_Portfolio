// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, User, MapPin, Book, AtSign, Edit2, Edit3, FileText, Home, Award, Layers, Upload, Plus, Target, Percent, ArrowDownCircle, Box, ShoppingCart, Package, DollarSign, Truck, UserPlus, Star, Eye, Tool, Map } from 'react-feather'
import AppCollapse from '@components/app-collapse'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

import person from '@src/assets/images/avatars/raviKukreja.jpg'
import a1 from '@src/assets/images/avatars/1-small.png'
// ** Third Party Components
import '@styles/react/pages/page-profile.scss'
import BrandListing from './components/Brand/brand'
import BrandAdd from './components/Brand/add'

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
import RejectedProducts from '../Seller/Products/MyProducts/rejectedProducts'
import ApprovedProducts from '../Seller/Products/MyProducts/approvedProducts'
import Drafts from '../Seller/Products/MyProducts/drafts'
import AsinImportTab from '../Seller/Products/CreateProduct/asinImport'
import FromExcel from '../Seller/Products/CreateProduct/FromExcel'
import ByUserTab from '../Seller/Products/CreateProduct/byUser'
import MyProducts from '../Seller/Products/MyProducts/myProducts'
import Reporting from './components/Reporting'

// ** Custom Components
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)

  
const Bid = [
  {
    title: (<><Plus  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Add Products </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '2' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('2')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>AMZ Import</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '3' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('3')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>BUIN Import</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '4' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('4')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>File Uploads</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '5' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('5')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Individual Creation</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  }
]

const Draft = [
  {
    title: (<><Edit2  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Draft Products </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '8' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('8')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Draft</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '9' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('9')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Approved</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '10' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('10')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Rejected</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
          
                    </ListGroup>
    )
  }
]

const Brand = [
  {
    title: (<><AtSign  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> My Brands </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '11' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('11')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Listing</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '12' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('12')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Add New</span>
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
        <BreadCrumbs  breadCrumbTitle='Products' breadCrumbParent='Products' breadCrumbChild='Dashboard' />
      </div>
      <div  >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
        <Row>
         
          <Col md='2' xs='12'> 
                <Card >
                  <CardBody className='p-1' > 
                    <h4>Products</h4>
                    
                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={activeTab === '1' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('1')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              
                              <><Box   size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> My Products </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <div style={activeTab >= '2' && activeTab <= '5' ? {borderLeft: '1px solid red'} : {paddingLeft: '0px'}} className="border-bottom"><AppCollapse data={Bid} /></div>

                     <ListGroup className='border-bottom' flush>
                      <ListGroupItem style={activeTab === '6' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}}  onClick={() => toggle1('6')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <><Image  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Images Upload </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                     <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={activeTab === '7' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('7')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <><Book  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Reporting </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <div className="border-bottom" style={activeTab >= '8' && activeTab <= '10' ? {borderLeft: '1px solid red'} : {paddingLeft: '0px'}}><AppCollapse data={Draft} /></div>
                    <div className="border-bottom" style={activeTab >= '11' && activeTab <= '14' ? {borderLeft: '1px solid red'} : {paddingLeft: '0px'}}><AppCollapse data={Brand} /></div>

                    <ListGroup  flush>
                      <ListGroupItem className='cursor-pointer' style={activeTab === '15' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('15')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <><Edit3  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Edit History </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                  </CardBody>
                </Card>  
                
            </Col>

            <Col md='10' xs='12'>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                  <MyProducts/>
                  </TabPane>
                  <TabPane tabId='2'>
                    <AsinImportTab/>
                  </TabPane>
                  <TabPane tabId='3'>
                  <AsinImportTab/>
                  </TabPane>
                  <TabPane tabId='4'>
                    <FromExcel/>
                  </TabPane>
                  <TabPane tabId='5'>
                    <ByUserTab/>
                  </TabPane>
                  <TabPane tabId='6'>
                     <FromExcel/>
                  </TabPane>
                  <TabPane tabId='7'>
                     <Reporting />
                  </TabPane>
                  <TabPane tabId='8'>
                    <Drafts/>
                  </TabPane>
                  <TabPane tabId='9'>
                     <ApprovedProducts/>
                  </TabPane>
                  <TabPane tabId='10'>
                     <RejectedProducts/>
                  </TabPane>
                  <TabPane tabId='11'>
                     <BrandListing />
                  </TabPane>

                  <TabPane tabId='12'>
                     <BrandAdd />
                  </TabPane>
                  <TabPane tabId='13'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Request Approval
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='14'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Invoice Upload
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='15'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Edit History
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