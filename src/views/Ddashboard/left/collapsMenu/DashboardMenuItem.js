import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, AtSign, Truck, Pocket, User, Users,
Image,
FileText,
Award,
UserPlus} from 'react-feather'
import { CardText, Nav, NavItem, NavLink, Row, Col, TabContent, TabPane } from 'reactstrap'
import { useState } from 'react'


import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: <div className="d-flex"><User size={18}/><b className='pl-1'>My Profile</b></div>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <div className="d-flex"><Image size={18}/><b className='pl-1'>Gallery</b></div>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <div className="d-flex"><FileText size={18}/><b className='pl-1'>KYC</b></div>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <div className="d-flex"><Award size={18}/><b className='pl-1'>BidCoins and BidCash</b></div>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <div className="d-flex"><AtSign size={18}/><b className='pl-1'>Company Details</b></div>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <div className="d-flex"><UserPlus size={18}/><b className='pl-1'>Backup</b></div>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <div className="d-flex"><Users size={18}/><b className='pl-1'>My Team</b></div>
  }
]

const renderTabs = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]
      return (
        <NavItem key={item.title} tag='li'>
          <NavLink active={activeTab === item.title} onClick={() => toggleTab(item.title)}>
            <IconTag size={18} className='mr-1' />
            {/* <span className='font-weight-bold'>{item.title}</span> */}
            <span className='font-weight-bold'>{item.title}</span>

          </NavLink>
        </NavItem>
      )
    })
  }
  const DashboardMenuItem = ({ data }) => {
    const dataToRender = []
    const [activeTab, setActiveTab] = useState('Payment')
    Object.entries(data).forEach(([key, val]) => {
        dataToRender.push(val)
      })

  return (
    <div id='faq-tabs'>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className='faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0'>
            <Nav tag='ul' className='nav-left' pills vertical>
              {renderTabs()}
            </Nav>
            <img
              className='img-fluid d-none d-md-block'
              src={illustration}
              alt='illustration'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
       
      </Row>
    </div>
  )
  }
export default DashboardMenuItem
