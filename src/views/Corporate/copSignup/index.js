import { useSkin } from '@hooks/useSkin'
import Dsdh from './formW.js'
import { Link, Redirect } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
import './style.css'
const Login = () => {
  const [skin, setSkin] = useSkin()

  return (
    <div
    className="reMain"
  >
      <Row className='auth-inner m-0 ' >
        {/*<Link className='brand-logo pl-lg-3 pt-lg-5' to='/'>
               
                   <img width='150' height='45' src={logo} alt='Login V2' />         
                  <h2 className='brand-text text-primary '></h2>
                </Link>*/}
        
        <Col lg='1' sm='0'></Col>
        <Col className=' align-items-center px-2 pt-lg-3 pb-lg-3' lg='10' sm='12'>
         <Row className=' align-items-center  px-2 p-lg-2'> 
    
          <Col md='12' xs='12'>
                <div className="sign_info_content pt-2 pt-lg-5 pt-lg-0 pl-lg-5">
                   <Dsdh />
                </div>
          </Col>
         </Row>
        </Col>
        
      </Row>
    </div>
  )
}

export default Login
