import { useState, useContext } from 'react'
import { Button, CardText, CardBody, Row, Col, CardImg, Card, CardTitle } from 'reactstrap'
import '@styles/base/pages/page-misc.scss'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import logo from '@src/assets/images/logo/ologo.png'
import googleLogo from '@src/assets/images/avatars/raviKukreja.jpg'
// import googleLogo from '@src/assets/images/elements/p1.jpg'
import amazonLogo from '@src/assets/images/logo/alogo.png'
import flipkartLogo from '@src/assets/images/logo/flogo.png'
import uberLogo from '@src/assets/images/logo/ulogo.png'
import byjusLogo from '@src/assets/images/logo/blogo.png'

const Leadership = props => {
    // const context = useContext(ThemeColors)
    return (
        <div className='mt-5 mb-3'>
                <h1 className='text-primary text-center'>Our Leadership</h1>
                <div className='home-prof-wrapper'>
                        <div className='misc-inner'>
            <div className='w-100 text-center'>
            <p className=' mt-1 pb-1 ' style={{textAlign:'center'}}>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia commodo tristique. Cras rutrum sapien non augue venenatis blandit. Praesent ac ante eu lorem
                                    {/* The fastest way to convert visitors into leads and sales on your website is with Social Proof Marketing. That's why 125,000+ businesses use Bidoya. */}
                                    </p>
                                    </div>
                                    </div>
                                    </div>
                    <Row className=''>   
                        <Col lg='2' sm='2' md='2' xs='2'>
                        </Col>             
                <Col lg='8' md='8' sm='8' xs='8'>
                    <Row>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'> 
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
             Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'>
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
            Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'>
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
            Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'>
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
            Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'> 
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
             Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'>
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
            Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'>
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
            Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                        <Col md='6' xs='12' lg='3'>
                        <Card>
          <CardImg top src={googleLogo} alt='Card cap' />
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4'>
            <h4>Ravi Kukreja</h4>
            <h4>CEO of Bidoya</h4>
            </CardTitle>
            <CardText>
            Some description about the person 
            </CardText>
          </CardBody>
        </Card>
                        </Col>
                                 
                    </Row>
                    </Col>
            </Row>
        </div>

    )
}
export default Leadership
