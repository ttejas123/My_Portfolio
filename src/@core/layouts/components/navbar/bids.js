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
import { User, Mail, Home, Box, Package, AlertCircle, Map, Book, Airplay, PlusCircle, Image, ShoppingCart, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, Archive } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount

  //** Vars
  const userAvatar = defaultAvatar

  return (
  
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/Homes/bid' onClick={e => e.preventDefault()}>
        <Airplay size={18} style={{marginRight:'3px', paddingBottom: '2px'}} /><small className='user-name h6' style={{ color:'black'}}>PodCast</small> 
      </DropdownToggle>
      <DropdownMenu right style={{marginTop: '-0.0rem'}}>
        <DropdownItem tag={Link} to='/Homes/bidCreate'>
          <PlusCircle  size={14} className='mr-75' />
          <span className='align-middle'>Create New</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/Homes/bid'>
          <Box size={14} className='mr-75' />
          <span className='align-middle'>My Bids</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/Homes/bid'>
          <CheckSquare  size={14} className='mr-75' />
          <span className='align-middle'>New Leads</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
