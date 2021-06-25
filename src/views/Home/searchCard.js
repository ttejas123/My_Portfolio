import { Card, CardBody, CardTitle,  Row, Col, Media, Input, FormGroup, Label, InputGroupText, Form, CardText, Button } from 'reactstrap'
import { Search } from 'react-feather'
import classnames from 'classnames'
import Nouislider from 'nouislider-react'
import '@styles/react/libs/noui-slider/noui-slider.scss'
import { useRTL } from '@hooks/useRTL'
import { useState } from 'react'

const SearchCard = () => {
 
  const cols = { md: '3', sm: '6' }
    const data = [
        {
          title: 'Price Range',
          subtitle: '1000-2000'
        },
        {
          title: 'Inventory',
          subtitle: '1k'
        },
        {
          title: '#Sellers',
          subtitle: '10'
        },
        {
          title: 'Created Date',
          subtitle: '10-11-12'
        }
      ]
    
      const renderData = () => {
        return data.map((item, index) => {
          const margin = Object.keys(cols)
          return (
            <Col
              key={index}
              {...cols}
              className={classnames({
                [`mb-2 mt-0 mb-${margin[0]}-0`]: index !== data.length - 1
              })}
            >
              <Media>
                <Media className='my-auto' body>
                  <h5 className='font-weight-bolder text-center mb-0'>{item.title}</h5>
                  <CardText className='font-small-3 text-center mb-0'>{item.subtitle}</CardText>
                </Media>
              </Media>
            </Col>
          )
        })
      }
    
    const onChange = e => {
        if (handleFilter) {
          handleFilter(e)
        } else {
          setSearchTerm(e.target.value)
        }
      }
    
    return (
        <div className='d-flex mx-auto' style={{marginTop:'-100px'}}>
            <Col lg='12'>
                <Row>
                <Col lg='3'>
                </Col>
                <Col lg='6'>
        <Card>
            {/* <CardBody className='pb-0'> 
                <CardTitle>
                   <h3 className=' font-weight-bolder text-center' >What products do you want to procure today ?</h3>
                </CardTitle>
                <Row>
                <Col lg='1'>
                                </Col>
                    <Col lg='7'>
              <Input onChange={e => onChange(e)} placeholder='Ask a question...' />
                    </Col>
                    <Col lg='4'>
                    <Button.Ripple className='mb-1  mr-0 ml-1' color='primary'>
            <Search size={14} />
          <small className='user-name font-weight-bold h6 ml-1 h4' style={{ color:'#ffffff'}}>Search</small> 
              </Button.Ripple>
                    </Col>
                </Row>
            </CardBody> */}
            <hr className='mt-0'/>
            <CardBody className=''>
            <CardTitle>
                   <h3 className=' font-weight-bolder text-center' >What are you looking for ?</h3>
                </CardTitle>
            <Row className='px-2'>
              <Col md='8' sm='6'>
              <FormGroup>
          <Input type='text' id='category' placeholder='Product Name'  />
        </FormGroup>
              </Col>
              <Col md='4' sm='6'>
              <FormGroup>
          <Input type='text' id='category' placeholder='Qty?'/>
        </FormGroup>
              </Col>
              <Col md='9' sm='6'>
              <FormGroup className='mt-1'>
              <Nouislider
          start={[40, 60]}
          direction={'ltr'}
          behaviour={'drag'}
          connect={true}
          range={{
            min: 20,
            max: 80
          }}
        />
          <Label for='default-range' className='d-block mt-1'>
              <span className='d-block mx-auto text-center font-weight-bold h6 font-italic'>
              Budget / Unit
              </span>
              </Label>
        </FormGroup>
              </Col>
              <Col md='3' sm='6'>
              <Button.Ripple className='mb-1  mr-0 ml-1' color='primary'>
            <Search size={14} />
          <small className='user-name font-weight-bold h6 ml-1 h4' style={{ color:'#ffffff'}}>Search</small> 
              </Button.Ripple>
              </Col>
          </Row>
      </CardBody>
        </Card>
        </Col>
        <Col lg='3'>
                </Col>
        </Row>
       
        </Col>
        </div>
    )
}

export default SearchCard
