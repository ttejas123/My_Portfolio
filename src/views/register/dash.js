import StatesticCard from '../../components/dashboard/StatesticCard'
import { Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { TrendingUp, User, Box, DollarSign, Layers, FileText } from 'react-feather'


const Dash = () => {
    return (
        <div id='dashboard-ecommerce'>

            <Row className='match-height'>
                <Col xl='4' md='4' xs='12'>
                    <Card>
                        <CardBody>
                            <StatesticCard item={{ color: 'light-primary', icon: <TrendingUp size={50}></TrendingUp>, title: "72", subtitle: "Ticket Created" }}>
                            </StatesticCard>
                        </CardBody>
                    </Card>
                </Col>

            </Row>


        </div>
    )

}
export default Dash
