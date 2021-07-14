// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'

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

const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)

  return (
   
      <div  >
      <div className="" id='user-profile'>
        <Row>
          <Col md='12' xs='12'>   
                <Card className='profile-header mb-2'>
                    
                    <div className='navbar-toggler '>
                      <Navbar className='justify-content-end justify-content-md-between w-100' expand='md' light>
                        <Button color='' className='btn-icon navbar-toggler' onClick={toggle}>
                          <AlignJustify size={21} />
                        </Button>
                        <Collapse className='pl-md-0' isOpen={isOpen} navbar>
                          <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                            <Nav className='mb-0 ml-md-0 ' pills >

                              <NavItem style={{paddingLeft: '5px'}}>
                                <NavLink className='font-weight-bold' active={activeTab === '1'} onClick={() => toggle1('1')}>
                                  <span className='d-none d-md-block'>Bid Cash</span>
                                  <Home className='d-block d-md-none' size={14} />
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
        <Row >
                  <Col md='12' xs='12'>
                          <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                              Hello 
                            </TabPane>
                          </TabContent>
                  </Col>    
        </Row>    
      </div>

  )
}

export default Details
