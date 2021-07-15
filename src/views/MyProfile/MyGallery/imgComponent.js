
import img1 from '@src/assets/images/logo/komal.jpg'
import img3 from '@src/assets/images/logo/himanshu.jpg'
import img4 from '@src/assets/images/logo/reethika.jpg'
import img2 from '@src/assets/images/slider/aadhar-card.jpg'
import img5 from '@src/assets/images/slider/pan-card.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody, Row, CardText, CardImg, Col } from 'reactstrap'

const params = {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  pagination: {
    clickable: true
  }
}

const ImageComponent = (props) => {
  return (
   
                        <Col md='6' xs='12' lg='4' className='my-1'>
                        <div  style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'5px'}}>
          <CardImg top src={props.image} alt='Card cap' style={{height:'365px'}}/>
          <CardBody className='' style={{paddingLeft:'0.5rem'}}>
            <CardTitle tag='h4' className='mb-50'> 
            <h4>{props.title}</h4>
            </CardTitle>
            <span>
             {props.description} 
            </span>
          </CardBody>
        </div>
                        </Col>
  )
}

export default ImageComponent

