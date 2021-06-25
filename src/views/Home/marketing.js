import React from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Input, CardText, Button } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight, DollarSign, ShieldOff, ShoppingCart } from 'react-feather'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'

export default function Marketting() {
    return (
        <div id='dashboard-analytics'>
            <Row className='pb-4 mt-4'>
                <Col lg='3' sm='12'>
                    {/* <Card className='card-congratulations'>
                        <CardBody className='text-center'>
                            <img className='congratulations-img-left' src={decorationLeft} alt='decor-left' />
                            <img className='congratulations-img-right' src={decorationRight} alt='decor-right' />
                            <Avatar icon={<Award size={28} />} className='shadow' color='primary' size='xl' />
                            <div className='text-center'>
                                <h1 className='mb-1 text-white'>Congratulations John,</h1>
                                <CardText className='m-auto w-75'>
                                    You have done <strong>57.6%</strong> more sales today. Check your new badge in your profile.
          </CardText>
                            </div>
                        </CardBody>
                    </Card> */}
                </Col>
                <Col lg='6' sm='12'>
                <CardBody>
                <h2 style={{fontSize:40}} className='text-center mb-2' >Join our newsletter and get
                            <br/>
$10 discount for your first order</h2>
                            <div className='mt-2 mt-lg-3'>
                            <Row>
                                <Col lg='2'>
                                </Col>
                    <Col lg='6'>
              <Input type='email' style={{fontSize:'18px', padding:'11px 25px 11px 25px', height: '48px', borderRadius:'48px'}} placeholder='Enter your email address' />
                    </Col>
                    <Col lg='4'>
                    <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 ml-1' style={{borderRadius:'48px', color:'#FD8D27'}} color='primary'>
           
          <small className='user-name font-weight-bold h4' style={{ color:'black'}}>Subscribe</small> 
              </Button.Ripple>
                    </Col>
                </Row>
                            </div>
                        </CardBody>

                </Col>
            </Row>
            <hr/>
            <Row>
                <Col lg='4'>
                <h5 className='user-name font-weight-bold text-center'>
                <ShoppingCart size={18} className='mr-1'/>
                    Trusted Sellers</h5>
                </Col>
                <Col lg='4'>
                <h5 className='user-name font-weight-bold h5 text-center'>
                <ShieldOff size={18} className='mr-1'/>
                Non-Contact Shopping</h5>
                </Col>
                <Col lg='4'>
                <h5 className='user-name font-weight-bold h5 text-center'>
                <DollarSign size={18} className='mr-1'/>
                Premium Benfits</h5>
                </Col>
            </Row>
            <hr/>
        </div>
    )
}
