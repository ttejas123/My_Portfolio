import { useEffect, Fragment, useState } from 'react'
import { Bell, Image, Book, Edit3, Box, Lock } from 'react-feather'
import AppCollapse from '@components/app-collapse'
import NotificationSetting from './NotificationSetting'
// import NotificationSetting from '../Notification/All/Content'

import {
    Row,
    Card, CardBody,
    Col,
    TabContent,
    TabPane,
    Nav, ListGroup, ListGroupItem,
    NavItem,
    UncontrolledAlert,
    NavLink
  } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import '@styles/react/pages/page-profile.scss'

const AccountSetting = () => {
    const [activeTab, setActiveTab] = useState('1')
    const toggle1 = tab => setActiveTab(tab)

    return (
        <Fragment className="addPadding m-0">
          <div style={{marginTop:"-1rem"}} className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
            <BreadCrumbs  breadCrumbTitle='Setting' breadCrumbParent='Profile' breadCrumbChild='Dashboard' />
          </div>
          <div  >
          <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
            <Row>
             
              <Col md='2' xs='12'> 
                    <Card >
                      <CardBody className='p-1' > 
                        <h4>Setting</h4>
                        
                        <ListGroup className='border-bottom' flush>
                          <ListGroupItem className='cursor-pointer' style={activeTab === '1' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}} onClick={() => toggle1('1')}>
                             <Nav className='mb-0 ml-md-0 ' >
                              <NavItem >
                                <NavLink className='font-weight-bold d-flex'>
                                  
                                  <><Bell size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Notifications </span></>
                                </NavLink>
                              </NavItem>
                            </Nav>
                          </ListGroupItem>                            
                        </ListGroup>
    
    
                         <ListGroup className='border-bottom' flush>
                          <ListGroupItem style={activeTab === '2' ? {borderLeft: '1px solid red', paddingLeft: '6px'} : {paddingLeft: '6px'}}  onClick={() => toggle1('6')}>
                             <Nav className='mb-0 ml-md-0 ' >
                              <NavItem >
                                <NavLink className='font-weight-bold d-flex'>
                                  <><Lock  size={17} style={{marginRight:"3px"}} /><span style={{fontSize: '14px'}}> Update Password </span></>
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
                         <NotificationSetting/>
                      </TabPane>
    
                    </TabContent>
                </Col>
    
              </Row>
            </div>
               
          </div>
          
        </Fragment>
      )
}

export default AccountSetting

