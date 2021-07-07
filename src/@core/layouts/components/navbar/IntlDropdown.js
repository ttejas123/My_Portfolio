// ** React Imports
import { useContext } from 'react'
import { Link } from 'react-router-dom'
// ** Third Party Components
import ReactCountryFlag from 'react-country-flag'
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import logo from '@src/assets/images/logo/logo.jpg'

// ** Internationalization Context
import { IntlContext } from '@src/utility/context/Internationalization'
const IntlDropdown = () => {
  // ** Context
  const intlContext = useContext(IntlContext)
  console.log(intlContext)

  // ** Vars
  const langObj = {
    en: 'English',
    de: 'German',
    fr: 'French',
    pt: 'Portuguese'
  }

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault()
    intlContext.switchLanguage(lang)
  }

  return (
    <UncontrolledDropdown href='/' tag='li' className='dropdown-language nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link' onClick={e => e.preventDefault()}>
        {/* <ReactCountryFlag
          className='country-flag flag-icon'
          countryCode='us'
          svg
        /> */}
         <Link to='/home'>
        <div className='d-inline-block' style={{paddingTop:'7px'}}>
      <img className='mb-1' src={logo} alt={"Logo"} height='25' width='25'/>
      </div>
        <span className='font-weight-bold mr-1 h2 ' style={{marginLeft:5, fontWeight:1500, color:'black'}}>Bidoya</span>
        </Link>
      </DropdownToggle>
    </UncontrolledDropdown>
  )
}

export default IntlDropdown
