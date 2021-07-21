import Chart from 'react-apexcharts'
import { Fragment, useContext } from 'react'
import { Card, CardTitle, CardHeader, CardBody, Row, Col, Media, Button, UncontrolledCollapse, ListGroup, ListGroupItem, Badge } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useRTL } from '@hooks/useRTL'
import AppCollapse from '@components/app-collapse'
import SellerActionSection from './action'

const SellersAction = () => {
    const [isRtl, setIsRtl] = useRTL()
    const themeColors = useContext(ThemeColors)

const cdata = [
   {
      title: `Seller's Action`,
      content: (
       <SellerActionSection/>
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

export default SellersAction