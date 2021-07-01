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
import team from '@src/assets/images/elements/team.jpg'
import CardBody from 'reactstrap/lib/CardBody'

const OurMission = props => {
    // const context = useContext(ThemeColors)
    return (
        <div className='pt-5 ' style={{marginTop:'-2.1rem'}}>
            <Row>

                <Col md='12' xs='12' lg='12'>
                    {/* <div className='misc-wrapper'> */}
                    <div className='home-prof-wrapper'>
                        <div className='misc-inner'>
                            <div className='w-100 text-center'>
                                {/* <span className='text-capitalize'> */}
                                <h5 className='text-primary pb-1'>About Bidoya</h5>
                                {/* </span> */}
                                <h1 className='mb-1' style={{fontWeight:600, fontSize:'40px', lineHeight:'40px'}}>We are on a mission to organise and scale business procurement for the new India</h1>
                                <p className=' mb-2 mt-1 py-2 ' style={{textAlign:'center', fontSize:'24px', lineHeight:'32px'}}>
                                Bidoya works with People teams across the globe to turn employees into high performers, managers into leaders, and companies into the best places to work.
                                    </p>  
                            </div>
                        </div>

                    </div>

                </Col>
            </Row>
               <CardBody className='pb-0' >
          <img src={team} alt='team Img' width='100%' height='50%'/>
      </CardBody>
        </div>

    )
}
export default OurMission
