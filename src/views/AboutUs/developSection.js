import React from 'react'
import { useRTL } from '@hooks/useRTL'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Input, CardText, Button } from 'reactstrap'
import Avatar from '@components/avatar'
import { Award, Check, ArrowRight, DollarSign, ShieldOff, ShoppingCart } from 'react-feather'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import temp1 from '@src/assets/images/elements/temp1.svg'
import temp2 from '@src/assets/images/elements/temp2.svg'
import temp3 from '@src/assets/images/elements/temp3.svg'


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

import '@styles/react/libs/swiper/swiper.scss'

export default function Develop() {
  const [isRtl, setIsRtl] = useRTL()
    return (
        <>
        <div id=''>
          <div
            className='pb-5'
            style={{
              // backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`,
             backgroundColor:'#fafbfc',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              marginTop:-1
            }}
          >
               <Col lg='12' className=''>
            <Row className=' '>
            <Col lg='1'>
            </Col>
            <Col lg='10' className=''>
            <Row className='' >
            <Col lg='8' md='6' sm='12' className='mt-5'>
            <CardBody className=' pt-1' style={{borderRight:'2px solid gray'}}>
            <Col lg='8' className='px-0'>
              <h1 style={{fontSize:'35px', lineHeight:'45px', fontWeight:400, color:'black', textAlign:'left'}} className=''>An innovative platform reimagined from ground up for B2B needs</h1>
              </Col>
              <Col lg='9' className='px-0 py-1'>
              <CardText className='mb-2'>
                <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'22px', lineHeight:'31px', marginTop:20, textAlign:'left', fontWeight:300}}>JPeople spend most of their waking hours at work — our goal is to make those hours better.
Lattice works with People teams across the globe to turn managers into leaders, employees into high-performers, and companies into the best places to work.</p>
              </CardText>
              </Col>
            </CardBody>
            </Col>
            <Col lg='4' sm='12' md='12'>
                <CardBody className='mt-lg-3'>
                <CardBody className='pb-0'>
                        <Row>
                    <Col lg='4'>
                        <img src={temp1} />
                    </Col>
                    <Col lg='8' className='' >
                    <h1 style={{fontSize:'30px', lineHeight:'20px', fontWeight:400, color:'black', textAlign:'left'}} className=''>2500+</h1>
              <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'15px',  textAlign:'left', fontWeight:300}}>Organizatons use bidoya</p>
                    </Col>
                </Row>
                </CardBody>
                <hr/>
                <CardBody className='pb-0'>
                        <Row>
                    <Col lg='4'>
                        <img src={temp2} />
                    </Col>
                    <Col lg='8' className=''>
                    <h1 style={{fontSize:'30px', lineHeight:'20px', fontWeight:400, color:'black', textAlign:'left'}} className=''>11.5M</h1>
              <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'15px',  textAlign:'left', fontWeight:300}}>Million dollars of business conducted</p>
                    </Col>
                </Row>
                </CardBody>   
                <hr/>
                <CardBody className='pb-0'>
                        <Row>
                    <Col lg='4'>
                        <img src={temp3} />
                    </Col>
                    <Col lg='8' className=''>
                    <h1 style={{fontSize:'30px', lineHeight:'20px', fontWeight:400, color:'black', textAlign:'left'}} className=''>15K</h1>
              <p className=' h3 mt-1 ' style={{color:'#464c52', fontSize:'15px',  textAlign:'left', fontWeight:300}}>Transactions handled since inception</p>
                    </Col>
                </Row>
                </CardBody>
                </CardBody>
                {/* <CardBody>
                    <CardBody>              
                    <h1 style={{fontSize:'35px', lineHeight:'20px', fontWeight:400, color:'black', textAlign:'left'}} className=''>2500+</h1>
              <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'15px',  textAlign:'left', fontWeight:300}}>Organizatons trust bidoya</p>
              </CardBody>
              <hr/>
              <CardBody>              
                    <h1 style={{fontSize:'35px', lineHeight:'20px', fontWeight:400, color:'black', textAlign:'left'}} className=''>2500+</h1>
              <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'15px',  textAlign:'left', fontWeight:300}}>Organizatons trust bidoya</p>
              </CardBody>
              <hr/>
              <CardBody>              
                    <h1 style={{fontSize:'35px', lineHeight:'20px', fontWeight:400, color:'black', textAlign:'left'}} className=''>2500+</h1>
              <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'15px',  textAlign:'left', fontWeight:300}}>Organizatons trust bidoya</p>
              </CardBody>
              </CardBody> */}
            </Col>
              </Row>
              </Col>
            </Row>
            </Col>
          </div>
        </div>
        </>
    )
}
