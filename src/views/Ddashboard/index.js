// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import img from './assets/b1.jpg'
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
          <Col sm='12'>   
                <Card className='profile-header mb-2'>
                    <div style={{maxHeight: "250px", justifyContent: "bottom", alignItems: "bottom"}}>
                      <CardImg src={img} style={{ backgroundPosition: "center", position: "relative"}} className="img-fluid" alt='User Profile Image' top />
                    </div>
                    <div className='position-relative'>
                      <div className='profile-img-container d-flex align-items-center'>
                        <div className='profile' style={{ justifyContent: "bottom", alignItems: "bottom"}}>
                          <img style={{ backgroundPosition: "center", marginLeft: "58px", position: "relative", maxHeight: "220px", minWidth: "250px"}} className='img-fluid img-thumbnail' src={person}  />
                        </div>
                        <div className='profile-title ml-3'>
                          <h2 className='text-white'>Ravi Kukreja</h2>
                          <p className='text-white'>Bidoya, pvt.</p>
                        </div>
                      </div>
                    </div>
                    <div className='profile-header-nav'>
                      <Navbar className='justify-content-end justify-content-md-between w-100' expand='md' light>
                        <Button color='' className='btn-icon navbar-toggler' onClick={toggle}>
                          <AlignJustify size={21} />
                        </Button>
                        <Collapse isOpen={isOpen} navbar>
                          <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                            <Nav className='mb-0 ml-5' pills style={{paddingLeft: "120px"}}>

                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '1'} onClick={() => toggle1('1')}>
                                  <span className='d-none d-md-block'>Main</span>
                                  <Rss className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '2'} onClick={() => toggle1('2')}>
                                  <span className='d-none d-md-block'>Purchase</span>
                                  <Info className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '3'} onClick={() => toggle1('3')}>
                                  <span className='d-none d-md-block'>Sale</span>
                                  <Image className='d-block d-md-none' size={14} />
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
                        Hello
                      </TabPane>
                      <TabPane tabId='3'>
                        <Right />
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