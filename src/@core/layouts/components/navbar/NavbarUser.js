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
import { NavItem, NavLink, Button, FormGroup, Badge, Label, Col, DropdownToggle } from 'reactstrap'
import ProductDropDown from './ProductsDropdown'
import CustomerDropDown from './CustomerDroDown'
import MissL from './missL'
import SearchCardss from './searchC'
import LibraryDropDown from './LibraryDropDown'
import ResourcesDropDown from './ResourcesDropDown'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { SignIn, SignOut } from '@src/redux/actions/loginOut/index.js'


const NavbarUser = props => {
  console.log(getStatus())

  // ** Props
  let data
  useSelector(state => { data = state.loginOut.flag }) 
  console.log(data)

  const [modal, setModal] = useState(false)
      const view = () => {
            //here we passing id to delete this specific record
           setModal(true)
        }

    const handleModal = () => {
        setModal(!modal)
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
      
      <ul className='nav navbar-nav align-items-center mx-auto'>
        <IntlDropdown />
        <Button.Ripple tag={Link} to='/homes/dashBoard' className='d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <Home className='' size={17} style={{marginRight:'3px'}} /><small className='user-name h6' style={{ color:'black'}}>Dashboard</small> 
        </Button.Ripple>

        <Button.Ripple tag={Link} to='/homes/dashBoard' className='d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <Package className='' size={17} style={{marginRight:'3px'}} /><small className='user-name h6' style={{ color:'black'}}>Product</small> 
        </Button.Ripple>
       
        <div style={{paddingTop:'7px'}}>
            <ProductDropDown />
        </div>

        <Button.Ripple tag={Link} to='/homes/dashBoard' className='d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <Book className='' size={17} style={{marginRight:'3px'}} /><small className='user-name h6' style={{ color:'black'}}>Reports</small> 
        </Button.Ripple>

        <Button.Ripple  className='cursor-pointer d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={() => view()} color='#fff'>
                <Search size={18} />
        </Button.Ripple>
       
        <Button.Ripple  className='cursor-pointer d-none d-lg-block  mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={() => view()} color='#fff'>
                <Bell size={18} />
        </Button.Ripple>

        <Profile />

        <div style={{paddingTop:'7px'}} className='ml-lg-2' >
            <MissL/>
        </div>

        <div tag='a' className='nav-link position-relative'>
            <ShoppingCart size={18} className='ficon' />
            
              <Badge pill color='primary' className='badge-up'>
                5
              </Badge>
           
        </div>

      
      </ul>
      <SearchCardss open={modal} handleModal={handleModal} className="d-none" />

    </Fragment>
  )
}
export default NavbarUser
