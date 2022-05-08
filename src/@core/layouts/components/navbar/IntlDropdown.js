import { useContext } from 'react'
import { Link } from 'react-router-dom'
// ** Third Party Components
import ReactCountryFlag from 'react-country-flag'
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import logo from '@src/assets/images/banner/tLogo.jpg'

// ** Internationalization Context
import { IntlContext } from '@src/utility/context/Internationalization'
const IntlDropdown = () => {
  // ** Context
  const intlContext = useContext(IntlContext)

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
    <UncontrolledDropdown href='/' tag='li' >
      <DropdownToggle href='/' tag='a' className='mr-1' onClick={e => e.preventDefault()}>
        {/* <ReactCountryFlag
          className='country-flag flag-icon'
          countryCode='us'
          svg
        /> */}
         <Link to='/'>
        <div className='d-inline-block' style={{paddingTop:'7px'}}>
      <img style={{marginBottom: "0.7rem"}} src={logo} alt={"Logo"} height='32' width='35'/>
      </div>
        <span className='font-weight-bold  mr-0 h2 ' style={{marginLeft:5, fontWeight:1500, color:'black'}}>Tejas</span>
        </Link>
      </DropdownToggle>
    </UncontrolledDropdown>
  )
}

export default IntlDropdown
