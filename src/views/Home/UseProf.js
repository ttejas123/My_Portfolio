import { useState, useContext } from 'react'
import { Button, Form, Input, Row, Col, Media, Card, CardTitle } from 'reactstrap'
import '@styles/base/pages/page-misc.scss'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import logo from '@src/assets/images/logo/ologo.png'
import googleLogo from '@src/assets/images/logo/glogo.png'
import amazonLogo from '@src/assets/images/logo/alogo.png'
import flipkartLogo from '@src/assets/images/logo/flogo.png'
import uberLogo from '@src/assets/images/logo/ulogo.png'
import byjusLogo from '@src/assets/images/logo/blogo.png'

const UseProf = props => {
    // const context = useContext(ThemeColors)
    return (
        <div className='mt-5 mb-3'>
            {/* <div className='w-100 text-center'>
                <p className='mb-2'>Trusted by the world’s fastest growing companies including:</p>

            </div> */}
            {/* <Row>
            <Col lg='2'></Col>
                <Col md='8' xs='12' lg='8'>
                
                <Col lg='12'>
                    <Row>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid d-block mx-auto' src={logo}  />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={googleLogo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={amazonLogo}  />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={flipkartLogo}  width='100'/>
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={uberLogo}  height='50' width='100'/>
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={byjusLogo}  />
                        </Col>              
                    </Row>
                    </Col>
                </Col>
            </Row> */}
            <Row>

                <Col md='12' xs='12' lg='12'>
                    {/* <div className='misc-wrapper'> */}
                    <div className='home-prof-wrapper'>
                        <div className='misc-inner'>
                            <div className='w-100 text-center'>
                                {/* <span className='text-capitalize'> */}
                                <h5 className='text-primary'>BUILT ON TRUST</h5>
                                {/* </span> */}
                                <h1 className='mb-1' style={{fontWeight:600}}>5,000+ businesses use Bidoya every month for their procurement needs.</h1>
                                <p className=' mb-2 mt-1 py-2 ' style={{textAlign:'center'}}>
                                   Whether a small Startup or a large Corporate, Bidoya works hands on with every stake-holder to make sure that we build the best B2B eco-system available in the country. Following is the list of brands who have trusted us
                                    {/* The fastest way to convert visitors into leads and sales on your website is with Social Proof Marketing. That's why 25,000+ businesses use Bidoya. */}
                                    </p>
                                    {/* <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 ml-1' style={{color:'#FD8D27'}} color='primary'>
           
           <small className='user-name font-weight-bold h4' style={{ color:'#ffffff'}}>Learn About Bidoya</small> 
               </Button.Ripple> */}
                            </div>
                        </div>

                    </div>

                </Col>
            </Row>
            <Row>
            <Col lg='1'></Col>
                <Col md='10' xs='12' lg='10'>
                
                <Col lg='12'>
                    <Row>
                        <Col md='2' xs='2' lg='2'>
                            <img className='img-fluid d-block mx-auto' src={logo}  />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={googleLogo} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' style={{marginTop:5}} src={amazonLogo}  />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={flipkartLogo} style={{marginTop:-5}} />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' style={{marginTop:'2px'}} src={uberLogo} width='80' />
                        </Col>
                        <Col md='2' xs='2' lg='2'>
                        <img className='img-fluid d-block mx-auto' src={byjusLogo}  />
                        </Col>              
                    </Row>
                    </Col>
                </Col>
            </Row>
               <div className='text-center mt-2 pt-2'>
            <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 ml-1' style={{color:'#FD8D27'}} color='primary'>
           
           <small className='user-name font-weight-bold h4' style={{ color:'#ffffff'}}>Learn About Bidoya</small> 
               </Button.Ripple>
               </div>
        </div>

    )
}
export default UseProf
