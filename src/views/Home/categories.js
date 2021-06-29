// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Aperture, Camera, ShoppingCart, Star, Heart } from 'react-feather'
import { CardText, Col, Row, Button} from 'reactstrap'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Related products images
import img1 from '@src/assets/images/elements/1.jpg'
import img2 from '@src/assets/images/elements/2.jpg'
import img3 from '@src/assets/images/elements/3.jpg'
import img4 from '@src/assets/images/elements/4.jpg'
import img5 from '@src/assets/images/elements/5.jpg'
import img6 from '@src/assets/images/elements/6.jpg'
import img7 from '@src/assets/images/elements/7.jpg'
import img8 from '@src/assets/images/elements/8.jpg'


// ** Styles
import '@styles/react/libs/swiper/swiper.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import CardBody from 'reactstrap/lib/CardBody'
const Category = () => {
  SwiperCore.use([Navigation])

  // ** Related products Slides
  const slides = [
    {
      name: 'Somersung Sonic X500 Basic',
      brand: 'Bidoya',
      ratings: 4,
      price: 17595,
      img: img1
    },
    {
      name: 'Somersung Sonic X2000 Pro Black',
      brand: 'Bidoya',
      ratings: 2,
      price: 2449.49,
      img: img2
    },
    {
      name: 'GAnti-Dust Filter, Breathable, 3 Layers of Purifying',
      brand: 'Bidoya',
      ratings: 3,
      price: 229.29,
      img: img3
    },
    {
      name: 'Red Hot Water Bottle, 2 Quart Capacity',
      brand: 'Bidoya',
      ratings: 3,
      price: 90.98,
      img: img4
    },
    {
      name: 'Digital Thermometer X30-Pro',
      brand: 'Bidoya',
      ratings: 4,
      price: 1559.99,
      img: img5
    },
    {
        name: 'Extractor used to remove teeth',
        brand: 'Bidoya',
        ratings: 2,
        price: 2449.49,
        img: img6
      },
      {
        name: 'Oxygen concentrator model KTS-5000',
        brand: 'Bidoya',
        ratings: 3,
        price: 229.29,
        img: img7
      },
      {
        name: 'Digital Thermometer X30-Pro',
        brand: 'Bidoya',
        ratings: 3,
        price: 229.29,
        img: img8
      }
  ]

  const categories = [
    {
        icon : <ShoppingCart size={40} style={{maxWidth:"30px"}} className='mt-2'/>,
        name : "Clothing"
    },
    {
      icon : <Heart size={40} style={{maxWidth:"30px"}} className='mt-2'/>,
      name : "Bandages"
  },
  {
      icon : <Camera size={40} style={{maxWidth:"30px"}} className='mt-2'/>,
      name : "Capsules"
  },
  {
      icon : <Aperture size={40} style={{maxWidth:"30px"}} className='mt-2'/>,
      name : "Dental"
  },
  {
    icon : <Camera size={40} style={{maxWidth:"30px"}} className='mt-2'/>,
    name : "Thermometer"
},
{
    icon : <ShoppingCart size={40} style={{maxWidth:"30px"}} className='mt-2'/>,
    name : "Clothing"
}
]

  const renderCategories = () => {
    return categories.map((item, index) => {
        // const margin = Object.keys(cols)
        return (
        //     <Col lg='1' className='mr-2 ml-2 d-block align-itms-center justify-content-center'>
        //     <div className='d-block ' style={{border:'1px solid #f0f6f5', backgroundColor:'#DADCDE', borderRadius:'50%', height:90, width:90}}>
        //     {/* {<Camera size={45}/>} */}
        //     <div className=''>
        //       {item.icon}
        //        </div>
        //     </div>
        //     <div className='mt-1'>
        // <span>{item.name}</span>
        // </div>
        // </Col>
        <Col lg='2'>
        <div style={{textAlign:"center"}}>
            <div style={{width:'90px', height:'90px', position:"relative", backgroundColor:'#f1dfcd', textAlign:"center", verticalAlign:"middle", border:"1px solid #f0f2f5", borderRadius:"70%"}} className='mb-1 d-inline-block'>
            {item.icon}
            </div>
            <span style={{lineHeight:'26px', fontSize:16}} className='d-block font-weight-bold text-align-center mb-2'>
                {item.name}
            </span>
        </div>
        </Col>
        )
      })
  }
  
  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-5 py-2',
    slidesPerView: 5,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 5,
        spaceBetween: 55
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 55
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

  return (
    <div  style={{
      // backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`,
     backgroundColor:'#f8f1e8'
    
    }} 
    className='pb-5'
    >
      <hr/>
       <div className='mt-4 mb-2 text-center'
      
      >
        <h3 className='font-weight-bold'>Popular Categories</h3>
        <div>
            <Row>
                <Col lg='2'>
                </Col>
                <Col lg='8'>
            <CardBody>
            <div style={{ }} className='mx-auto'>
                <Row>
                {renderCategories()}
                </Row>
           </div>
            </CardBody>
            </Col>
            </Row>
        </div>
        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 ml-1' color='#fff'>
          <small className='user-name font-weight-bold h6 ml-1 px-1' style={{ color:'#103178', border:'2px solid #5e5873', borderRadius:40, padding:'3px 10px' }}>Show all</small> 
              </Button.Ripple>
      </div>
      <div className='mt-4 mb-2 text-center'>
        <h2 style={{fontSize:40}}>Latest Products</h2>
        {/* <CardText>People also search for this items</CardText> */}
      </div>
      <Row>
                <Col lg='2'>
                </Col>
                <Col lg='8' style={{border:'2px solid #f0f2f5', backgroundColor:"#fff" }}>
              {/* <div style={{width:1270, border:'2px solid #f0f2f5', display:'block', backgroundColor:"#fff" }} className='mx-auto'> */}
      <Swiper {...params}>
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.name}>
                <div className='px-1' style={{backgroundColor:'', borderRight:'2px solid #f0f2f5'}}>
                  <a href='/' onClick={e => e.preventDefault()}>
                {/* <div className='item-heading'>
                  <h5 className='text-truncate mb-0'>{slide.name}</h5>
                  <small className='text-body'>by {slide.brand}</small>
                </div> */}
                <div className='img-container mx-auto py-0 mb-1'>
                  <img src={slide.img} alt='swiper 1' className='img-fluid ' />
                </div>
                <div className='item-meta'>
                   <div className='item-heading pb-2'>
                  <h5 className='text-truncate mb-0'>{slide.name}</h5>
                  {/* <small className='text-body'>by {slide.brand}</small> */}
                </div>
                  <CardText className='h4 font-weight-bold mb-0' style={{color:'#FD8D27'}}>${slide.price}</CardText>
                </div>
              </a>
               <ul className='unstyled-list list-inline mb-25 pt-1'>
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item mr-25'>
                          <Star
                          size={15}
                            className={classnames({
                              'filled-star': index + 1 <= slide.ratings,
                              'unfilled-star': index + 1 > slide.ratings
                            })}
                          />
                        </li>
                      )
                    })}
                  </ul>
                  </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </Col>
      </Row>
      {/* </div> */}
            
    </div>
  )
}

export default Category
