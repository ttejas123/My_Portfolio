import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import NumberInput from '@components/number-input'
import { Card, Row, Col, CardHeader, CardTitle, CardBody, CardText, Label, Alert, Badge, Button } from 'reactstrap'
import classnames from 'classnames'


const NumberInputBasic = () => {
  const [count, setCount] = useState(0)

 const colorsData = ["primary", "success", "warning", "danger", "info"]
 const [size, setSize] = useState('small')
  // ** Renders color options
  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')
 
  // ** Renders color options
  const renderColorOptions = () => {
    
    return colorsData.map(color => {
    
      return (
        <li
          key={color}
          className={ color === selectedColor ? (`d-inline-block rounded-circle border-${color}`) : ('d-inline-block')}
          onClick={() => setSelectedColor(color)}
        >
          <div style={{ borderRadius: "50%", position: "relative", cursor: "pointer", padding: "3px"}} className={`b-${color}`}>
            <div style={{ height: "18px", width: "18px", borderRadius: "50%"}} className={`bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }


  return (
    <Card style={{backgroundColor:" #f2f2f2"}}>
      <CardHeader>
        <Badge color='light-danger'>
          OUT OF STOCK
        </Badge>
      </CardHeader>

      <div className="p-0 m-0 pl-2 d-flex mb-1">
        <><h1 className="p-0 m-0">₹89000.74</h1> <div className='text-decoration-underline'>₹600.24 Save</div></>
      </div>
          <div className="p-0 m-0 pl-2 pb-1 ">
              <h4 className="pb-1"><b>Color</b></h4>
              <div className="d-flex">
                {renderColorOptions()}
              </div>
          </div>
      
      <div className="p-0 m-0 pl-2">
        <h4 className="pb-1"><b>Size</b></h4>
        <div className="d-flex">
          <h4 onClick={() => setSize("small")} style={{cursor: "pointer"}} className={ size === 'small' ? ('mr-2 border border-dark') : ('mr-2 border-none')}>
            <Badge className="pl-1 pr-1" style={{backgroundColor:"white", color:"black"}}>
              S
            </Badge>
          </h4>
          <h4 onClick={() => setSize("mid")} style={{cursor: "pointer"}} className={ size === 'mid' ? ('mr-2 border border-dark') : ('mr-2 border-none')}>
            <Badge className="pl-1 pr-1" style={{backgroundColor:"white", color:"black"}}>
              M
            </Badge>
          </h4>
          <h4 onClick={() => setSize("large")} style={{cursor: "pointer"}} className={ size === 'large' ? ('mr-2 border border-dark') : ('mr-2 border-none')}>
            <Badge className="pl-1 pr-1" style={{backgroundColor:"white", color:"black"}}>
              L
            </Badge>
          </h4>
        </div>
      </div>
      <div className="p-0 m-0 pl-1 pr-1">
        <Row>
          <Col md='12' xs='12'>
              <h4 className="mt-2 mb-2"><b>Quantity</b></h4>
          </Col>
          <Col md='12' xs='12'>  
            <NumberInput id='basic-number-input' value={count} onChange={count => setCount(count)} />
          </Col>
          <Col md='12' xs='12'>
              <div className=" mb-2 mt-2 d-flex ">
                <Button.Ripple tag={Link} to='/login' className='round' style={{width:"50%", marginRight: "10px"}} color='primary' outline>
                   Add To Cart
                </Button.Ripple>
                <Button.Ripple tag={Link} to='/login' className='round' style={{width:"50%"}} color='primary' outline>
                   Create RFQ
                </Button.Ripple>
              </div> 
          </Col>
          
        </Row>
      </div>

      <CardBody className="p-0 m-0 pl-2 pb-3">
        <Row>

          <Col md='6' xs='6'>
              <a>Add to wishlist</a>
          </Col>
          <Col md='6' xs='6'>  
              <a>Add to Compare</a>
          </Col>
          
        </Row>
      </CardBody>
    </Card>
  )
}
export default NumberInputBasic
