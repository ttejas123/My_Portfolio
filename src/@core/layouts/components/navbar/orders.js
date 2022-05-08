// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, Home, Box, Package, AlertCircle, Map, Book, Airplay, Image, ShoppingCart, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, Archive } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])

  //** Vars
  const userAvatar = defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
    
        <Airplay size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>Videos</small> 
      </DropdownToggle>
      <DropdownMenu right style={{marginTop: '-0.0rem'}}>
        <DropdownItem tag={Link} to='/Homes/Orders'>
          <Package size={14} className='mr-75' />
          <span className='align-middle'>Purchase Order</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/Homes/Orders'>
          <Box size={14} className='mr-75' />
          <span className='align-middle'>Sales Orders</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/Homes/Orders'>
          <AlertCircle  size={14} className='mr-75' />
          <span className='align-middle'>Product Issues</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
