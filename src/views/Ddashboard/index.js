// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'

// import RelatedProducts from './RelatedProducts'
import Navbarss from './navbar'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import img from './assets/b1.jpg'
import person from '@src/assets/images/avatars/raviKukreja.jpg'
import a1 from '@src/assets/images/avatars/1-small.png'
// ** Third Party Components
import '@styles/react/pages/page-profile.scss'
import './style.css'
import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  TabContent,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardImg,
  Navbar,
  TabPane,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components

import Left from './left'
import Right from './main'
import MainSubMenu from './left/MainSubMenu'
import Team from './team'

import InfoCard from './dashboardComponent/index'


const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
   const [activeTab, setActiveTab] = useState('1')
const toggle1 = tab => setActiveTab(tab)

  return (
    <Fragment className="addPadding m-0">
    
      <div style={{marginTop:"-1rem"}} className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
        <BreadCrumbs  breadCrumbTitle='Dashboard' breadCrumbParent='Main' breadCrumbChild='Home' breadCrumbActive='Dashboard' />
      </div>
      <div >
      <div id='user-profile'>
        <Row>
          <Col md='12' xs='12'>   
                <Card className='profile-header mb-2'>
                    <div className="bannerss">
                      <CardImg src={img}  className="img-fluid center-block center ssssss" alt='User Profile Image' top />
                    </div>
                    <div className='position-relative'>
                      <div className='profile-img-container d-flex align-items-center'>
                        <div className='profile ml-md-0 pl-lg-1 raviImge' >
                          <img className='img-thumbnail img-responsive Col-md-3 ml-md-5 ' src={person} width="160" height="100"  />
                        </div>
                        <div className='profile-title' style={{marginLeft:"35px"}}>
                          <h2 className='text-white'><b>Ravi Kukreja</b></h2>
                          <p className='text-white'><b>Bidoya, pvt.</b></p>
                        </div>
                      </div>
                    </div>
                    <div className='profile-header-nav'>
                      <Navbar className='justify-content-end justify-content-md-between w-100' expand='md' light>
                        <Button color='' className='btn-icon navbar-toggler' onClick={toggle}>
                          <AlignJustify size={21} />
                        </Button>
                        <Collapse className='pl-md-0' isOpen={isOpen} navbar>
                          <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                            <Nav className='mb-0 ml-md-0 pl-md-4' pills >

                              <NavItem className="pl-lg-4">
                                <NavLink className='font-weight-bold' active={activeTab === '1'} onClick={() => toggle1('1')}>
                                  <span className='d-none d-md-block'>Main</span>
                                  <Home className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '2'} onClick={() => toggle1('2')}>
                                  <span className='d-none d-md-block'>Purchase</span>
                                  <ShoppingCart className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '3'} onClick={() => toggle1('3')}>
                                  <span className='d-none d-md-block'>Sale</span>
                                  <Package className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '4'} onClick={() => toggle1('4')}>
                                  <span className='d-none d-md-block'>Team</span>
                                  <Users className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                            </Nav>
                            
                          </div>
                        </Collapse>
                      </Navbar>
                    </div>
                </Card>
            </Col>
          </Row>
        </div>
        <Row className="ml-lg-5 mr-lg-5 pl-lg-2 pr-lg-2">
          
                  <Col md='2' xs='12'>
                       <Left />
                  </Col>
                  <Col md='10' xs='12'>
                          <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                              <Right />
                            </TabPane>
                            <TabPane tabId='2'>
                              <MainSubMenu />
                            </TabPane>
                            <TabPane tabId='3'>
                              <MainSubMenu />
                            </TabPane>
                            <TabPane tabId='4'>
                              <Team />
                            </TabPane>
                            
                            {/* <TabPane tabId='3'>
                              <FromOtherSitesTab />
                            </TabPane> */}
                          </TabContent>
                  </Col>
              
      </Row>    
      </div>
      
    </Fragment>
  )
}

export default Details
