import classnames from 'classnames'
import Avatar from '@components/avatar'
import { UserPlus } from 'react-feather'
import { Card, CardBody, Button, Col, Row } from 'reactstrap'
import CardHeader from 'reactstrap/lib/CardHeader'

const TopProduct = ({ data }) => {
    const renderSuggestion = () => {
        return data.map((suggestion, index) => {
            return (
                // avatar: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
                // name: 'Airmax Tshirts',
                // brand : 'Nike',
                // unitsold : '231',
                // revenue :'1200'
                <div>
                    <Row>
                        <Col xl='4' md='4' xs='4' lg='4'>
                            {/* <Avatar className='mr-75' img={suggestion.avatar} imgHeight='40' imgWidth='40' /> */}
                            <img className="img-fluid" src={suggestion.avatar} alt="Product Page" />

                        </Col>
                        <Col xl='8' md='8' xs='8' lg='8'>
                            <Row>
                                <Col xl='12' md='12' xs='12'>
                                    <h6 className='mb-0'>{suggestion.name}</h6>
                                    <small className='text-muted'>{suggestion.brand}</small>
                                </Col>
                                <Col xl='6' md='6' xs='6'>
                                    <h6 className='mb-0'>Unit Sold</h6>
                                    <small className='text-muted'>{suggestion.unitsold}</small>
                                </Col>
                                <Col xl='6' md='6' xs='6'>
                                    <h6 className='mb-0'>Revenue</h6>
                                    <small className='text-muted'>{suggestion.revenue}</small>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
                // <div
                //   key={index}
                //   className={classnames('d-flex justify-content-start align-items-center', {
                //     'mt-2': index === 0,
                //     'mt-1': index !== 0
                //   })}
                // >
                //   <img className="img-fluid" src={suggestion.avatar} alt="Product Page" />
                //   <div className='profile-user-info'>
                //     <h6 className='mb-0'>{suggestion.name}</h6>
                //     <small className='text-muted'>{suggestion.mutualFriend}</small>
                //   </div>
                //   <div className='ml-auto'>
                //     <Button.Ripple className='btn-icon' color='primary' size='sm'>
                //       <UserPlus size={14} />
                //     </Button.Ripple>
                //   </div>
                // </div>
            )
        })
    }

    return (
        <Card>
            <CardHeader>
                <h5>Top Selling Products</h5>

            </CardHeader>
            <CardBody>
                {renderSuggestion()}
            </CardBody>
        </Card>
    )
}

export default TopProduct
