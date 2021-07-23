// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'
import Masonry from 'react-masonry-css'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import person from '@src/assets/images/avatars/raviKukreja.jpg'
import a1 from '@src/assets/images/avatars/1-small.png'
import img1 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
import panCard from '@src/assets/images/slider/pan-card.jpg'
import aadharCard from '@src/assets/images/slider/aadhar-card.jpg'
import drivingLicense from '@src/assets/images/slider/driving-license.jpg'
import img3 from '@src/assets/images/logo/himanshu.jpg'
import img4 from '@src/assets/images/logo/reethika.jpg'
// ** Third Party Components
import './style.css'
import {
  Row,
  Card, CardBody,
  Col,
  CardText,
  Button,
  TabContent,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardImg,
  Navbar,
  TabPane,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}
const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeTab, setActiveTab] = useState('1')
  const toggle1 = tab => setActiveTab(tab)
  const arr = [
  {
    id: 1,
    text: "My Profile And this is My Pic One",
    title: 'Profile Pic',
    img: img3
  },
  {
    id: 2,
    text: "This is my Best Product",
    title: 'Product Image',
    img: img1
  },
  {
    id: 3,
    text: "This is My Pan Card and There are  arround This",
    title: 'Verified Pan Card',
    img: panCard
  }, 
  {
    id: 4,
    text: "MY Aadhar Card",
    title: 'Verified Aadhar Card',
    img: aadharCard
  }, 
  {
    id: 5,
    text: "This is My Pan  and There are many Details arround This",
    title: 'Team Photo',
    img: img3
  }, 
  {
    id: 6,
    text: "This is My Pan Card tails arround This",
    title: 'Corporate Pan Card',
    img: panCard
  }, 
  {
    id: 7,
    text: "This is My Pan Card and There are many Details arround This",
    title: 'Corporate Aadhar Card',
    img: aadharCard
  },
  {
    id: 8,
    text: "My Profile And this is My Pic One",
    title: 'Profile Pic',
    img: img4
  },
  {
    id: 9,
    text: "This is my Best Product",
    title: 'Product Image',
    img: img1
  },
  {
    id: 10,
    text: "This is My Pan Card and There are  arround This",
    title: 'Verified Pan Card',
    img: panCard
  }, 
  {
    id: 11,
    text: "MY Aadhar Card",
    title: 'Verified Aadhar Card',
    img: aadharCard
  }, 
  {
    id: 12,
    text: "This is My Pan  and There are many Details arround This",
    title: 'Team Photo',
    img: img4
  }, 
  {
    id: 13,
    text: "This is My Pan Card tails arround This",
    title: 'Corporate Pan Card',
    img: panCard
  }, 
  {
    id: 14,
    text: "This is My Pan Card and There are many Details arround This",
    title: 'Corporate Aadhar Card',
    img: aadharCard
  }
  ]
  return (
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">

              {arr.map((val) => {
                return (
                    <div key={val.id} className="card" style={{width: '18rem'}}>
                      <img className="card-img-top" src={val.img} alt="Card image cap" />
                      <div className='d-flex justify-content-between' style={{marginTop: '5px', marginRight: '10px'}}><h4 className='col-lg-9'>{val.title}</h4><div style={{fontSize: "10px"}}>12-08-21</div></div>
                      <div style={{marginLeft: '14px', marginBottom: '10px', marginRight: '10px'}}>
                        <p className="card-text">{val.text}</p>
                      </div>
                    </div>
                  )
              })}
        {/* array of JSX items */}
        </Masonry>
      </>
  )
}

export default Details
