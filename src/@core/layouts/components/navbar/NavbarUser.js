// ** Dropdowns Imports
import { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import NotificationDropdown from './NotificationDropdown'
import IntlDropdown from './IntlDropdown'
//import NavbarSearch from './NavbarSearch'
// ** Third Party Components
import { Sun, Moon, Menu } from 'react-feather'
import { NavItem, NavLink, Button } from 'reactstrap'
import ProductDropDown from './ProductsDropdown'
import CustomerDropDown from './CustomerDroDown'
import LibraryDropDown from './LibraryDropDown'
import ResourcesDropDown from './ResourcesDropDown'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

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
        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='success'>
                  <small className='user-name font-weight-bold h6' style={{ color:'black'}}>Request a demo</small> 
        </Button.Ripple>
      </ul>
      <div className='bookmark-wrapper d-flex align-items-left'>
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
          
          </NavLink>
        </NavItem>
      </div>
    </Fragment>
  )
}
export default NavbarUser
