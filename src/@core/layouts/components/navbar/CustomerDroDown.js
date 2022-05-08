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
import { User, Mail, LogOut, CheckSquare, MessageSquare, Bell, Settings, CreditCard, HelpCircle, Box, ChevronDown, AlignJustify, ShoppingCart } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/raviKukreja.jpg'

const CustomerDropDown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  //const userAvatar = (userData && userData.avatar) || defaultAvatar
  const userAvatar = defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user-left nav-item d-none d-lg-block'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className=' font-weight-bold h6' style={{color:'black'}}>Cart</span> 
          {/* {(userData && userData['username']) || 'Ravi Kukreja'}
          <span className='user-status'> {(userData && userData.role) || 'Super Admin'}</span> */}

        </div>
        {/* <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' /> */}
        <ChevronDown className='mr-1' size={15}/>
      </DropdownToggle>

      <DropdownMenu style={{marginTop: "-0.1rem"}}>
        
        <DropdownItem tag={Link} to='/cart-buyer'>
              <AlignJustify size={14} className='mr-75' />
              <span className='align-middle'>List</span>
        </DropdownItem>
        
        <DropdownItem tag={Link} to='/cart-page'>
          <ShoppingCart size={14} className='mr-75' />
          <span className='align-middle'>Buyer Cart</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/create-cart'>
          <Box size={14} className='mr-75' />
          <span className='align-middle'>Create</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default CustomerDropDown
