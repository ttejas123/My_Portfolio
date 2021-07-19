// // ** React Imports
// <<<<<<< HEAD
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Rating from 'react-rating'
// // ** Third Party Components
// import classnames from 'classnames'
// import { useRTL } from '@hooks/useRTL'
// import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket, User } from 'react-feather'
// import {
//   Row,
//   Col,
//   CardText,
//   CardBody,
//   Card,
//   UncontrolledButtonDropdown,
//   DropdownToggle,
//   TabContent,
//   TabPane,
//   ListGroup, ListGroupItem,
//   Badge
// } from 'reactstrap'
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   EffectFade,
//   EffectCube,
//   EffectCoverflow,
//   Autoplay,
//   Lazy,
//   Virtual
// } from 'swiper'

// import image from '@src/assets/images/avatars/1-small.png'
// import SalesOrder from '../Orders/salesOrder'
// import ProductsIssued from './productIssued'
// const Orders = props => {

// SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
// const [isOpen, setIsOpen] = useState(false)
// const toggle = () => setIsOpen(!isOpen)
//  const [activeTab, setActiveTab] = useState('1')
// const toggle1 = tab => setActiveTab(tab)

//   // ** Condition btn tag
//   const CartBtnTag = 'button'
//  const [isRtl, setIsRtl] = useRTL()
//   return (

//     <>
//     <Row className="ml-lg-5 mr-lg-5 pl-lg-2 pr-lg-2">
          
//           <Col md='2' xs='12'>
//           <Card className='p-0'>
//                   <CardBody className='p-1' >
//           <h4><b>Orders</b></h4>
//       <div>
//           <ListGroup flush>
//             <ListGroupItem className='cursor-pointer'  onClick={() => toggle1('1')}>
//               <span className="mr-1">Sales Order</span>
//               {/* <Badge color='primary' pill>
//                 New
//               </Badge> */}
//             </ListGroupItem>
//             <ListGroupItem  className='cursor-pointer'  onClick={() => toggle1('2')}>
//               <span >Product Issued</span> 
//             </ListGroupItem>
//           </ListGroup>
         
//       </div>
//       </CardBody>
//       </Card>
//           </Col>
//           <Col md='10' xs='12'>
//                   <TabContent activeTab={activeTab}>
//                   <TabPane tabId='1'>
//                <SalesOrder/>
//               </TabPane>
//               <TabPane tabId='2'>
//               <ProductsIssued/>
//                    </TabPane>
//                   </TabContent>
//           </Col>
      
// </Row>    
//       {/* <DashboardMenuItem /> */}
//     </>
//   )
// }

// export default Orders
// =======
import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, User, MapPin, Book, Edit, FileText, Home, Award, Layers, Upload, Plus, Target, Percent, ArrowDownCircle, Box, ShoppingCart, Package, DollarSign, Truck, UserPlus, Star, Eye, Tool, Map } from 'react-feather'
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
import SalesOrder from './salesOrder'
import ProductsIssued from './productIssued'

import DataTable from './components/payment/datatable'
import DataTable1 from './components/paymentR/datatable'
import DataTable2 from './components/gstR/datatable'
import OrderDetails from './orderDetailsView/orderDetails'

// ** Custom Components
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)

  
const Bid = [
  {
    title: (<><DollarSign  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Payments </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '6'} onClick={() => toggle1('6')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Audit Trail</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '7'} onClick={() => toggle1('7')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Pending Payments</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '8'} onClick={() => toggle1('8')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Payment Reports</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '9'} onClick={() => toggle1('9')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>GST Report</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<><Eye  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Product Issues </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '10'} onClick={() => toggle1('10')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Return requests</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '11'} onClick={() => toggle1('11')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Refunds</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '12'} onClick={() => toggle1('12')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Replacement Requests</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '13'} onClick={() => toggle1('13')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Connect Bidoya</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
          
                    </ListGroup>
    )
  },
  {
    title: (<><FileText  size={17} style={{marginRight:"1px"}} /><span style={{fontSize: '14px'}}> Invoices </span></>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '14'} onClick={() => toggle1('14')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>List</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' active={activeTab === '15'} onClick={() => toggle1('15')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Create Invoice</span>
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
        <BreadCrumbs  breadCrumbTitle='Orders' breadCrumbParent='Orders' breadCrumbChild='Dashboard' />
      </div>
      <div  >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
        <Row>
         
          <Col md='2' xs='12'> 
                <Card >
                  <CardBody className='p-1' > 
                    <h4>Orders</h4>
                    
                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '1'} onClick={() => toggle1('1')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              
                              <><Edit   size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Order Update </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                     <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '2'} onClick={() => toggle1('2')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <><Book  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Report </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                     <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '3'} onClick={() => toggle1('3')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <><Upload  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Delivery Proof </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                     <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '4'} onClick={() => toggle1('4')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <><MapPin  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Tracker </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                     <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '5'} onClick={() => toggle1('5')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                                <><FileText  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Order Details </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '17'} onClick={() => toggle1('17')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                                <><FileText  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Sales Order </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} active={activeTab === '18'} onClick={() => toggle1('18')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                                <><FileText  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Products Issued </span></>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>

                    <div><AppCollapse data={Bid} /></div>

                  </CardBody>
                </Card>  
                
            </Col>

            <Col md='10' xs='12'>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Order Update
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='2'>
                    <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Report
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='3'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Order Delivery Proof
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='4'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          No Show 
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='5'>
                    <OrderDetails/>
                  </TabPane>
                  <TabPane tabId='6'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Order Details
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='7'>
                     <DataTable />
                  </TabPane>
                  <TabPane tabId='8'>
                     <DataTable1 />
                  </TabPane>
                  <TabPane tabId='9'>
                     <DataTable2 />
                  </TabPane>
                  <TabPane tabId='10'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          GST Report
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='11'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Return Requests
                        </div>
                      </UncontrolledAlert>
                  </TabPane>

                  <TabPane tabId='12'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Refunds
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='13'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Replacement Requests
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='14'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Connect Bidoya
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='15'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          List of Invoices
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='16'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Create Invoices
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='17'>
                     <SalesOrder/>
                  </TabPane>
                  <TabPane tabId='18'>
                     <ProductsIssued/>
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
