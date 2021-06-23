import StatesticCard from '../../../components/dashboard/StatesticCard'
import { Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// import { TrendingUp, User, Box, DollarSign, Layers, FileText } from 'react-feather'
import { TrendingUp, User, Box, DollarSign, Layers, FileText} from 'react-feather'
// import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import classnames from 'classnames'
import CCExecutiveDashboardStatistic from './CCExecutiveDashboardStatistic'
const DashInfoCard = ({cols}) => {
    const data = [
        {
          title: '65k',
          subtitle: 'Corporate',
          color: 'light-primary',
          icon: <TrendingUp size={24} />
        },
        {
          title: '765',
          subtitle: 'KYCs',
          color: 'light-info',
          icon: <User size={24} />
        },
        {
          title: '40',
          subtitle: 'Ticket',
          color: 'light-danger',
          icon: <FileText size={24} />
        },
        {
          title: '70',
          subtitle: 'Customization',
          color: 'light-success',
          icon: <Layers size={24} />
        }
      ]
      const renderData = () => {
        return data.map((item, index) => {
          const margin = Object.keys(cols)
          return (
            //   <Col>
            <StatesticCard item={{ color: item.color, icon: item.icon, title: item.title, subtitle: item.subtitle }} />

            // <Col cols={{ xl: '12', sm: '12', md:'12', xs:'12' }}>
            //       {/* // <StatesticCard item={{ color: 'light-primary', icon: <TrendingUp size={50}></TrendingUp>, title: "72", subtitle: "Ticket Created" }}> */}
            //       <StatesticCard item={{ color: item.color, icon: item.icon, title: item.title, subtitle: item.subtitle }} />
            //   </Col>
          )
        })
    }
    
    return (
        <CCExecutiveDashboardStatistic cols={{ xl: '3', sm: '6' }} />

        // <div id='dashboard-ecommerce'>
        //     <Row className='match-height'>
        //         <Col xl='12' md='12' xs='12'>
        //             <Card>
        //                 <CardBody>
        //                     {/* <StatesticCard item={{ color: 'light-primary', icon: <TrendingUp size={50}></TrendingUp>, title: "72", subtitle: "Ticket Created" }}>
        //                     </StatesticCard> */}
        //                     <Row>{renderData()}</Row>
        //                 </CardBody>
        //             </Card>
        //         </Col>

        //     </Row>


        // </div>
    )

}
export default DashInfoCard
