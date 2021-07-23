import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, Badge, Button } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Products from './ui-elements/cards/statistics/ProductTable'
import PrefPartner from './ui-elements/cards/statistics/prefPart'
import StatsCard from './ui-elements/cards/statistics/StatsCard'
import BillingDoc from './ui-elements/newCards/billingdoc.js'
import BidCriteria from './ui-elements/newCards/bidCriteria.js'
import Approvecustomization from './ui-elements/newCards/aproalcustomization.js'
import Acceptrej from './ui-elements/newCards/bidAcptRejt.js'
import Calculator from './ui-elements/newCards/calcu.js'
import Participents from './ui-elements/cards/advance/CardBrowserState'
import Comments from './ui-elements/cards/advance/Comments.js'
import ApprovedCostom from './ui-elements/cards/advance/ApprovedCostom.js'
import Address from './ui-elements/cards/analytics/Address'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  const { id } = useParams()
  const ShoopingAddre = {
    shopName: "Shivshakti so, CHS",
    shopNumber: "A/35, 0/4",
    streetName: "sector-15",
    pincode: 400708,
    state: "Maharashtra",
    city: "Airoli",
    country: "India"
  }
  const BillAddre = {
    shopName: "Shivshakti so, CHS",
    shopNumber: "A/35, 0/4",
    streetName: "sector-15",
    pincode: 400708,
    state: "Maharashtra",
    city: "Airoli",
    country: "India"
  }

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce' >
      <Row className='match-height' >
        <Col xl='8' md='6' xs='12' className='match-height'>
          <StatsCard userId = {id} cols={{ xl: '3', sm: '6' }} />
          {/* <Timeline /> */}
        </Col>
        
        <Col xl='4' md='2' xs='12' className='match-height'>
          <Participents colors={colors} trackBgColor={trackBgColor} />
          <ApprovedCostom colors={colors} trackBgColor={trackBgColor} />
          <Address title="Shipping Address" Address={ShoopingAddre}/>
          <Address title="Billing Address" Address={BillAddre}/>
        </Col>

        <Col xl='8' md='8' xs='12'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h4'>Users Response On Bid</CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <Acceptrej />
                </Col>
              </Row>
            </CardBody>  
          </Card>
          
          {/* <Timeline /> */}
        </Col>

        <Col xl='4' md='4' xs='12'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h4'>Billing Documents</CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <BillingDoc />
                </Col>
              </Row>
            </CardBody>  
          </Card>
          
          {/* <Timeline /> */}
        </Col>
    </Row>
    <Row>
        <Col xl='6' md='6' xs='12' className='match-height'>

        { /* here we Have Product list*/ }

         
              <Row >
                <Col lg='12' xs='12'>
                  <BidCriteria />
                </Col>
              </Row>

        </Col>

        <Col xl='6' md='6' xs='12' className='match-height'>

        { /* here we Have Product list*/ }
              <Row >
                <Col lg='12' xs='12'>
                  <Calculator />
                </Col>
              </Row>
        </Col>
    </Row>
    <Row>

         <Col xl='12' md='12' xs='12'>

        { /* here we Have Product list*/ }

          <Card className='card-statistics match-height'>
           <CardHeader>  
              <CardTitle tag='h4'>Approval of customization</CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <Approvecustomization />
                </Col>
              </Row>
            </CardBody>  
          </Card>

        </Col>
    </Row>
    <Row>
        <Col xl='12' md='12' xs='12'>

        { /* here we Have Product list*/ }

          <Card className='card-statistics match-height'>
           <CardHeader> 
               
              <CardTitle tag='h4'>Products</CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <Products />
                </Col>
              </Row>
            </CardBody>  
          </Card>

        </Col>
    </Row>
    <Row>
        <Col xl='12' md='12' xs='12'>

        { /* here we Have prefered partners list*/ }

          <Card className='card-statistics'>
            <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
              <div>
                <CardTitle tag='h4'>Preferred Partners</CardTitle>
              </div>
              
              <div className='d-flex mt-md-0 mt-1'>
                <Link to={`/master/bidDetails/preferredPart/add`}>
                  <Button className='ml-2' color='primary' >
                                              <Plus size={15} />
                                              <span className='align-middle ml-50'>Add Partner</span>
                  </Button>
                </Link>
              </div>
            </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <PrefPartner />
                </Col>
              </Row>
            </CardBody>  
          </Card>

        </Col>

      </Row>
      
    </div>
  )
}

export default EcommerceDashboard