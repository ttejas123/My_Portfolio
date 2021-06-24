import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'

import Quaterlysales from './chart'
import Ordersreceived from './chart2'
import PlanCard from './chart3'
import StatsVertical from './crdS'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import {
  Eye,
  Bookmark,
  Users,
  MessageSquare,
  ShoppingBag,
  Heart,
  Package,
  Star,
  PieChart,
  Award,
  Truck,
  Cpu,
  MapPin,
  Server,
  Activity,
  AlertOctagon
} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
//1)Cards for - Profile score, Nos Order, Nos Products, Participated bids, Rating
// Card for Membership status
// 2) list of upcoming bids 
const StatisticsCards = () => {
  const context = useContext(ThemeColors)

  return (
    <Fragment>
      
      <Row>
        <Col  xl='4' lg='4' md='5'>
            <StatsVertical icon={<Star size={21} />} color='info' stats='10' statTitle='Profile score' />
        </Col>
        <Col   xl='4' lg='4' md='5'>
            <StatsVertical icon={<Users size={21} />} color='primary' stats='72' statTitle='Participated bids' />
        </Col>
        <Col   xl='4' lg='4' md='5'>
            <StatsVertical icon={<Star size={21} />} color='primary' stats='5' statTitle='Rating' />
        </Col>
        
        <Col xl='4' lg='4' md='5'>
          <PlanCard selectedUser={null} />
        </Col>
        <Col lg='4' sm='6'>
          <Quaterlysales danger={context.colors.danger.main} />
        </Col>
        <Col lg='4' sm='6'>
          <Ordersreceived kFormatter={kFormatter} warning={context.colors.warning.main} />
        </Col>
      </Row>

    </Fragment>
  )
}

export default StatisticsCards
