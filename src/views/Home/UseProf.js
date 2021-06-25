import { useState, useContext } from 'react'
import { Button, Form, Input, Row, Col, Media, Card, CardTitle } from 'reactstrap'
import '@styles/base/pages/page-misc.scss'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import logo from '@src/assets/images/logo/bidoyaLogo.png'

const UseProf = props => {
    // const context = useContext(ThemeColors)
    return (
        <div className=''>
            <div className='w-100 text-center'>
                <p className='mb-2'>Trusted by the world’s fastest growing companies including:</p>

            </div>
            <Row>
                <Col md='12' xs='12' lg='12'>
                    <Row>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid' src={logo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid' src={logo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid' src={logo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid' src={logo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid' src={logo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid' src={logo} />
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row>

                <Col md='12' xs='12' lg='12'>
                    {/* <div className='misc-wrapper'> */}
                    <div className='home-prof-wrapper'>
                        <div className='misc-inner p-2 p-sm-3'>
                            <div className='w-100 text-center'>
                                {/* <span className='text-capitalize'> */}
                                <h5 className='text-primary'>MOST POPULAR PRODUCT</h5>
                                {/* </span> */}
                                <h1 className='mb-1'>25,000+ online businesses use Bidoya to convert visitors into leads and sales.</h1>
                                <p className='mb-2'>
                                    The fastest way to convert visitors into leads and sales on your website is with Social Proof Marketing. That's why 25,000+ businesses use Bidoya.
                                    </p>
                                <Button color='primary' className='btn-sm-block mb-1'>
                                    Learn about Bidoya
                                </Button>
                            </div>
                        </div>

                    </div>

                </Col>
            </Row>

        </div>

    )
}
export default UseProf
