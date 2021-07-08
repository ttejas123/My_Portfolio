// import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

// const Home = () => {
//   return (
//     <div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Kick start your project 🚀</CardTitle>
//         </CardHeader>
//         <CardBody>
//           <CardText>All the best for your new project.</CardText>
//           <CardText>
//             Please make sure to read our{' '}
//             <CardLink
//               href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
//               target='_blank'
//             >
//               Template Documentation
//             </CardLink>{' '}
//             to understand where to go from here and how to use our template.
//           </CardText>
//         </CardBody>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Want to integrate JWT? 🔒</CardTitle>
//         </CardHeader>
//         <CardBody>
//           <CardText>
//             We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.
//           </CardText>
//           <CardText>
//             Please read our{' '}
//             <CardLink
//               href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/auth'
//               target='_blank'
//             >
//               JWT Documentation
//             </CardLink>{' '}
//             to get more out of JWT authentication.
//           </CardText>
//         </CardBody>
//       </Card>
//     </div>
//   )
// }

// export default Home

// ** Icons Import
import { Facebook, Heart, Linkedin, Twitter, Youtube } from 'react-feather'
import { Row, Col, CardBody } from 'reactstrap'
import Avatar from '@components/avatar'
import logo from '@src/assets/images/logo/logo.jpg'

const OurFooter = () => {
  return (
    <div className='pt-5'   style={{
      // backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`,
     backgroundColor:'#f8f1e8',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      marginTop:-5
    }}>
      <hr/>
  <Col lg='12' className='mt-5'>
  <Row className='mt-5'>
  <Col lg='6'>
    <Col lg='7'>
    <CardBody>
    <div className='d-inline-block '>
      <img className='mb-1' src={logo} alt={"Logo"} height='25' width='25'/>
      </div>
      <h4 className='text-align-right'>
        Join millions of people who organize work and life with Todolist
      </h4>
      <span className=' d-none d-md-block mt-2'>
      {/* <Avatar className='mr-1 d-inline-block' width='32' height='32' style={{borderRadius:50}}>
      <Twitter fill='red' size={14}/>
        </Avatar>
        <div className='mr-1 d-inline-block' style={{border:'2px solid #c3c3c3', borderRadius:"0%", backgroundColor:"#c3c3c"}}>
      <Twitter fill='red' size={14}/>
        </div>
        <div className='mr-1 d-inline-block' width='32' height='32'>
      <Twitter fill='red' size={14}/>
        </div> */}
        <Twitter fill='white' style={{marginRight:`10`}} size={14}/>
        <Facebook fill='white' style={{marginRight:`10`}} size={14}/>
        <Youtube  fill='white' style={{marginRight:`10`}} size={14}/>
        <Linkedin fill='white' style={{marginRight:`10`}} size={14}/>
      </span>
    </CardBody>
    </Col>
  </Col>
  <Col lg='6' className=''>
        <Row className='' >
        <Col sm='3'>
        <span>Bidoya</span>
        <div className='mt-1'>
          <span className='h6'>
            About Us
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Careers
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Blog
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Sign In
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Security
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Privacy
          </span>
        </div>
        </Col>
        <Col sm='3'>
        <span >Our Products</span> 
        <div className='mt-1'>
          <span className='h6'>
            Platform Overview
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Performance
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Grow
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Engagement
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Analytics
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Integrations
          </span>
        </div>
        </Col>
        <Col sm='3'>
        <span>Resources</span>
        <div className='mt-1'>
          <span className='h6'>
            Library
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Articles
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Interviews
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Webinars
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Books
          </span>
        </div>
        </Col>
         </Row>
        
          </Col>
          <Col lg='2'>
  </Col>
  </Row>
        </Col>
        <hr/>
        <CardBody className='py-0' style={{backgroundColor:'#f1dfcd'}}>
        <p className='clearfix mb-0 pt-1'>
      <span className='float-md-left d-block d-md-inline-block  h6'>
         © Copyright {new Date().getFullYear()}{' '}, All rights Reserved

        {/* <span className='d-none d-sm-inline-block'></span> */}
      </span>
      <span className='float-md-right d-none d-md-block'>
      {/* <Avatar className='mr-1 d-inline-block' width='32' height='32' style={{borderRadius:50}}>
      <Twitter fill='red' size={14}/>
        </Avatar>
        <div className='mr-1 d-inline-block' style={{border:'2px solid #c3c3c3', borderRadius:"0%", backgroundColor:"#c3c3c"}}>
      <Twitter fill='red' size={14}/>
        </div>
        <div className='mr-1 d-inline-block' width='32' height='32'>
      <Twitter fill='red' size={14}/>
        </div> */}
        <Twitter fill='white' style={{marginRight:`10`}} size={14}/>
        <Facebook fill='white' style={{marginRight:`10`}} size={14}/>
        <Youtube  fill='white' style={{marginRight:`10`}} size={14}/>
        <Linkedin fill='white' style={{marginRight:`10`}} size={14}/>
      </span>
    </p>
    </CardBody>
    {/* <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://1.envato.market/pixinvent_portfolio' target='_blank' rel='noopener noreferrer'>
          Pixinvent
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-right d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} />
      </span>
    </p> */}
    </div>
  )
}

export default OurFooter
