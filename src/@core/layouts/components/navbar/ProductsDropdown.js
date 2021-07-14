// ** React Imports
import { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import 'react-contexify/dist/ReactContexify.min.css'
import '@styles/react/libs/context-menu/context-menu.scss'
import { toast } from 'react-toastify'
// ** Custom Components
import Avatar from '@components/avatar'
import { Menu, Item, Submenu, useContextMenu } from 'react-contexify'
// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'
// import '..//../../../views/logcss.css'
// ** Third Party Components
import { UncontrolledDropdown, Button, Card, CardBody, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, LogOut, CheckSquare, MessageSquare, Bell, Settings, CreditCard, HelpCircle, Power, ChevronDown, AlignJustify, Codepen, Circle, Check, AlertCircle } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/raviKukreja.jpg'

const ToastContent = ({ text }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check />} />
        <h6 className='toast-title'>Clicked {text}</h6>
      </div>
    </div>
  </Fragment>
)

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

    const { show } = useContextMenu({
    id: 'submenu_id'
  })

  const handleClick = text => {
    toast.success(<ToastContent text={text} />, { hideProgressBar: true, closeButton: false })
  }
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
    <div>

        <span className='h6' onClick={show}>
          Transaction
        </span>
        <Menu style={{marginTop : '2.1rem'}} id='submenu_id'>
          <Link to='/Homes/bid'>
            <Submenu className='m-0 p-0' label='Bid'>
            
                <Link to='/Homes/bid'><Item >Create New</Item></Link>
                <Link to='/Homes/bid'><Item >My Bids</Item></Link>
                <Link to='/Homes/bid'><Item >New Leads</Item></Link>
            
            </Submenu>
          </Link>
          <Link to='/Homes/rewards'>
            <Submenu label='Orders'>
              
                <Link to='/Homes/Orders'><Item>Purchase Order</Item></Link>
                <Link to='/Homes/Orders'><Item>My Bids</Item></Link>
                <Link to='/Homes/Orders'><Item >New Leads</Item></Link>
             
            </Submenu>
          </Link>
          <Item onClick={() => handleClick('Option 1')}>Payments</Item>
          <Link to='/Homes/rewards'>
            <Submenu label='Rewards'>
              
                <Link to='/Homes/rewards'><Item onClick={() => handleClick('Echo')}>Bid Coin</Item></Link>
                <Link to='/Homes/rewards'><Item onClick={() => handleClick('Foxtrot')}>BId Cash</Item></Link>
               
            </Submenu>
          </Link>
          <Item onClick={() => handleClick('Option 1')}>Sponsership</Item>
        </Menu>
      
    </div>
  )
}

export default ProductDropDown
