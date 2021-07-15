
import img1 from '@src/assets/images/logo/komal.jpg'
import img3 from '@src/assets/images/logo/himanshu.jpg'
import img4 from '@src/assets/images/logo/reethika.jpg'
import img2 from '@src/assets/images/slider/aadhar-card.jpg'
import img5 from '@src/assets/images/slider/pan-card.jpg'
import ImageComponent from './imgComponent.js'
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

const MyGalleryTab = ({ isRtl }) => {
  return (
    <Card className='mx-1'>
      <CardHeader>
        <CardTitle tag='h4'>My Gallery</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide>
            <img src={img1} alt='swiper 5' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt='swiper 6' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt='swiper 7' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt='swiper 8' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt='swiper 9' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt='swiper 10' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt='swiper 1' className='img-fluid' />
          </SwiperSlide>
        </Swiper> */}
        <Col lg='12'>
         <Row className='match-height'>
                      <ImageComponent image={img1} title={'Profile Image'} description={'Some description about Image'}/> 
                      <ImageComponent image={img2} title={'Aadhar Card'} description={'Some description about Image'}/> 
                      <ImageComponent image={img5} title={'Pan Card'} description={'Some description about Image'}/> 
                      <ImageComponent image={img3} title={'Profile Image'} description={'Some description about Image'}/> 
                      <ImageComponent image={img1} title={'Profile Image'} description={'Some description about Image'}/> 
                      <ImageComponent image={img4} title={'Profile Image'} description={'Some description about Image'}/> 

                        </Row>
                        </Col>
      </CardBody>
    </Card>
  )
}

export default MyGalleryTab

