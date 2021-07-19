import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'


const OrderInfo = () => {
  const cols = { md: '3', sm: '6' }
    const [selectedColor, setSelectedColor] = useState('primary')
    // ** Renders color options
       const colorOptions = ["primary", "success", "waring", "danger", "info"]
  const renderColorOptions = () => {
      console.log("colors", colorOptions)
    return colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  } 

  return (
    <Card >
  <Col lg='12' md='12' sm='12' className='py-1'>
    <Row>
      <Col lg='11' md='10' sm='10'>
  <CardTitle tag='h4' className='d-flex mb-0'>
  <span>Order Id : ORD0001</span>
   </CardTitle>
   </Col>
   <Col lg='1' md='2' sm='2'>
     <span>
    <Badge color='light-success'>Shipped</Badge>
     </span>
   </Col>
    </Row>
    <hr/>
  </Col>
  <Row>
    <Col lg='4' md='12' sm='12' >
  <CardBody className='mb-1 py-0 mr-1' style={{borderRight : '2px solid #ebe9f1'}}>
  <div className="d-flex justify-content-between">
              <div className='font-small-2'>Created Date : </div>
              <h5 className='mb-1'>12/03/2021</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Last Update :  </div>
              <h5 className='mb-1'>14/04/2021</h5>
            </div>
      </CardBody>
      </Col>
    <Col lg='4' md='12' sm='12' >
  <CardBody className='mb-1 py-0 mr-1' style={{borderRight : '2px solid #ebe9f1'}}>
  <div className="d-flex justify-content-between">
              <div className='font-small-2'>Last Update By : </div>
              <h5 className='mb-1'>Pravin Poshmani</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Delivery Date :  </div>
              <h5 className='mb-1'>16/04/2021</h5>
            </div>
      </CardBody>
      </Col>
     < Col lg='4' md='12' sm='12' >
  <CardBody className='mb-1 py-0 mr-1'>
  <div className="d-flex justify-content-between">
              <div className='font-small-2'>Seller : </div>
              <h5 className='mb-1'>Retailsnet</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Order Amount :  </div>
              <h5 className='mb-1'>20,000 </h5>
            </div>
      </CardBody>
      </Col>
      </Row>
  {/* <CardBody className='mt-0'>
    <Row>{renderData()}</Row>
  </CardBody> */}
</Card>
  )
}

export default OrderInfo
