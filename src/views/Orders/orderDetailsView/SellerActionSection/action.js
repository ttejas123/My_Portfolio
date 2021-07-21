import Chart from 'react-apexcharts'
import { Fragment, useContext } from 'react'
import { Card, CardTitle, CardHeader, CardBody, Row, Col, Media, Button, UncontrolledCollapse, ListGroup, ListGroupItem, Badge } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useRTL } from '@hooks/useRTL'
import Timeline from '@components/timeline'
import { Share2, MessageSquare, PhoneCall, PenTool, User, FileText, MapPin, ShoppingBag, Server } from 'react-feather'
import SellerPaymentDetails from '../SellerActionSection/paymentInfo'
import RedressalList from './redressalList'

const SellerActionSection = () => {
    const [isRtl, setIsRtl] = useRTL()
    const themeColors = useContext(ThemeColors)

    
const data = [
  {
    title: 'Payment Details',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
   <SellerPaymentDetails/>
    ) 
  },
  {
    title: 'Redressal List',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
   <RedressalList/>
    ) 
  }
//   {
//     title: 'Return or Refund',
//     // content: 'Invoices have been paid to the company.',
//     icon: <PenTool size={14} />,
//     // meta: '12 min ago',
//     customContent: (
//     <div>Hello</div>
//         //   <RatingAndReview dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
//     ) 
//   }
  
]


  return (
    <Card className='Details-card'>
         <CardHeader className=''>
          <CardTitle tag='h4'>Sellers Action</CardTitle>
      </CardHeader>
    <CardBody>
    <Timeline data={data} />
          {/* <ul>
              <li>
        <Col xs='12' lg='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'1rem'}}>
         <ProofOfDelivery/>
        </Col>
        </li>
        <li>
        <Col xs='12' lg='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'1rem'}}>
         <RaiseRedressal/>
        </Col>
        </li>
        <li>
        <Col xs='12' lg='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'1rem'}}>
        <RatingAndReview dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        </li>
        <li>
        <Col xs='12' lg='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'1rem'}}>
        <PaymentDetails/>
        </Col>
        </li>
        <li>
        <Col xs='12' lg='12' style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'1rem'}}>
        <TrackDispatch/>
        </Col>
        </li>
        </ul> */}
    </CardBody>
  </Card>
  )
}

export default SellerActionSection