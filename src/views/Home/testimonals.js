import React from 'react'
import { useRTL } from '@hooks/useRTL'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Input, CardText, Button } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight, DollarSign, ShieldOff, ShoppingCart } from 'react-feather'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'
import img11 from '@src/assets/images/elements/t1.jpg'
import img12 from '@src/assets/images/elements/t2.jpg'
import img1 from '@src/assets/images/banner/banner-12.jpg'
import img2 from '@src/assets/images/banner/banner-9.jpg'
import img3 from '@src/assets/images/banner/banner-8.jpg'
import img4 from '@src/assets/images/banner/banner-7.jpg'
import img5 from '@src/assets/images/banner/banner-20.jpg'
import SwiperCore, {
    Navigation,
    Pagination,
    EffectFade,
    EffectCube,
    EffectCoverflow,
    Autoplay,
    Lazy,
    Virtual
  } from 'swiper'
SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

import '@styles/react/libs/swiper/swiper.scss'

const params = {
    pagination: {
      clickable: true
    }
  }
export default function Testimonals() {
  const [isRtl, setIsRtl] = useRTL()
    return (
        <div id='dashboard-analytics' className=''>
       <section className='d-block' style={{backgroundColor:'#fefefe'}}>
            <div className='mx-4 pt-5 pb-5'>
                <Col lg='12'>
                <hr className='my-0'/>
                    <Row className='match-height mt-5 mb-5'>
                        <Col lg='7'>
                            <Row className='match-height'>
                            <Col lg='6' className='mt-5 pr-0' sm='12'>
                            <Col lg='12'>
                                    <div>
                                    <img src={img11} alt='img1' style={{borderRadius:'3%'}} className='mt-2'/>
                                    </div>
                                    </Col>
                            </Col>
                            <Col lg='6' className='px mt-2'>
                                <Row>
                                    <Col lg='8' sm='12' md='12'>
                                    <Card style={{backgroundColor:'#e0e9fa'}}>
                                        <CardBody>
                                            <div className='py-3'>
                                            <h2 className='text-center font-weight-bold' style={{fontSize:'2.8rem'}}>5000+</h2>
                                            <p className='text-center' style={{fontSize:'1.3rem'}}>Satisfied Customers</p>
                                            </div>
                                        </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg='12'>
                                    <div>
                                    <img src={img12} alt='img1' style={{borderRadius:'3%'}}/>
                                    </div>
                                    </Col>
                                </Row>
                            </Col>
                            </Row>
                        </Col>
                        <Col lg='5'>
                      <div className='d-block my-auto '>  
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide>
            <CardBody className='pb-4'>
                <h2 className='text-center'>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”
                </h2>
                <CardBody>
                    <h3 className='text-center font-weight-bold' style={{fontWeight:700, color:'black'}}>
                        Nikolas Bretten
                    </h3>
                    <h4 className='text-center'>Sales Manager</h4>
                </CardBody>
            </CardBody>
          </SwiperSlide>
          <SwiperSlide>
          <CardBody className='pb-4'>
                <h2 className='text-center'>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”                </h2>
                <CardBody>
                    <h3 className='text-center font-weight-bold' style={{fontWeight:700, color:'black'}}>
                        Tejas Thakare
                    </h3>
                    <h4 className='text-center'>Marketting Manager</h4>
                </CardBody>
            </CardBody>
          </SwiperSlide>
          <SwiperSlide>
          <CardBody className='pb-4'>
                <h2 className='text-center'>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”
                </h2>
                <CardBody>
                    <h3 className='text-center font-weight-bold' style={{fontWeight:700, color:'black'}}>
                        Ram Charan
                    </h3>
                    <h4 className='text-center'>Sales Manager</h4>
                </CardBody>
            </CardBody>
          </SwiperSlide>
          <SwiperSlide>
          <CardBody className='pb-4'>
                <h2 className='text-center'>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”
                </h2>
                <CardBody>
                    <h3 className='text-center font-weight-bold' style={{fontWeight:700, color:'black'}}>
                        Allu Arjun
                    </h3>
                    <h4 className='text-center'>Sales Manager</h4>
                </CardBody>
            </CardBody>
          </SwiperSlide>
          <SwiperSlide>
          <CardBody className='pb-4'>
                <h2 className='text-center'>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”
                </h2>
                <CardBody>
                    <h3 className='text-center font-weight-bold' style={{fontWeight:700, color:'black'}}>
                        Virat Kohli
                    </h3>
                    <h4 className='text-center'>Sales Manager</h4>
                </CardBody>
            </CardBody>
          </SwiperSlide>
        </Swiper>
      </CardBody>
      </div>
                        </Col>
                        </Row>
                </Col>
            </div>
       </section>
        </div>
    )
}
