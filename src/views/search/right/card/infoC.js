import { useState } from 'react'
import NumberInput from '@components/number-input'
import { Card, Row, Col, CardHeader, CardTitle, CardBody, CardText, Label, Alert, Badge, Button } from 'reactstrap'
import classnames from 'classnames'
import Rating from 'react-rating'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'

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
    <div className="pt-1">
        <h5><b>{props.name}</b></h5>
        <CardText style={{fontSize:"13px"}} tag='span' className='item-company'>
          By
          <a className='pl-1 company-name' href='/' onClick={e => e.preventDefault()}>
            {props.brandName}
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap'>
          <ul className='unstyled-list list-inline '>
    
                <li className='ratings-list-item pr-1'>
                   <Rating
                      emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                      fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>}
                      initialRating={2}
                    />
                </li>
              (21 Reviews)
          </ul>
        </div>
        <hr />
        <div >
          <CardText>
            Available -<span className='text-success m-0 p-0 ml-25'>In stock</span>
          </CardText>
          <div style={{paddingTop: '5px'}}>
            <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Study history up to 30 days</span>
          </div>
          <div style={{paddingTop: '5px'}}>
            <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Up to 5 users simultaneously</span>
          </div>
          <div style={{paddingTop: '5px'}}>
            <img src="https://img.icons8.com/emoji/17/000000/check-mark-emoji.png"/> <span style={{paddingLeft:"5px"}}>Has HEALTH certificate</span>
          </div>
        </div>
    </div>
  )
}
export default NumberInputBasic
