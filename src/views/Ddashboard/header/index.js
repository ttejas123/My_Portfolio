// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'

// import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import img from '../assets/b1.jpg'
import person from '../assets/persone.jpg'
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
    
      <div id='user-profile'>
        <Row>
          <Col sm='12'>   
                <Card className='profile-header mb-2'>
                    <div style={{maxHeight: "300px", justifyContent: "bottom", alignItems: "bottom"}}>
                      <CardImg src={img} style={{ backgroundPosition: "center", position: "relative"}} className="img-fluid" alt='User Profile Image' top />
                    </div>
                    <div className='position-relative'>
                      <div className='profile-img-container d-flex align-items-center'>
                        <div className='profile' style={{maxHeight: "150px", maxWidth: "150px", justifyContent: "bottom", alignItems: "bottom"}}>
                          <img style={{ backgroundPosition: "center", position: "relative"}} className='rounded img-fluid img-thumbnail' src={person}  />
                        </div>
                        <div className='profile-title ml-3'>
                          <h2 className='text-white'>Adam Harshvardhan</h2>
                          <p className='text-white'>Canada USA</p>
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
                            <Nav className='mb-0' pills>
                              <NavItem>
                                <NavLink className='font-weight-bold' active>
                                  <span className='d-none d-md-block'>Feed</span>
                                  <Rss className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold'>
                                  <span className='d-none d-md-block'>About</span>
                                  <Info className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold'>
                                  <span className='d-none d-md-block'>Photos</span>
                                  <Image className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className='font-weight-bold'>
                                  <span className='d-none d-md-block'>Friends</span>
                                  <Users className='d-block d-md-none' size={14} />
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <Button color='primary'>
                              <Edit className='d-block d-md-none' size={14} />
                              <span className='font-weight-bold d-none d-md-block'>Edit</span>
                            </Button>
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
