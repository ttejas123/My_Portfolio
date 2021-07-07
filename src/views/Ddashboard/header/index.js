// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import img from '../assets/b1.jpg'
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
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
   const [activeTab, setActiveTab] = useState('1')
const toggle1 = tab => setActiveTab(tab)

  return (
    
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
                          <img style={{ backgroundPosition: "center", marginLeft: "58px", position: "relative", maxHeight: "210px", minWidth: "250px"}} className='img-fluid img-thumbnail' src={person}  />
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
                                  <span className='d-none d-md-block'>Feed</span>
                                  <Rss className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '2'} onClick={() => toggle1('2')}>
                                  <span className='d-none d-md-block'>About</span>
                                  <Info className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '3'} onClick={() => toggle1('3')}>
                                  <span className='d-none d-md-block'>Photos</span>
                                  <Image className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold' active={activeTab === '4'} onClick={() => toggle1('4')}>
                                  <span className='d-none d-md-block'>Friends</span>
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

  )
}

export default Details
