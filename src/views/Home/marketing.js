import React from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Input, CardText, Button } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight, DollarSign, ShieldOff, ShoppingCart } from 'react-feather'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'
import img1 from '@src/assets/images/elements/marketting-bg.jpg'


export default function Marketting() {
    return (
        <div id='dashboard-analytics'
        style={{backgroundColor:'#ffffff'}}
        >
           
            <Row className=''>
                {/* <Col lg='1' sm='12'> */}
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
                {/* </Col> */}
                <Col lg='12' sm='12' className='mb-3'>
                <CardBody className='px-0 py-0'>
                    <section 
                    style={{backgroundImage: `url(${require('@src/assets/images/elements/marketting-bg.jpg').default})`,
                backgroundPosition:'center center',
                backgroundSize:'cover',
                height:250,
                width:'auto'
                }}
                    >
                        
                <h2 style={{fontSize:'40px', lineHeight:'40px'}} className='text-center mb-2 pt-4' >Join our newsletter and get
                            <br/>
$10 discount for your first order</h2>
<Row>
                                <Col lg='4' md='2' xs='2' className='pr-0'>
                                </Col>
                    <Col lg='3' md='6' xs='5' className='pl-0'>
              <Input type='email' style={{fontSize:'18px', padding:'11px 25px 11px 25px', height: '48px', borderRadius:'48px', backgroundColor:'#f2f2f2', color:'#495057'}} placeholder='Enter your email address' />
                    </Col>
                    <Col lg='1' md='2' xs='2'>
                    <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' style={{borderRadius:'48px', color:'#FD8D27'}} color='primary'>
           
          <small className='user-name font-weight-bold h4' style={{ color:'#ffffff'}}>Subscribe</small> 
              </Button.Ripple>
                    </Col>
                </Row>
                    </section>
                            <div className=''>
                            {/* <Row>
                                <Col lg='3'>
                                </Col>
                    <Col lg='4'>
              <Input type='email' style={{fontSize:'18px', padding:'11px 25px 11px 25px', height: '48px', borderRadius:'48px'}} placeholder='Enter your email address' />
                    </Col>
                    <Col lg='2'>
                    <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 ml-1' style={{borderRadius:'48px', color:'#FD8D27'}} color='primary'>
           
          <small className='user-name font-weight-bold h4' style={{ color:'#ffffff'}}>Subscribe</small> 
              </Button.Ripple>
                    </Col>
                </Row> */}
                            </div>
                        </CardBody>

                </Col>
            </Row>
            <div className='' style={{backgroundColor:'#ffffff', border:'1px solid #BFBFBF', boxShadow:'inset 0px 0px 10px #aaaaaa'}}>
            <div className='py-1'>
            <Row className=''>
                <Col lg='4' md='4' xs='4' style={{borderRight:'2px solid #000000'}}>
                <h5 className='user-name mb-0 font-weight-bold text-center'>
                <ShoppingCart size={18} className='mr-1'/>
                    Trusted Sellers</h5>
                </Col>
                <Col lg='4' md='4' xs='4' style={{borderRight:'2px solid #000000'}}>
                <h5 className='user-name mb-0 font-weight-bold h5 text-center'>
                <ShieldOff size={18} className='mr-1'/>
                Non-Contact Shopping</h5>
                </Col>
                <Col lg='4' md='4' xs='4'>
                <h5 className='user-name mb-0 font-weight-bold h5 text-center'>
                <DollarSign size={18} className='mr-1'/>
                Premium Benfits</h5>
                </Col>
            </Row>
            </div>
            </div>        
            </div>
    )
}
