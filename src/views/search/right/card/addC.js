import { useState } from 'react'
import NumberInput from '@components/number-input'
import { Card, Row, Col, CardHeader, CardTitle, CardBody, CardText, Label, Alert, Badge, Button } from 'reactstrap'
import classnames from 'classnames'
import './style.css'

const NumberInputBasic = props => {
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
    <Card className='bor m-0 mb-1 mt-1' style={{backgroundColor:"#fff", paddingRight:"5px"}}>

      <div className="p-0 m-0 pl-1 d-flex mb-1 mt-1">
        <><h1 className="p-0 m-0"><b>{props.price}</b></h1> <div className='text-decoration-underline'>$60.24 Save</div></>
      </div>
          
      <CardBody className="p-0 m-0 pl-1">
        <Row>
          <Col md='12' xs='12'>
              <h4 className="mb-1"><b>Quantity</b></h4>
          </Col>
          <Col md='12' xs='12'>  
            <NumberInput id='basic-number-input' value={count} onChange={count => setCount(count)} />
          </Col>
          <Col md='12' xs='12'>
              <div className="p-0 m-0 mb-2 mt-2 d-flex">
                <Button.Ripple className='round' style={{width:"100%"}} color='primary' outline>
                   Add To Cart
                </Button.Ripple>
              </div> 
          </Col>
          
        </Row>
      </CardBody>

      <CardBody className="p-0 m-0 pl-2 pb-1">
        <Row>

          <Col md='6' xs='6'>
              <a style={{fontSize: "10px"}}><u>Add to wishlist</u></a>
          </Col>
          <Col md='6' xs='6'>  
              <a style={{fontSize: "10px"}}><u>Add to Compare</u></a>
          </Col>
          
        </Row>
      </CardBody>
    </Card>
  )
}
export default NumberInputBasic
