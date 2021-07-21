import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/logo/sh3.jpg'
import img2 from '@src/assets/images/logo/sh4.jpg'
import img3 from '@src/assets/images/logo/sh5.jpg'
// import img4 from '@src/assets/images/logo/p.jpg'
import img4 from '@src/assets/images/logo/sh6.jpg'
//import img5 from '@src/assets/images/logo/p4.jpg'


const params = {
  effect: 'fade',
  navigation: true,
  pagination: {
    clickable: true
  }
}


const SwiperAutoplay = ({ isRtl }) => {
  return (
    <Card className='m-0 p-0'>
      <CardBody className='m-0 p-0'>
        <Swiper  dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide>
            <img style={{height: '25vh', width: '90%'}} src={img1} alt='swiper 1' className='img-fluid m-0 p-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{height: '25vh', width: '90%'}} src={img2} alt='swiper 2' className='img-fluid m-0 p-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{height: '25vh', width: '90%'}} src={img3} alt='swiper 3' className='img-fluid m-0 p-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{height: '25vh', width: '90%'}} src={img4} alt='swiper 4' className='img-fluid m-0 p-0' />
          </SwiperSlide>
         
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperAutoplay