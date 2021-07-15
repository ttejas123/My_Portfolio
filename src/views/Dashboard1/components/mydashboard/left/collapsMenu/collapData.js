// import { CardText } from 'reactstrap'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, AtSign, Truck, Pocket, User, Users,
Image,
FileText,
Award,
UserPlus} from 'react-feather'

import { Nav, NavItem, NavLink, Row, Col, TabContent, TabPane, CardText,
  Button} from 'reactstrap'
  import { Link, useHistory } from 'react-router-dom'


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

const CollapseDefault = () => <AppCollapse data={data} />

export default CollapseDefault
