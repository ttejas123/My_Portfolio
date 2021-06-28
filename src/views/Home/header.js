import { Search } from 'react-feather'
import { Card, CardBody, CardText,  Row, Col, Button, Input, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap'
import '@styles/base/pages/page-knowledge-base.scss'
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
        className=''
        style={{
          // backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`,
         backgroundColor:'#f8f1e8',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          marginTop:-1
        }}
      >
           <Col lg='12' className=''>
        <Row className=' '>
        <Col lg='1'>
        </Col>
        <Col lg='9' className=''>
        <Row className='' >
        <Col lg='8' md='6' sm='12' className='mt-5'>
        <CardBody className='px-0 pt-1 mt-4'>
        <Col lg='10' className='px-0'>
          <h1 style={{fontSize:'35px', lineHeight:'45px', fontWeight:400, color:'black', textAlign:'left'}} className=''>✋🏻 Stop wasting time searching, negotiating & following with your business vendors</h1>
          </Col>
          <Col lg='10' className='px-0 py-1'>
          <CardText className='mb-2'>
            <p className=' h3 mt-1' style={{color:'#464c52', fontSize:'22px', lineHeight:'31px', marginTop:20, textAlign:'left', fontWeight:300}}>Join Bidoya to streamline all your procurement work and start concentrating on your growth again</p>
          </CardText>
          </Col>
          <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='success'>
          <small className='user-name font-weight-bold h6' style={{ color:'black'}}>Explore Bidoya</small> 
              </Button.Ripple>
          {/* <Form className='kb-search-input' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input value={searchTerm} onChange={e => onChange(e)} placeholder='Ask a question...' />
            </InputGroup>
          </Form> */}
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
