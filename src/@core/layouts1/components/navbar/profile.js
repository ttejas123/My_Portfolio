// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
// import { useDispatch } from 'react-redux'
// import { handleLogout } from '@store/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import { DashBoard, ProductTab, BidTabs, SponsorTab } from '@src/redux/actions/CurrentPageTab'
// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, Home, Package, Map, Book, Image, ShoppingCart, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  // useSelector(state => { console.log(state.CurrentPageTab) }) 
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
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        {/*
              <div className='user-nav d-sm-flex d-none'>
                  <span className='user-name font-weight-bold'>{(userData && userData['username']) || 'Rony Buk'}</span>
                  <span className='user-status'>{(userData && userData.role) || 'Buyer'}</span>
                </div>
              */}
        <Avatar img={userAvatar} imgHeight='35' imgWidth='35' status='online' />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick= {() => dispatch(DashBoard(4))} tag={Link} to='/Homes/Dashboards'>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem onClick= {() => dispatch(DashBoard(1))} tag={Link} to='/Homes/Dashboards'>
          <Home size={14} className='mr-75' />
          <span className='align-middle'>Dashboard</span>
        </DropdownItem>
        <DropdownItem onClick= {() => dispatch(DashBoard(8))} tag={Link} to='/Homes/Dashboards'>
          <Image size={14} className='mr-75' />
          <span className='align-middle'>Gallery</span>
        </DropdownItem>
        <DropdownItem onClick= {() => dispatch(DashBoard(10))} tag={Link} to='/Homes/Dashboards'>
          <MessageSquare size={14} className='mr-75' />
          <span className='align-middle'>Redressal</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to='/profile/setting1'>
          <Settings size={14} className='mr-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/site-map'>
          <Map size={14} className='mr-75' />
          <span className='align-middle'>Sitemap</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/faq'>
          <HelpCircle size={14} className='mr-75' />
          <span className='align-middle'>Help</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem  tag={Link} to='/login'>
          <Power style={{color: '#ff3333'}} size={14} className='mr-75' />
          <span style={{color: '#ff3333'}} className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
