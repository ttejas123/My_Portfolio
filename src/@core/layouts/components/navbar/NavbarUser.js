// ** Dropdowns Imports
import { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from '@utils'
import {getStatus} from '../../../../views/isLoggedIn'
import UserDropdown from './UserDropdown'
import NotificationDropdown from './NotificationDropdown'
import IntlDropdown from './IntlDropdown'
import Avatar from '@components/avatar'
//import NavbarSearch from './NavbarSearch'
// ** Third Party Components
import { Sun, Moon, Menu, Search, Bell } from 'react-feather'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { NavItem, NavLink, Button, FormGroup, Badge, Label, Col, DropdownToggle } from 'reactstrap'
import ProductDropDown from './ProductsDropdown'
import CustomerDropDown from './CustomerDroDown'
import SearchCardss from './searchC'
import LibraryDropDown from './LibraryDropDown'
import ResourcesDropDown from './ResourcesDropDown'

const NavbarUser = props => {
  // ** Props
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
      {/* <div className='bookmark-wrapper d-flex align-items-center'>
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
      </div> */}
      <ul className='nav navbar-nav align-items-center mx-auto'>
         <IntlDropdown />
        {/* <NotificationDropdown /> */}
        {/* <ProductDropDown /> */}
        <Button.Ripple tag={Link} to='/' className='d-none d-lg-block mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <small className='user-name font-weight-bold h6 ml-2' style={{ color:'black'}}>Home</small> 
        </Button.Ripple>
        <Button.Ripple tag={Link} to='/search/searchPage' className='d-none d-lg-block mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <small className='user-name font-weight-bold h6 ml-2' style={{ color:'black'}}>Search</small> 
        </Button.Ripple>
        <Button.Ripple tag={Link} to='/Rfq7/rfqN' className='d-none d-lg-block mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <small className='user-name font-weight-bold h6 ml-2' style={{ color:'black'}}>Rfq</small> 
        </Button.Ripple>
         <Button.Ripple tag={Link} to='/homes/dashBoard' className='d-none d-lg-block mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <small className='user-name font-weight-bold h6 ml-2' style={{ color:'black'}}>Dashboard</small> 
        </Button.Ripple>
           {/* <div className='' style={{width:'10%'}}>  
          <Input type='text' id='category' placeholder='' className='d-inline-block w-5' style={{width:'70%'}}/>
          <Search className='ml-1'/>
          </div>  */}
        <Button.Ripple tag={Link} to='/register' className='d-none d-lg-block mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                <small className='user-name font-weight-bold h6 ml-2' style={{ color:'black'}}>Sign Up</small> 
        </Button.Ripple>
        
        {/*<CustomerDropDown/>*/}
        {/*<LibraryDropDown/>*/}
        {/*<ResourcesDropDown/>*/}
        {/*<UserDropdown />*/}
        <Button.Ripple tag={Link} to='/login' className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
          <small className='user-name font-weight-bold h6 ' style={{ color:'black'}}>Sign In</small> 

        </Button.Ripple>
        <Button.Ripple  className='cursor-pointer d-none d-lg-block mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={() => view()} color='#fff'>
                <Search size={18} />
        </Button.Ripple>

        {  getStatus() ?  (<span>
               <Bell size={30} className='mr-1'/>
          <Badge pill color='danger' className='badge-up'>
          5
         </Badge>
            </span>) : null}

          {getStatus() ? (
             <div className=''>
          <div>    
          <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
          <span className='user-name font-weight-bold ml-2'>{'Rajiv Ajmera'} <br/> {'Buyer'} </span>
          </div>
        {/* <span className='user-status'>{'Buyer'}</span> */}
      </div>
) : (
  <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='success'>
  <small className='user-name font-weight-bold h6' style={{ color:'black'}}>Request a demo</small> 
</Button.Ripple>
)}
      </ul>
{/*
      <div className='bookmark-wrapper d-flex align-items-left'>
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
          
          </NavLink>
        </NavItem>
      </div>*/}
      <SearchCardss open={modal} handleModal={handleModal} className="d-none" />

    </Fragment>
  )
}
export default NavbarUser
