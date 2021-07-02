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
import '..//../../../views/logcss.css'
// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, LogOut, CheckSquare, MessageSquare, Bell, Settings, CreditCard, HelpCircle, Power, ChevronDown, AlignJustify, Codepen, Circle, AlertCircle } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/raviKukreja.jpg'

const ProductDropDown = () => {
  // ** Store Vars
  const menuModifiers = {
    setMaxHeight: {
      enabled: true,
      fn: data => {
        const pageHeight = window.innerHeight,
          ddTop = data.instance.reference.getBoundingClientRect().top,
          ddHeight = data.popper.height
        let maxHeight, stylesObj

        // ** Calculate and set height
        if (pageHeight - ddTop - ddHeight - 28 < 1) {
          maxHeight = pageHeight - ddTop - 25
          stylesObj = {
            maxHeight,
            overflowY: 'auto'
          }
        }

        const ddRef = data.instance.popper.getBoundingClientRect()

        // ** If there is not space left to open sub menu open it to the right
        if (ddRef.left + ddRef.width - (window.innerWidth - 16) >= 0) {
          data.instance.popper.closest('.dropdown').classList.add('openLeft')
        }

        return {
          ...data,
          styles: {
            ...stylesObj
          }
        }
      }
    }
  }

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
          <small className=' font-weight-bold h6' style={{color:'black'}}>Search</small> 
          {/* {(userData && userData['username']) || 'Ravi Kukreja'}
          <span className='user-status'> {(userData && userData.role) || 'Super Admin'}</span> */}

        </div>
        {/* <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' /> */}
        <ChevronDown className='' size={15}/>
      </DropdownToggle>
      <DropdownMenu >
        <DropdownItem tag={Link} to='/search/searchPage'>
              <AlignJustify size={14} className='mr-75' />
              <span className='align-middle'>List</span>
        </DropdownItem>
        
        <DropdownItem tag={Link} to='/search-grid'>
          <Codepen size={14} className='mr-75' />
          <span className='align-middle'>Grid</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/product/productDetails'>
          <AlertCircle size={14} className='mr-75' />
          <span className='align-middle'>Detail</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default ProductDropDown
