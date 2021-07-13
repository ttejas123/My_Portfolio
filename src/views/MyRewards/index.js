// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'
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
  NavLink
} from 'reactstrap'

import BidCash from './components/bidcash'
import BidCoin from './components/bidcoin'

// ** Custom Components
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
const toggle1 = tab => setActiveTab(tab)

  return (
    <Fragment className="addPadding m-0">
      <div style={{marginTop:"-1rem"}} className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
        <BreadCrumbs  breadCrumbTitle='Rewards' breadCrumbParent='Profile' breadCrumbChild='Profile' breadCrumbActive='Rewards' />
      </div>
      <div  >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
        <Row>
         
          <Col md='2' xs='12'> 
                <Card className='p-0'>
                  <CardBody className='p-1' > 
                    <ListGroup flush>

                      <ListGroupItem className='cursor-pointer' active={activeTab === '1'} onClick={() => toggle1('1')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My BidCoin</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='cursor-pointer' active={activeTab === '2'} onClick={() => toggle1('2')}>
                        <Nav className='mb-0 ml-md-0 ' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My BidCash</span>
                              <Home className='d-block d-md-none' size={14} />
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
                      <BidCash />
                  </TabPane>
                  <TabPane tabId='2'>
                     <BidCoin />
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
