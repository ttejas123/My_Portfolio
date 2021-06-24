import { React, Fragment, useState, useEffect} from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import Avatar from '@components/avatar'

const StatesticCard = ({item}) => {
    return (
       
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              {/* <h1 className='font-large-2 font-weight-bolder mt-2 mb-0'>{item.title}</h1> */}
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
    )
}
export default StatesticCard
