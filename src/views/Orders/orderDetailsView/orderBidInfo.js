import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import bidsImage from '@src/assets/images/elements/bidsImg.png'
import '@styles/base/pages/app-chat-list.scss'

const OrderBidInfo = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
     
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>
            <img src={bidsImage} height='28' width='30' alt='bid image' className='mr-25'/>
              Bid Information</CardTitle>
            <hr />
            <PerfectScrollbar
          className='user-chats scroll-area'
          options={{ wheelPropagation: false }}
        >  
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Bid Id : </div>
              <h5 className='mb-1'>BID1</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Created : </div>
              <h5 className='mb-1'>01-05-2021 </h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Catalogue Id : </div>
              <h5 className='mb-1'> Cat1</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>MOQ : </div>
              <h5 className='mb-1'> 100</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Rate : </div>
              <h5 className='mb-1'> 1000</h5>
            </div>
            </PerfectScrollbar>
          </Col>
        </Row>
        
      </CardBody>
    </Card>
  )
}

export default OrderBidInfo