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
            <Row className='match-height'>
                <Col lg='7' sm='12'>
                <Card className='card-statistics p-0'>  
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
                <Col lg='5' sm='12' className='customizer-toggle d-flex align-items-center justify-content-center'>
                   
                    <Card>
                        <CardBody>
                <h5>{subText.subcardText}</h5>
                <h2 className='font-weight-bolder'>{subText.subcardDetail}</h2>
                            <CardText>Streamline social monitoring and improve responsiveness with a unified inbox.
                            </CardText>
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
                            
                        </CardBody>
                    </Card>
                    
                    {/* <div class="mb0-l mb400-m mb600 ml-auto-l mw-33p-l mw-66p-m mx-auto-m pb0-l pb500 pb650-m px350-ns px450 w-100p z1" id="pillarContentContainer"><div class="db o-100 amp-wp-4db8320" data-amp-bind-class="(pillarCarouselState == 0 ? 'db o-100' : 'dn o-0')" id="blurbListening" data-amp-original-style="transition: opacity 0.3s ease-out;"><h2 class="f400-ns f500"> Listening </h2> <h3 class="f800-ns f900 mt400-m mt450"> Understand your audience </h3><p class="f400-ns f500 mt400-l"> Uncover trends and actionable insights from social data to inform brand and business strategy. </p><a class="db mt400-l" href="/features/social-media-listening/"><span class="fw-bold items-baseline"> Explore our Listening <span class="flex-nowrap inline-flex items-baseline">features <i aria-hidden="true" class="fa-arrow-right fa-xs fas pl300"></i></span> </span> </a></div> 
                    <div class="flex flex-wrap items-center justify-between mt600-m mt650 mt700-l"><div class="mw-50p pr350 w-100p"><button class="b--neutral-200 ba bg--neutral-0 br600 button-reset bw500 fw-bold pl400 py300 shadow200 tl w-100p" data-amp-bind-class="'w-100p py300 pl400 tl fw-bold br600 ba bw500 b--neutral-200 ' + (pillarCarouselState == 0 ? 'bg--neutral-0 shadow200' : 'bg--neutral-100')" on="tap:AMP.setState({ pillarCarouselState: 0 })"> Listening </button> </div> <div class="mw-50p pl350 w-100p"><button class="b--neutral-200 ba bg--neutral-100 br600 button-reset bw500 fw-bold pl400 py300 tl w-100p" data-amp-bind-class="'w-100p py300 pl400 tl fw-bold br600 ba bw500 b--neutral-200 ' + (pillarCarouselState == 1 ? 'bg--neutral-0 shadow200' : 'bg--neutral-100')" on="tap:AMP.setState({ pillarCarouselState: 1 })"> Publishing </button> </div><div class="mw-50p pr350 w-100p"><button class="b--neutral-200 ba bg--neutral-100 br600 button-reset bw500 fw-bold mt450 pl400 py300 tl w-100p" data-amp-bind-class="'w-100p py300 pl400 tl fw-bold mt450 br600 ba bw500 b--neutral-200 ' + (pillarCarouselState == 2 ? 'bg--neutral-0 shadow200' : 'bg--neutral-100')" on="tap:AMP.setState({ pillarCarouselState: 2 })"> Engagement </button> </div><div class="mw-50p pl350 w-100p"><button class="b--neutral-200 ba bg--neutral-100 br600 button-reset bw500 fw-bold mt450 pl400 py300 tl w-100p" data-amp-bind-class="'w-100p py300 pl400 tl fw-bold mt450 br600 ba bw500 b--neutral-200 ' + (pillarCarouselState == 3 ? 'bg--neutral-0 shadow200' : 'bg--neutral-100')" on="tap:AMP.setState({ pillarCarouselState: 3 })"> Analytics </button> </div></div></div>
                    */}

                </Col>
            </Row>
        </div>
    )
}
