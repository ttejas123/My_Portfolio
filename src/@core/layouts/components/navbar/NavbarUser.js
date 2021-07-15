// ** Dropdowns Imports
import { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from '@utils'
import {getStatus} from '../../../../views/isLoggedIn'
import UserDropdown from './UserDropdown'
import NotificationDropdown from './NotificationDropdown'
import IntlDropdown from './IntlDropdown'
import Avatar from '@components/avatar'
import Profile from './profile'
//import NavbarSearch from './NavbarSearch'
// ** Third Party Components
import { Sun, Moon, Menu, Search, Bell, Home, Package, Book, ShoppingCart } from 'react-feather'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { NavItem, NavLink, Button, FormGroup, Badge, Label, Col, Row, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import ProductDropDown from './ProductsDropdown'
import CustomerDropDown from './CustomerDroDown'
import MissL from './missL'
import SearchCardss from './searchC'
import LibraryDropDown from './LibraryDropDown'
import ResourcesDropDown from './ResourcesDropDown'
import './style.css'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { SearhPrp } from '@src/redux/actions/loginOut/index.js'


const NavbarUser = props => {
  const usDispatch = useDispatch()
  console.log(getStatus())

  // ** Props
  let data
  useSelector(state => { data = state.loginOut.flag }) 
  console.log(data)

  const [modal, setModal] = useState(false)
      const view = () => {
            //here we passing id to delete this specific record
           //setModal(true)
           usDispatch(SearhPrp())
        }

    const handleModal = () => {
        usDispatch(SearhPrp())
        //setModal(!modal)
    }
  const { skin, setSkin, setMenuVisibility } = props
  const userAvatar = defaultAvatar

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
    <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>

    <ul className='nav navbar-nav' style={{marginTop: '5px'}} >
     
      <div className='d-flex ml-lg-0  pl-lg-0'>
        <IntlDropdown />
      </div>
      <div className=" d-flex ">
            <Button.Ripple style={{marginLeft: '5rem'}} tag={Link} to='/Homes/Dashboards' className='d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                    <Home className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Dashboard</small> 
            </Button.Ripple>

            <Button.Ripple tag={Link} to='/Homes/Products' className='d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                    <Package className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Product</small> 
            </Button.Ripple>

           
            <small className='user-name h6' style={{ color:'black'}}><ProductDropDown /></small> 
           

            <Button.Ripple tag={Link} to='/homes/dashBoard' className='d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                    <Book className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Reports</small> 
            </Button.Ripple>
        {/*
            <div style={{paddingTop:'7px'}} className='ml-lg-2' >
                    <MissL/>
                </div>
              */
        }
      </div>

      <div className='d-flex navbarLeftMwnu' style={{marginLeft: '24rem'}}>
          <div className='cursor-pointer d-none d-lg-block'  style={{marginRight: '20px', marginTop: '9px'}} onClick={() => view()} color='#fff'>
                <Search size={20} />
          </div>
       
          <div  style={{marginRight: '15px', marginTop: '10px'}}  className='cursor-pointer d-none d-lg-block' color='#fff'>
                <NotificationDropdown />
          </div>

          <div  style={{marginRight: '15px', marginTop: '10px'}}  className='cursor-pointer d-none d-lg-block' color='#fff'>
            <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
              <DropdownToggle tag='a' className='nav-link' >
                <ShoppingCart size={18} />
                <Badge pill color='success' className='badge-up'>
                 5
                </Badge>
              </DropdownToggle>
            </UncontrolledDropdown>
          </div>
          <Profile />
        
      </div>
    </ul>

      <SearchCardss open={modal} handleModal={handleModal} className="d-none" />

    </Fragment>
  )
}
export default NavbarUser
