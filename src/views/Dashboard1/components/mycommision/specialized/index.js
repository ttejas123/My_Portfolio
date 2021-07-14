// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlignJustify, Rss, Info, Image, Users, Edit, Home, ShoppingCart, Package} from 'react-feather'

// ** Third Party Components
import '@styles/react/pages/page-profile.scss'
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
import Datatable from './components/datatables'
const Details = () => {

  return (
   
      <div>
        <Datatable />
      </div>

  )
}

export default Details
