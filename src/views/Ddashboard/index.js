// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'

// import RelatedProducts from './RelatedProducts'

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

import InfoCard from './dashboardComponent/index'


const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
   const [activeTab, setActiveTab] = useState('1')
const toggle1 = tab => setActiveTab(tab)

  return (
    <Fragment>
      <div >

      </div>
          <BreadCrumbs breadCrumbTitle='Dashboard' breadCrumbParent='Home' breadCrumbChild='Dashboard' breadCrumbActive='Profile' />
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
                        <div className='profile' >
                          <img className='img-thumbnail img-responsive Col-md-3 ml-md-5 ' src={person} width="180" height="100"  />
                        </div>
                        <div className='profile-title ml-3'>
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
                        <Collapse className='pl-md-5' isOpen={isOpen} navbar>
                          <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                            <Nav className='mb-0 ml-md-5 pl-md-5' pills >

                              <NavItem>
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
        <Row>
            <Col md='3' xs='12'>
                 <Left />
            </Col>
            <Col md='9' xs='12'>
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
                        <Right />
                      </TabPane>
                      <TabPane tabId='5'>
                        <Right />
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

       
                // <Col md='9' xs='12'>
                //          {/* <Row> */}
                //          <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/>
                //          {/* <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/> */}
           
                //         { <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/>
                //         <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/>
                //         <InfoCard cols={{ xl: '4', sm: '12', md:'4', xs:'12' }}/> }
                //          {/* </Row> */}
                        
                // </Col>