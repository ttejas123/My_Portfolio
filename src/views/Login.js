import { useSkin } from '@hooks/useSkin'
import { Link, Redirect } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import './logcss.css'
import '@styles/base/pages/page-knowledge-base.scss'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
const Login = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div
    className='knowledge-base-bg auth-wrapper auth-v2'
         style={{
          backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`,
          height: '100vh'
        }}
  >
      <Row className='auth-inner m-0 ' >
        {/*<Link className='brand-logo pl-lg-3 pt-lg-5' to='/'>
               
                   <img width='150' height='45' src={logo} alt='Login V2' />         
                  <h2 className='brand-text text-primary '></h2>
                </Link>*/}
        
        <Col lg='1' sm='0'></Col>
        <Col className=' align-items-center px-2 pt-lg-3 pb-lg-3' lg='10' sm='12'>
         <Row className=' align-items-center  px-2 p-lg-2'> 
          
          <Col className='px-xl-1 mx-auto pt-lg-5 pt-lg-3 pb-5 pb-lg-5 ' md='4' xs='12'>
                <div className="sign_info_content pt-2 pt-lg-5 pt-lg-0 pl-lg-5">
                                    <h3 className="f_p f_600 f_size_24 t_color3 mb_40 pb-1">First time here ?</h3>
                                    <h2 className="f_p f_400 f_size_30 mb-30 pb-1">Join now and get<br /> <span className="f_700">20% OFF</span> for all <br /> products</h2>
                                    <ul className="list-unstyled mb-0 pb-1">
                                        <li><img src="https://img.icons8.com/material-sharp/16/000000/checkmark--v1.png" /> Premium Access to all Products</li>
                                        <li><img src="https://img.icons8.com/material-sharp/16/000000/checkmark--v1.png" /> Free Testing Tools</li>
                                        <li><img src="https://img.icons8.com/material-sharp/16/000000/checkmark--v1.png" /> Unlimited User Accounts</li>
                                    </ul>
                                    
                                      <Button.Ripple tag={Link} to='/register' color='primary'>
                                        Sign Up
                                      </Button.Ripple>
                                    
                </div>
                
               
          </Col>

          <Col className='px-xl-2 mx-auto sign_info' md='5' xs='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Welcome to Bidoya!
            </CardTitle>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  UserName
                </Label>
                <Input type='text' id='login-email' placeholder='john121' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple tag={Link} to='/homes/dashBoard' color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>New on our Bidoya?</span>
              <Link to='/'>
                <span>Create your account</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>Social Profiles</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center '>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='twitter'>
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
            </div>
          </Col>
         </Row>
        </Col>
        
      </Row>
    </div>
  )
}

export default Login
