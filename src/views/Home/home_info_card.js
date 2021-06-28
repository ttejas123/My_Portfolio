import React, {useState} from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, CardText, Button, CardImg } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight } from 'react-feather'
import decorationLeft from './asset/p1.png'
import mainbg from './asset/blackbg.jpg'
import decorationRight from './asset/p2.png'
import decorationRight1 from './asset/p3.png'
import decorationRight2 from './asset/p4.png'
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
        className="homeCard pt-2"
        >
            {/* dashboard-analytics */}

            <Row>
                <Col lg='5' sm='12'>
                <Card className=' m-0  p-0' style={{height: "85vh", backgroundColor:`${color}`}}>  
                    <CardBody className='m-0 p-0  '>
                    <Row className='d-flex align-items-center mx-auto' style={{width: "100%"}} >
                        <Col lg='12' xs='12'>
                            <img className='rounded backImage' width = "115%" src={mainbg} alt='Card image' />
                        
                        </Col>
                        <Col lg='12' xs='12'>
                        <img className='rounded shadow bg-black' style={{left: "10%", top: "120px", zIndex: "2",  position: "absolute"}} width = "115%" src={selectedImage} alt='Card image' />

                        
                        </Col>
                    </Row>
                    </CardBody>  
                </Card>
                </Col>
                <Col lg='7' sm='12' className=' d-flex align-items-center '>
                    <Row >
                            <Col  lg='5'></Col>
                   
                            <Col lg='7' sm='12' className=" align-items-center ">
                                <div style={{color: 'black'}}>
                                            <h4 className='mb-lg-2'><b>{subText.subcardText}</b></h4>
                                            <h1 className='mb-lg-2 details font-weight-bold dark'><b>{subText.subcardDetail}</b></h1>
                                            <CardText><b>Streamline social monitoring and improve responsiveness with a unified inbox.</b></CardText>
                                            <div className='mb-lg-3'>
                                                <div className='cursor-pointer'>
                                                    <span className='flatSuccess mr-1 display-5'> <b>Explore our Engagement features</b></span>
                                                    <ArrowRight style={{color:'#33cc33'}} size={15} />
                                                </div>
                                            </div>
                                            <Row>
                                                <Col lg='6' sm='12' >
                                                    <div className={ selected === 1 ? ("border rounded border-secondary buttonss mb-75") : ("border-none buttonss mb-75")}>  
                                                        <Button.Ripple block className='' color='dark'  onClick={e => {
                                                                console.log("Press")
                                                                setsubText({ subcardText: 'Bid', subcardDetail: 'Understand Your Audience' })
                                                                setSelectedImage(decorationLeft)  
                                                                setColors('#ffff66')
                                                                setselected(1)
                                                            }}>
                                                                 BID
                                                        </Button.Ripple>
                                                    </div>
                                                </Col>
                                                <Col lg='6' sm='12' >
                                                    <div className={ selected === 2 ? ("border rounded border-secondary buttonss mb-75") : ("border-none buttonss mb-75")}>
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
                                                <Col lg='6' sm='12' >
                                                    <div className={ selected === 3 ? ("border rounded border-secondary buttonss mb-75") : ("border-none buttonss mb-75")}>
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
                                                <Col lg='6' sm='12' >
                                                    <div className={ selected === 4 ? ("border rounded border-secondary buttonss mb-75") : ("border-none buttonss mb-75")}>
                                                        <Button.Ripple block className='' color='dark'  onClick={e => {
                                                                setsubText({ subcardText: 'Sell', subcardDetail: 'Measure Your Performance' })
                                                                setSelectedImage(decorationRight2) 
                                                                setColors('#ff9966')
                                                                setselected(4)
                                                            }}>
                                                                SELL
                                                        </Button.Ripple>
                                                    </div>
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
