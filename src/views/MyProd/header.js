import { Search } from 'react-feather'
import { Card, CardBody, CardText,  Row, Col, Button, Input, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap'
import '@styles/base/pages/page-knowledge-base.scss'
import './style.css'
import MTIMG from '@src/assets/images/banner/multi-tasking.png'
const Header = ({ searchTerm, setSearchTerm, handleFilter }) => {
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }

  return (
      <>
    <div id='' style={{marginTop:-28}}>
      <div
        className='heroSection'
      >
           <Col lg='12' className=''>
        <Row className=' '>
        
            <Col lg='9' className='ml-5 pl-5'>
                  <Row className='' >
                          <Col lg='8' md='6' sm='12'>
                              <CardBody className='px-0 pt-1 mt-4'>
                                    <Col lg='9' className='px-0'>
                                      <h1 style={{fontSize: '4.5rem', fontWeight:700, color:'White', textAlign:'left'}} className=''>Master The Art Of Self Control</h1>
                                    </Col>
                                    <Col lg='9' className='px-0 py-1'>
                                      <CardText className='mb-2'>
                                        <p className=' h3 mt-1 normalText' style={{color:'#9db6d7', fontSize:'1.4rem', marginTop:20, textAlign:'left', fontWeight:500}}>Learn the dynamics of Self Control from the master Selflearnlist and serial podcaster Tejas Thakare.</p>
                                      </CardText>
                                    </Col>
                                      <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 mainButton border-none' >
                                         <small className=' h4 bold mx-2 w-button' style={{color: 'white'}}>START YOUR JOURNEY</small> 
                                      </Button.Ripple>
                                     
                              </CardBody>
                          </Col>
                          <Col lg='4' sm='12' md='12'>
                              <img src={MTIMG} alt='logo' height='550' width='auto' style={{marginLeft:'-15rem'}}/>
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

export default Header
