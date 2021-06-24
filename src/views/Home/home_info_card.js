import React from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, CardText, Button } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight } from 'react-feather'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'

export default function home_info_card() {
    return (
        <div id='dashboard-analytics'>
            <Row>
                <Col lg='7' sm='12'>
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
                <Col lg='4' sm='12'>
                    <Card>
                        <CardBody>
                            <h5>Engagement</h5>
                            <h2 className='font-weight-bolder'>Engage your community</h2>
                            <CardText>Streamline social monitoring and improve responsiveness with a unified inbox.
</CardText>
                            <div className='mt-2 mt-lg-3'>
                                <Button.Ripple color='flat-success' className='font-weight-bolder'>
                                    <span className='ml-25'>Explore our Engagement features</span>
                                    <ArrowRight size={30} />
                                </Button.Ripple>
                            </div>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}
