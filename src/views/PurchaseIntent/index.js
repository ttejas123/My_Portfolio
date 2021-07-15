import { useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'
import BreadCrumbs from '@components/breadcrumbs'
import '@styles/react/pages/page-profile.scss'
import PurchaseIntentSideMenu from './leftMenu'

import {
    Row,
    Card, CardBody,
    Col,
    TabContent,
    TabPane,
    Nav, ListGroup, ListGroupItem,
    NavItem,
    NavLink
  } from 'reactstrap'

import List from './List'
import AcceptedList from './Accepted'
import RejectedList from './Rejected'
const PurchaseIntent = () => {
    const [activeTab, setActiveTab] = useState('1')

    const toggle1 = tab => setActiveTab(tab)
    return (
        <Fragment className="addPadding m-0">
          <div style={{marginTop:"-1rem"}} className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
            {/* <BreadCrumbs  breadCrumbTitle='Role And Rights' breadCrumbParent='Main' breadCrumbChild='Home' breadCrumbActive='roles' /> */}
          </div>
          <div  >
          <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" id='user-profile'>
            <Row>
             
              <Col md='2' xs='12'> 
              <PurchaseIntentSideMenu activeTab = {activeTab} toggle1 = {toggle1}></PurchaseIntentSideMenu>
                    
                </Col>
    
                <Col md='10' xs='12'>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId='1'>
                          {/* <MyTeam /> */}
                          <List />  
                      </TabPane>
                      <TabPane tabId='2'>
                         <AcceptedList />
                      </TabPane>
                      <TabPane tabId='3'>
                      <RejectedList />
                      </TabPane>
                    </TabContent>
                </Col>
    
              </Row>
            </div>
               
          </div>
          
        </Fragment>
      )

}
export default PurchaseIntent
