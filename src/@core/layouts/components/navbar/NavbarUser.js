import { Fragment, useState, useEffect } from 'react'
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
import { Sun, Moon, Menu, Search, Bell, Home, Package, Book, Airplay, FileText, LogIn, ShoppingCart, Key, Grid, Archive } from 'react-feather'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { NavItem, Collapse, NavLink, Nav, NavbarText, DropdownItem, DropdownMenu, Button, FormGroup, Badge, Label, Col, Row, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import ProductDropDown from './ProductsDropdown'
import CustomerDropDown from './CustomerDroDown'
import MissL from './missL'
import Orders from './orders'
import Bids from './bids'
import CartDrop from './cart'
import SearchCardss from './searchC'
import LibraryDropDown from './LibraryDropDown'
import ResourcesDropDown from './ResourcesDropDown'
import './style.css'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { SearhPrp } from '@src/redux/actions/loginOut/index.js'


const NavbarUser = props => {
  const usDispatch = useDispatch()

  // ** Props
   
  // const Seller = useSelector(state => state.StatusBS.Seller)
   const SellerData = JSON.parse(localStorage.getItem('StatsBS'))
  const LoginWithJWT = JSON.parse(localStorage.getItem('Authenticaton'))

  const [modal, setModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
      const view = () => {
            //here we passing id to delete this specific record
           //setModal(true)
           usDispatch(SearhPrp())
        }
    const viewMob = () => {
            //here we passing id to delete this specific record
           setModal(true)
           //usDispatch(SearhPrp())
        }

    const handleModal = () => {
        usDispatch(SearhPrp())
        //setModal(!modal)
    }

    const handleModalMobile = () => {
        //usDispatch(SearhPrp())
        setModal(!modal)
    }
    const HideMobileMenu = () => {
        setIsOpen(false)
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
    <div className='d-flex'>
    <ul className='nav navbar-nav col-12 list-unstyled d-xl-none d-flex flex-row align-items-center justify-content-between' style={{marginTop: '8px'}}>
       
        <div className='px-1'>
          <NavLink className=' menu-toggle hidden-xs is-active' onClick={() => setIsOpen(!isOpen)}>
            <Menu className='ficon' />
          </NavLink>
        </div>
        <div className='px-1'>
          <IntlDropdown />
        </div>
     
        <div className=' px-1'>
          <Profile />
        </div>
       
    </ul>
    <ul className='nav navbar-nav' style={{marginTop: '8px'}} >
         
          <div className='d-none d-lg-flex ml-lg-0  pl-lg-0'>
            <IntlDropdown />

            <Button.Ripple style={{marginLeft: '5rem'}} tag={Link} to='/login' className={LoginWithJWT === null || LoginWithJWT.jwt === 400 ? ("d-flex mb-1 mb-sm-0 mr-0 mr-sm-1") : ("d-none ")} color='#fff'>
                        <small className='user-name h6' style={{ color:'black'}}>Login</small> <LogIn className='' size={18} style={{marginLeft:'3px', paddingBottom: '2px'}} />
            </Button.Ripple>
          </div>
          <div className={LoginWithJWT === null || LoginWithJWT.jwt === 400 ? ("d-none") : ("d-flex ")}>
                <Button.Ripple style={{marginLeft: '5rem', marginTop: '2px'}} tag={Link} to='/Homes/Dashboards' className='d-none d-lg-block  mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                        <Book className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Study Material</small> 
                </Button.Ripple>
              {SellerData === true ? (
                <Button.Ripple tag={Link} to='/Homes/Products' className='d-none d-lg-block mx-0  mb-1 mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                        <Airplay className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Product</small> 
                </Button.Ripple>) : (<></>)
              }

                <div className='d-none d-lg-block  ' style={{marginLeft: '20px', marginRight: '20px', marginTop: '12px'}} color='#fff'>
                         <Bids />
                </div>
                <Button.Ripple tag={Link} to='/Homes/reports' style={{marginTop: '2px'}} className='d-none d-lg-block  mb-sm-0 mr-0 mr-sm-1' color='#fff'>
                        <FileText className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Exam Material</small> 
                </Button.Ripple>

                <div className='d-none d-lg-block  ' style={{marginLeft: '20px', marginRight: '20px', marginTop: '12px'}} color='#fff'>
                         <Orders />
                </div>

          </div>

          <div className={LoginWithJWT === null || LoginWithJWT.jwt === 400 ? ("d-none") : ("navbarLeftMwnu")}>
              <div className='cursor-pointer d-none d-lg-block'  style={{marginRight: '20px', marginTop: '9px'}} onClick={() => view()} color='#fff'>
                    <Search size={20} />
              </div>

              <Button.Ripple tag={Link} to='/Homes/bid'  style={{marginRight: '15px', marginTop: '10px'}}  className='cursor-pointer p-0 d-none d-lg-block' color='#fff'>
                    <Key size={19} />
              </Button.Ripple>

              <div  style={{marginRight: '15px', marginTop: '10px'}}  className='cursor-pointer d-none d-lg-block' color='#fff'>
                    <NotificationDropdown />
              </div>

              {SellerData === true ? (
                <div  style={{marginRight: '15px', marginTop: '10px'}}  className='cursor-pointer d-none d-lg-block' color='#fff'>
                    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
                      <DropdownToggle tag={Link} to='/Homes/Products' className='nav-link' >
                        <Grid size={18} />
                        <Badge pill color='success' className='badge-up'>
                         5
                        </Badge>
                      </DropdownToggle>
                    </UncontrolledDropdown>
              </div>) : (<div  style={{marginRight: '15px', marginTop: '10px'}}  className='cursor-pointer d-none d-lg-block' color='#fff'>
                    <CartDrop />
                </div>)}
              <div className='d-none d-lg-block'>
                
              </div>
          </div>
        </ul>

    </div>

    <div className='d-lg-none d-block col-12 d-flex justify-content-center'>
      <Collapse isOpen={isOpen} className='col-12'>
        
        <div>
          <Button.Ripple  block tag={Link} to='/Homes/Dashboards' onClick={() => setIsOpen(!isOpen)}  color='#fff'>
                    <Home className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Study Material</small> 
          </Button.Ripple>
        </div>

        {SellerData === true ? (<div>
          <Button.Ripple block tag={Link} to='/Homes/Products' onClick={() => setIsOpen(!isOpen)} className='' color='#fff'>
                    <Package className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Product</small> 
          </Button.Ripple>
        </div>) : (<></>)}

        <div className='list-unstyled'>
          <div className=''>
                  <Button.Ripple block tag={Link} to='/Homes/bid' onClick={() => setIsOpen(!isOpen)} color='#fff'>
                    <Archive size={17} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Bid</small>
                  </Button.Ripple>
          </div>
        </div>

        <div>
          <Button.Ripple block tag={Link} to='/Homes/Products' onClick={() => setIsOpen(!isOpen)} className='' color='#fff'>
                   <small className='user-name h6' style={{ color:'black'}}>Rewards</small> 
          </Button.Ripple>
        </div>

        <div className='list-unstyled d-flex align-items-center mb-1 justify-content-center'>
          
                   <ProductDropDown HideMobileMenu={HideMobileMenu} />
          
        </div>

        <div>
          <Button.Ripple block tag={Link} to='/Homes/reports' onClick={() => setIsOpen(!isOpen)} style={{marginTop: '-1rem'}} color='#fff'>
                    <Book className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Reports</small> 
          </Button.Ripple>
        </div>

        <div>
          <Button.Ripple block tag={Link} to='/Homes/reports' onClick={() => { 
            viewMob()
            setIsOpen(!isOpen)
          }}  color='#fff'>
                    <Search className='' size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Search</small> 
          </Button.Ripple>
        </div>         
          
        </Collapse>
    </div>
      <SearchCardss open={modal} handleModal={handleModalMobile} className="" />

    </Fragment>
  )
}
export default NavbarUser
