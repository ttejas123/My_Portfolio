// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, User, Edit, Home, Award, ShoppingCart, Package, DollarSign, Truck, UserPlus, Star, Eye, Tool, Map } from 'react-feather'
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


import Left from './components/mydashboard/left/MainSubMenu'
import Main from './components/mydashboard/main/index.js'

import BidCash from './components/rewards/bidcash'
import BidCoin from './components/rewards/bidcoin'

import Myprofile from './components/myprofile'
import Mygallery from './components/mygallery'
import Support from './components/support'

import MyBackup from './components/teamrights/MyBackUp'
import MyRights from './components/teamrights/MyRights'

import About from './components/teamrights/MyTeam/Components/about.js'
import Members from './components/teamrights/MyTeam/Components/members.js'
import Roless from './components/teamrights/MyTeam/Components/roleRights.js'
import RoleCreateNList from './components/teamrights/RoleListingNCre'
import RightRequestList from './components/teamrights/requestList'
import BackupList from './components/teamrights/MyBackUp/Components/backup'
import BackupAudits from './components/teamrights/MyBackUp/Components/audit'

import DefaultCom from './components/mycommision/default'
import SpecializedCom from './components/mycommision/specialized'
import RequestChange from './components/mycommision/requesttochange/index'

import Warehouse from './components/warehouse'
import Myratingsreviews from './components/myratingreviews'
import Temrights from './components/teamrights'
import Backups from './components/backups/addBackup'
import Sitemap from './components/sitemap'


// ** Custom Components
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)

  const dashboard = [
  {
    title: (<> <Home size={17} style={{marginRight:"1px"}} /> Dashboard </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '1' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('1')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My Dashboard</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                       <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '2' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('2')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Buyer Dashboard</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '3' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('3')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Seller Dashboard</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <User size={17} style={{marginRight:"1px"}} /> My Profile </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '4' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('4')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My Info</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer'>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' style={activeTab === '5' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('5')} >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My KYC</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '6' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('6')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Team KYC</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '7' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('7')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>KYC Doc</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <Image size={17} style={{marginRight:"1px"}} /> My Gallery </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '8' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('8')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My Images</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer'  style={activeTab === '9' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('9')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Bulk Upload Form</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <UserPlus size={17} style={{marginRight:"1px"}} /> Support </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '10' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('10')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Product Changes</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer'  style={activeTab === '11' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('11')} >
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Commission Updates</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '12' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('12')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>VAS</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '13' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('13')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Support Query</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '14' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('14')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>POC</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <DollarSign size={17} style={{marginRight:"1px"}} /> My Commission </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '15' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('15')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Default</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '16' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('16')} >
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Specialized</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                       <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '17' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('17')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'  >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Request to change</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <Truck size={17} style={{marginRight:"1px"}} /> Warehouse </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '18' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('18')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>List</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '19' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('19')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'  >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Add</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <Award size={17} style={{marginRight:"1px"}} /> Rewards </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '20' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('20')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Bid Coin</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>

                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '21' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('21')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Bid Cash</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                
                    </ListGroup>
    )
  }
]


