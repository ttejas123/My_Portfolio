// ** React Imports
import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

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

import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'

const Details = () => {

  return (
    <Fragment>
      <div >

      </div>
      <BreadCrumbs breadCrumbTitle='Search Page' breadCrumbParent='Home' breadCrumbChild='Shop' breadCrumbActive='Search' />
      <div >
        <Row>
            <Col md='3' xs='12'>
                <Card>
                  <CardBody className='d-flex'>
                    <h1><b>Diagnosis</b></h1><p>(31)</p>
                    
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
                                  <Col md='3' xs='12'>
                                      <div className="ps-categogy__type"> <a href="/search/searchPage"><img src={bar} alt="" /></a><a className="active" href="/search/searchPage"><img src={bar1} alt="" /></a></div>
                                  </Col>
                                  <Col md='6' xs='12' className='d-flex'> 
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
                <Card>
                  <CardBody>
                    <Right />
                  </CardBody>
                  
                </Card>
            </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Details
