import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media, Button } from 'reactstrap'
import logo from '@src/assets/images/logo/logo.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
    Plus
  } from 'react-feather'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import classnames from 'classnames'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'

// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'

const CorporateOverview = (props) => {
  const cols = { md: '3', sm: '6' }
    const [selectedColor, setSelectedColor] = useState('primary')
    // ** Renders color options
       const colorOptions = ["primary", "success", "waring", "danger", "info"]
  const renderColorOptions = () => {
      console.log("colors", colorOptions)
    return colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  } 
  
  const data = [
    {
      title: 'Admin',
      subtitle: 'Himanshu Chanda'
    },
    {
      title: '#Employees',
      subtitle: '12'
    },
    {
      title: '#Warehouse',
      subtitle: '10'
    },
    {
      title: 'Has Subscription',
      subtitle: 'yes'
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

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce '>

        <Card >
      <CardHeader className='pb-0'> 
        <CardTitle tag='h4'>
        <Media>
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={logo}
          alt='user profile avatar'
          height='50'
          width='50'
        />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder text-left'>Bidoya pvt ltd</h4>
              <CardText className='card-text font-small-2 mr-25 mb-0'>
                <span>bidoya@gmail.com</span>
                <Badge className='card-text font-small-2 ml-2' color="light-success" pill>
                        <span className='mb-0 text-success' >Premium</span>
                </Badge>
              </CardText>

            </Media>
            
        </Media>
          
          </CardTitle>
          
      </CardHeader>
      <hr/>
      <CardHeader className='pb-0'> 
        <CardTitle tag='h4'>
        <Media>
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder '>About</h4>
              <CardText className='card-text font-small-4 mr-25 mb-0'>
iCOREts Private Limited is redefining the b2b online marketplace www.bidoya.com Wide range of products required by a corporate indirect purchase requirements. For eg. Office Supplies, Electronics, Health & Medical, Gifts & Premium, Home Utility & Décor Furniture, Personal Utility, Accessories etc. * Terms & Conditions Apply. Enrolment & Registration subject to meeting specific criteria and at sole discretion of bidoya.com Email: info@bidoya.com Website</CardText>
            </Media>
          </Media>
          </CardTitle>
        
      </CardHeader>
          <hr/>

      <Col lg='12' md='6'>
      <CardBody className='py-1 my-2'>
        <Row>{renderData()}</Row>
      </CardBody>
        </Col>
        
      {/* <CardBody className='mt-0'>
        <Row>{renderData()}</Row>
      </CardBody> */}
    </Card>

    </div>
  )
}

export default CorporateOverview