const dashboard2 = [
  {
    title: (<> <Eye  size={17} style={{marginRight:"1px"}} /> Team Rights </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '23' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('23')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>My Team</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '24' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('24')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Team Member</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '25' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('25')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Right Management</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '26' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('26')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Rights request form</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '27' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('27')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Rights approval form</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '28' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('28')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Request List</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '29' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('29')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Role Listing and creation page</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
    )
  },
  {
    title: (<> <Tool size={17} style={{marginRight:"1px"}} /> Backup </>),
    content: (
                    <ListGroup flush className='m-0 p-0'>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '30' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('30')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer' >
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>List Of Backup</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '31' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('31')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Audit Trail</span>
                              <Home className='d-block d-md-none' size={14} />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>
                      <ListGroupItem className='m-0 p-0 cursor-pointer' style={activeTab === '32' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('32')}>
                        <Nav className='mb-0 ml-md-0 cursor-pointer'>
                          <NavItem style={{paddingLeft: '5px'}}>
                            <NavLink className='font-weight-bold'>
                              <span className='d-none d-md-block'>Add backup account</span>
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
        <BreadCrumbs  breadCrumbTitle='Dashboard' breadCrumbParent='Dashboard' breadCrumbChild='Dashboard' />
      </div>
      <div  >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
        <Row>
         
          <Col md='2' xs='12'> 
                <Card >
                  <CardBody className='p-1' > 
                    <h4>Dashboard</h4>
                    <div className='border-bottom'><AppCollapse data={dashboard} /></div>
                    <ListGroup className='border-bottom' flush>
                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} style={activeTab === '22' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('22')}>
                         <Nav className='mb-0 ml-md-0 ' >
                          <NavItem >
                            <NavLink className='font-weight-bold d-flex'>
                              <Star className='d-block' size={17} style={{marginRight:"5px"}} /><span className='d-none d-md-block'>Ratings/Reviews</span>
                              
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </ListGroupItem>                            
                    </ListGroup>
                    <div className='border-bottom'><AppCollapse data={dashboard2} /></div>
                    <ListGroup  flush>

                      <ListGroupItem className='cursor-pointer' style={{paddingLeft: '6px'}} style={activeTab === '33' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('33')}>
                         <Nav className='mb-0 ml-md-0 pl-0  ' >
                          <NavItem >
                            <NavLink className='font-weight-bold  d-flex'>
                              <Map className='d-block' size={17} style={{marginRight:"5px"}} /><span className='d-none d-md-block'>Sitemap</span>
                              
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
                     <Main />
                  </TabPane>
                  <TabPane tabId='2'>
                    <Left />
                  </TabPane>
                  <TabPane tabId='3'>
                     <Left />
                  </TabPane>
                  <TabPane tabId='4'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                           My Details  
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='5'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          My KYC 
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='6'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Team KYC
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='7'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          KYC Doc
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='8'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          My Images
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='9'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Bulk Upload Form
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='10'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Product Changes
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='11'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Commission Changes
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='12'>
                      <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          VAS
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='13'>
                      <Support />
                  </TabPane>
                  <TabPane tabId='14'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          POC
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='15'>
                    <DefaultCom />
                  </TabPane>
                  <TabPane tabId='16'>
                    <SpecializedCom />
                  </TabPane>
                  <TabPane tabId='17'>
                     <RequestChange />
                  </TabPane>
                  <TabPane tabId='18'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          WareHouse List
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='19'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Warehouse Add Form
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='20'>
                    <BidCoin />
                  </TabPane>
                  <TabPane tabId='21'>
                    <BidCash />
                  </TabPane>
                  <TabPane tabId='22'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Rating And Reviews
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='23'>
                     <About />
                  </TabPane>
                  <TabPane tabId='24'>
                    <Members />
                  </TabPane>
                  <TabPane tabId='25'>
                    <Roless />
                  </TabPane>
                  <TabPane tabId='26'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Rights Request Form
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='27'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          Role Listing And Creation Page
                        </div>
                      </UncontrolledAlert>
                  </TabPane>
                  <TabPane tabId='28'>
                     <RightRequestList />
                  </TabPane>
                  <TabPane tabId='29'>
                     <RoleCreateNList />
                  </TabPane>
                  <TabPane tabId='30'>
                     <BackupList />
                  </TabPane>
                  <TabPane tabId='31'>
                     <BackupAudits />
                  </TabPane>
                  <TabPane tabId='32'>
                     <Backups />
                  </TabPane>
                  <TabPane tabId='33'>
                     <UncontrolledAlert color='primary'>
                        <div className='alert-body'>
                          SiteMap
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


// 1. right request +>
//   a. login User (disabled)
//   b. super user (disabled)
//   c. Date  (disabled)
//   d. right table (editable) 
//   on Submit(popup of successful)

// 2. rights approval form 
//     same as right request

// 3. incoming request list
//     1. user 2. role 3. no of rights

// 4. role name descript righstable

// 5. name date (disable) 
//    user select, rights, resne for request

// 6. name, date, exesting bidcoin(only show )
//    no of bid