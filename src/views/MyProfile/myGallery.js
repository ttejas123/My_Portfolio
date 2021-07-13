
import img1 from '@src/assets/images/logo/komal.jpg'
import img3 from '@src/assets/images/logo/himanshu.jpg'
import img4 from '@src/assets/images/logo/reethika.jpg'
import img2 from '@src/assets/images/slider/aadhar-card.jpg'
import img5 from '@src/assets/images/slider/pan-card.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

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
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>My Gallery</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
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
          {/* <SwiperSlide>
            <img src={img2} alt='swiper 2' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt='swiper 3' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt='swiper 4' className='img-fluid' />
          </SwiperSlide> */}
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default MyGalleryTab

