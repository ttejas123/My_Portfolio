import React, {useState} from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, CardText, Button, CardImg } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight } from 'react-feather'
import decorationLeft from './asset/p1.png'
import decorationRight from './asset/p2.png'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function home_info_card() {
    const [subText, setsubText] = useState({subcardText:'Listening', subcardDetail:'Understand your audience'})
    const [selectedImage, setSelectedImage] = useState(decorationLeft)
    
    return (
        <div id=''>
            {/* dashboard-analytics */}

            <Row>
                <Col lg='5' sm='12'>
                <Card className='card-statistics p-0 bg-primary' style={{height: "90vh"}}>  
                    <CardBody className='m-0 p-0 bg-primary '>
                    <Row className='match-height white'>
                        <Col lg='12' xs='12'>
                        <img className='rounded congratulations-img-right' width = "50%" src={selectedImage} alt='Card image' />

                        {/* <img className='rounded img-fluid congratulations-img-right' src={selectedImage} alt='Card image' /> */}
                        </Col>
                    </Row>
                    </CardBody>  
                </Card>
                </Col>
                <Col lg='7' sm='12' className='customizer-toggle align-items-center  px-2'>
                    <Row className="px-xl-1 pt-lg-5 pt-lg-3 pb-5 pb-lg-5 ">
                   
                    <Col lg='6' sm='12' className=" align-items-center  px-2 p-lg-2">
                        <div className="px-xl-2 mx-auto">
                                    <h5>{subText.subcardText}</h5>
                                    <h2 className='font-weight-bolder'>{subText.subcardDetail}</h2>
                                    <CardText>Streamline social monitoring and improve responsiveness with a unified inbox.</CardText>
                                    <div className='mt-2 mt-lg-3'>
                                        <Button.Ripple color='flat-success' className='font-weight-bolder'>
                                            <span className='ml-25'>Explore our Engagement features</span>
                                            <ArrowRight size={30} />
                                        </Button.Ripple>
                                    </div>
                                    <Row>
                                        <Col lg='6' sm='12' md='6'>
                                              
                                            <Button.Ripple block className='mb-75' color='dark' outline onClick={e => {
                                                    console.log("Press")
                                                    setsubText({ subcardText: 'Bid', subcardDetail: 'Understand your audience' })
                                                    setSelectedImage(decorationLeft)  
                                                   
                                                }}>
                                                     BID
                                            </Button.Ripple>
                                        </Col>
                                        <Col lg='6' sm='12' md='6'>
                                            <Button.Ripple block className='mb-75' color='dark' outline onClick={e => {
                                                    setsubText({ subcardText: 'Bulk', subcardDetail: 'Reach your audience' })
                                                    setSelectedImage(decorationRight) 
                                                }}>
                                                    BULK
                                            </Button.Ripple>
                                        </Col>
                                        <Col lg='6' sm='12' md='6'>
                                            <Button.Ripple block  className='mb-75' color='dark' outline onClick={e => {
                                                    setsubText({ subcardText: 'Buy', subcardDetail: 'Engage your community' })
                                                    setSelectedImage(decorationLeft)  

                                                }}>
                                                    BUY
                                            </Button.Ripple>
                                        </Col>
                                        <Col lg='6' sm='12' md='6'>
                                            <Button.Ripple block className='mb-75' color='dark' outline onClick={e => {
                                                    setsubText({ subcardText: 'Sell', subcardDetail: 'Measure your performance' })
                                                    setSelectedImage(decorationRight) 
                                                }}>
                                                    SELL
                                            </Button.Ripple>
                                        </Col>
                                    </Row>
                        </div>   
                    </Col>
                    
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
