import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'

import StatsVertical from './card'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import {
  Eye,
  Bookmark,
  User,
  MessageSquare,
  ShoppingBag,
  Heart,
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

const StatisticsCards = () => {
  const context = useContext(ThemeColors)

  return (
    <Fragment>
      
      <Row>
        {/* Stats With Icons */}
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Bookmark size={21} />} color='info' stats='80' statTitle='Job Bookmarked' />
        </Col>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<User size={21} />} color='warning' stats='72k' statTitle='User Applied' />
        </Col>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<PieChart size={21} />} color='danger' stats='12M' statTitle='Total Viewed' />
        </Col>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<MapPin size={21} />} color='primary' stats='72' statTitle='Job Posted' />
        </Col>
        {/* Stats With Icons */}
      </Row>

    </Fragment>
  )
}

export default StatisticsCards
