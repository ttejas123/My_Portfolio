import Chart from 'react-apexcharts'
import { Fragment, useContext } from 'react'
import { Card, CardTitle, CardHeader, CardBody, Row, Col } from 'reactstrap'
import ProofOfDelivery from './proofOfDelivery'
import RaiseRedressal from './raiseRedressal'
import RatingAndReview from './ratingAndReview'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useRTL } from '@hooks/useRTL'
import PaymentDetails from './paymentDetails'
import TrackDispatch from './trackDispatch'

const SellerSection = () => {
    const [isRtl, setIsRtl] = useRTL()
    const themeColors = useContext(ThemeColors)

  return (
    <Card className='Details-card'>
         <CardHeader className=''>
          <CardTitle tag='h4'>Action</CardTitle>
      </CardHeader>
    <CardBody>
          <ul>
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
        </ul>
    </CardBody>
  </Card>
  )
}

export default SellerSection