import Chart from 'react-apexcharts'
import { Fragment, useContext } from 'react'
import { Card, CardTitle, CardHeader, CardBody, Row, Col, Media, Button, UncontrolledCollapse, ListGroup, ListGroupItem, Badge } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useRTL } from '@hooks/useRTL'
import ActionSection from './actions'
import AppCollapse from '@components/app-collapse'

const BuyersAction = () => {
    const [isRtl, setIsRtl] = useRTL()
    const themeColors = useContext(ThemeColors)

const cdata = [
   {
      title: `Buyer's Action`,
      content: (
       <ActionSection/>
      )
    }
]

  return (
    <Fragment>
      
      <Card>
        <CardBody>
        <AppCollapse data={cdata} />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default BuyersAction