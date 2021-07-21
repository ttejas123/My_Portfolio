import Chart from 'react-apexcharts'
import { Fragment, useContext } from 'react'
import { Card, CardTitle, CardHeader, CardBody, Row, Col, Media, Button, UncontrolledCollapse, ListGroup, ListGroupItem, Badge } from 'reactstrap'
import ProofOfDelivery from './proofOfDelivery'
import RaiseRedressal from './raiseRedressal'
import RatingAndReview from './ratingAndReview'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useRTL } from '@hooks/useRTL'
import PaymentDetails from './paymentDetails'
import TrackDispatch from './trackDispatch'
import Timeline from '@components/timeline'
import { Share2, MessageSquare, PhoneCall, PenTool, User, FileText, MapPin, ShoppingBag, Server } from 'react-feather'

const ActionSection = () => {
    const [isRtl, setIsRtl] = useRTL()
    const themeColors = useContext(ThemeColors)

    
const data = [
  {
    title: 'Upload Proof of Delivery',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
      <ProofOfDelivery/>
    )
  },
  {
    title: 'Raise Redressal',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
      <RaiseRedressal/>
    )
  },
  {
    title: 'Rating and Reviews',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
      <RatingAndReview dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
    )
  },
  {
    title: 'Payment Details',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
      <PaymentDetails/>
    )
  },
  {
    title: 'Track Dispatch status',
    // content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    // meta: '12 min ago',
    customContent: (
      <TrackDispatch/>
    )
  }
  
]


  return (
    <Card className='Details-card'>
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

export default ActionSection