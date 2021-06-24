import { CardText } from 'reactstrap'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, AtSign, Truck, Pocket, User, Users } from 'react-feather'

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
    title: <div className="d-flex"><img src="https://img.icons8.com/small/18/000000/gallery.png"/><b className='pl-1'>Gallery</b></div>,
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
    title: <div className="d-flex"><img src="https://img.icons8.com/small/19/000000/document.png"/><b className='pl-1'>KYC</b></div>,
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
    title: <div className="d-flex"><img src="https://img.icons8.com/fluent-systems-regular/19/000000/coins.png"/><b className='pl-1'>BidCoins and BidCash</b></div>,
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
    title: <div className="d-flex"><img src="https://img.icons8.com/small/18/000000/database-backup.png"/><b className='pl-1'>Backup</b></div>,
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
