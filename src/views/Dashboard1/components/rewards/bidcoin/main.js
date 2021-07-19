import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'

import Ordersreceived from './card'
import Datatable from './datatable'
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
        <Col lg='12' sm='12'> 
          <Ordersreceived kFormatter={kFormatter} warning={context.colors.warning.main} />
        </Col>
        <Col lg='12' sm='12'> 
          <Datatable />
        </Col>
      </Row>

    </Fragment>
  )
}

export default StatisticsCards
