// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import GridView from './gridview'
// import RelatedProducts from './RelatedProducts'
import '@styles/react/libs/swiper/swiper.scss'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import Right from './right'
import Left from './left'
// ** Third Party Components
import './style.css'
import bar from './right/card/assets/bars.svg'
import bar1 from './right/card/assets/bars2.svg'
import { AlignJustify, List, Layers, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'
import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  TabContent,
  TabPane,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
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
    <Fragment >
    <div style={{marginTop:"-1rem"}} className="ml-lg-5 mr-lg-5">
      <div className="ml-lg-2" >
        <BreadCrumbs  breadCrumbTitle='Search Page' breadCrumbParent='Main' breadCrumbChild='Home' breadCrumbActive='Search' />
      </div>
      <div className="ml-lg-2 mr-lg-2" >
        <Row>
            <Col md='3' xs='12'>
                <Card>
                  <CardBody className='d-flex'>
                    <h1><b>Filter</b></h1><p>(31)</p>
                    
                  </CardBody>
                   <CardBody>
                    
                    <Left />
                  </CardBody>
                </Card>
            </Col>
            
            <Col md='9' xs='12'>
              <Card className="d-none d-md-block">
                  <CardBody className="m-0 p-0">
                    <div >
                      <div className="ps-categogy__wrapper">
                              <Row>
                                  <Col md='2' xs='12' className='border-right'>
                                      <Nav className='mb-0 ml-md-0'  >
                                        <NavItem style={{paddingLeft: '5px'}}>
                                          <NavLink className='font-weight-bold' style={{marginTop:"7px"}} active={activeTab === '1'} onClick={() => toggle1('1')}>
                                            
                                            <List size={18} />
                                          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                          <NavLink className='font-weight-bold pl-2' style={{marginTop:"7px"}} active={activeTab === '2'} onClick={() => toggle1('2')}>
                            
                                            <Layers size={18} />
                                          </NavLink>
                                        </NavItem>
                                      </Nav>
                                      
                                  </Col>
                                  <Col md='7' xs='12' className='d-flex'> 
                                        <Col md='6' xs='12'>    
                                          <div className="ps-categogy__onsale">
                                              <form>
                                                  <div className="custom-control custom-checkbox">
                                                      <input className="custom-control-input" type="checkbox" id="onSaleProduct" />
                                                      <label className="custom-control-label" for="onSaleProduct">Show products on sale</label>
                                                  </div>
                                              </form>
                                          </div>
                                        </Col> 
                                        <Col md='6' xs='12'> 
                                          <div className="ps-categogy__sort">
                                              <form><span>Sort by</span>
                                                  <select className="form-select">
                                                      <option selected="">Latest</option>
                                                      <option value="Popularity">Popularity</option>
                                                      <option value="Average rating">Average rating</option>
                                                      <option value="Latest">Latest</option>
                                                      <option value="Price: low to high">Price: low to high</option>
                                                      <option value="Price: high to low">Price: high to low</option>
                                                  </select>
                                              </form>
                                          </div>
                                        </Col> 
                                  </Col>
                                  <Col md='3' xs='12'>
                                      <div className="ps-categogy__show">
                                          <form><span>Show</span>
                                              <select className="form-select">
                                                  <option selected="">12</option>
                                                  <option value="24">24</option>
                                                  <option value="36">36</option>
                                                  <option value="48">48</option>
                                              </select>
                                          </form>
                                      </div>
                                  </Col>
                              </Row>
                          </div>
                      </div>
                </CardBody>
                </Card>
                <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                              <Card  >
                                <CardBody>
                                  <Right />
                                </CardBody>
                                
                              </Card>
                            </TabPane>
                            <TabPane tabId='2'>
                                <GridView />
                            </TabPane>
                            <TabPane tabId='3'>
                              
                            </TabPane>
                            <TabPane tabId='4'>
                             
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
