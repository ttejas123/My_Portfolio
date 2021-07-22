// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'


import { useRTL } from '@hooks/useRTL'

import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket, User } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  CardBody,
  Card,
  UncontrolledButtonDropdown,
  DropdownToggle,
  TabContent,
  TabPane,
  ListGroup, ListGroupItem,
  Badge
} from 'reactstrap'
import ByUserTab from './byUser'
import AsinImportTab from './asinImport'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'

import image from '@src/assets/images/avatars/1-small.png'
import AddFromExisting from './fromExistingProducts'
import FromExcel from './FromExcel'
import EditProduct from './editProduct'

const CreateProduct = props => {

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen)
 const [activeTab, setActiveTab] = useState('1')
const toggle1 = tab => setActiveTab(tab)

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
    <Row className="ml-lg-5 mr-lg-5 pl-lg-2 pr-lg-2">
          
          <Col md='2' xs='12'>
          <Card className='p-0'>
                  <CardBody className='p-1' >
          <h4><b>Create Product</b></h4>
      <div>
          <ListGroup flush>
            <ListGroupItem className='cursor-pointer'  onClick={() => toggle1('1')}>
              <span className="mr-1">Add from Esisting Products</span>
              {/* <Badge color='primary' pill>
                New
              </Badge> */}
            </ListGroupItem>
            <ListGroupItem  className='cursor-pointer'  onClick={() => toggle1('2')}>
              <span >Asin + Fsn Import</span> 
            </ListGroupItem>
            <ListGroupItem  className='cursor-pointer' onClick={() => toggle1('3')}>
              <span >Excel Upload</span>  
            </ListGroupItem>
            <ListGroupItem  className='cursor-pointer' onClick={() => toggle1('4')}>
              <span >By User</span>  
            </ListGroupItem>            
          </ListGroup>
         
      </div>
      </CardBody>
      </Card>
          </Col>
          <Col md='10' xs='12'>
                  <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                {/* <ByUserTab/> */}
                <AddFromExisting/>
              </TabPane>
              <TabPane tabId='2'>
              <AsinImportTab/>
              </TabPane>
              <TabPane tabId='3'>
              <FromExcel/>
              </TabPane>
              <TabPane tabId='4'>
              <EditProduct/>
              </TabPane>
                    
                    {/* <TabPane tabId='3'>
                      <FromOtherSitesTab />
                    </TabPane> */}
                  </TabContent>
          </Col>
      
</Row>    
      {/* <DashboardMenuItem /> */}
    </>
  )
}

export default CreateProduct
