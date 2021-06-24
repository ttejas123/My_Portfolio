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
    <div id='knowledge-base-search'>
      <div
        className='knowledge-base-bg'
        style={{
          backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`,
          height: '500px'
        }}
      >
           <Col lg='12' className='mt-5'>
        <Row className='mt-5'>
        <Col lg='2'>
        </Col>
        <Col lg='8' className='mt-5'>
        <Row className='' >
        <Col lg='7' md='6' sm='12'>
       
        <CardBody className='px-0 pt-1'>
          <h1 className='text-primary font-weight-bolder'>Develop engaged & <br/>
            high-performing teams<br/>
            even when everyone is remote</h1>
          <CardText className='mb-2'>
            <p className=' h3 mt-1'>Supercharge your managers &
            <br/>
keep employees engaged from anywhere</p>
          </CardText>
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
        <Col lg='5' sm='12' md='12'>
            <img src={MTIMG} alt='logo' height='330' width='450'/>
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
