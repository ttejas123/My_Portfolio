import React, {useState} from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, CardText, Button, CardImg } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight } from 'react-feather'
import decorationLeft from './asset/p5.jpg'
import mainbg from './asset/blackbg.jpg'
import decorationRight from './asset/p6.jpg'
import decorationRight1 from './asset/p7.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import './style.css'
export default function home_info_card() {
    const [subText, setsubText] = useState({subcardText:'Listening', subcardDetail:'Understand Your Audience'})
    const [selectedImage, setSelectedImage] = useState(decorationLeft)
    const [color, setColors] = useState('#ffff66')
    const [selected, setselected] = useState(1)
    return (
        <div style={{
          //marginTop:-25,
          backgroundColor: 'fff'
        }}

        className="homeCard mt-lg-5  pl-lg-3"

        >
            {/* dashboard-analytics */}

            <Row>
                <Col lg='5' sm='12' className='pl-lg-4 mb-5 mb-lg-0'>
                    <div className='cardbackgroundImg' style={{backgroundColor:`${color}`}}>  
                        <CardBody className='m-0 p-0  '>
                        <Row className='d-flex align-items-center mx-auto' style={{width: "100%"}} >
                            <Col lg='12' xs='12'>
                                <img className='rounded backImage' src={mainbg} alt='Card image' />
                            
                            </Col>
                            <Col lg='12' xs='12'>
                            <img className='rounded frntImage '  src={selectedImage} alt='Card image' />

                            
                            </Col>
                        </Row>
                        </CardBody>  
                    </div>
                </Col>

                <Col lg='7' sm='12' className='buttonClasses d-lg-flex align-items-center '>
                                <div className='col-0 col-lg-3'></div>
                                <div className='col-12 col-lg-6'>
                                       
                                            <h1 className='mb-2 font-weight-bold dark' style={{fontWeight:600}}><b>{subText.subcardDetail}</b></h1>
                                            <p>Streamline social monitoring and improve responsiveness with a unified inbox.</p>
                                            <div className='mb-3'>
                                                <div className='cursor-pointer'>
                                                    <span className='flatSuccess mr-1 display-5'> Explore our Engagement features</span>
                                                    <ArrowRight style={{color:'#33cc33'}} size={15} />
                                                </div>
                                            </div>
                                            <Row className ='align-items-center'>
                                                <Col lg='4' md='4' sm='12' >
                                                    <div className={ selected === 1 ? ("border rounded border-secondary buttonss mb-1") : ("border-none buttonss mb-1")}>  
                                                        <Button.Ripple block className='' color='dark'  onClick={e => {
                                                                
                                                                setsubText({ subcardText: 'Bid', subcardDetail: 'Understand Your Audience' })
                                                                setSelectedImage(decorationLeft)  
                                                                setColors('#ffff66')
                                                                setselected(1)
                                                            }}>
                                                                 BID
                                                        </Button.Ripple>
                                                    </div>
                                                </Col>
                                                <Col lg='4' md="4" sm='12' >
                                                    <div className={ selected === 2 ? ("border rounded border-secondary buttonss mb-1") : ("border-none buttonss mb-1")}>
                                                        <Button.Ripple block className='' color='dark'  onClick={e => {
                                                                setsubText({ subcardText: 'Bulk', subcardDetail: 'Reach Your Audience' })
                                                                setSelectedImage(decorationRight)
                                                                setColors('#00cc00')
                                                                setselected(2) 
                                                            }}>
                                                                BULK
                                                        </Button.Ripple>
                                                    </div>
                                                </Col>
                                                <Col lg='4' md="4" sm='12' >
                                                    <div className={ selected === 3 ? ("border rounded border-secondary buttonss mb-1") : ("border-none buttonss mb-1")}>
                                                        <Button.Ripple block  className='' color='dark'  onClick={e => {
                                                                setsubText({ subcardText: 'Buy', subcardDetail: 'Engage Your Community' })
                                                                setSelectedImage(decorationRight1)  
                                                                setColors('#0033cc')
                                                                setselected(3)
                                                            }}>
                                                                BUY
                                                        </Button.Ripple>
                                                    </div>
                                                </Col>
                                                
                                            </Row>
                                </div>   
                           
                </Col>
            </Row>
        </div>
    )
}
