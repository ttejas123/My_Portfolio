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
import { Row, Col } from 'reactstrap'
import Avatar from '@components/avatar'

const Footer = () => {
  return (
    <div className='mt-5' style={{bottom:0}}>
  <Col lg='12' className='mt-5'>
  <Row className='mt-5'>
  <Col lg='2'>
  </Col>
  <Col lg='8' className='mt-5'>
        <Row className='mt-5' >
        <Col sm='2'>
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
        <Col sm='2'>
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
        <Col sm='2'>
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
        <Col sm='2'>
        <span>Support</span>
        <div className='mt-1'>
          <span className='h6'>
            Help Center
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Privacy Policy
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Status
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Privacy Request
          </span>
        </div>
        </Col>
        <Col sm='2'>
        <span>Contact Us</span>
        <div className='mt-1'>
          <span className='h6'>
          Dattani Centre, Akurli Rd, Kandivali East, Mumbai,  Maharashtra, 400101, India
          </span>
        </div>
        <div className='mt-1'>
          <span className='h6'>
            Bidoya@xyz.com
          </span>
        </div>
        </Col>
          </Row>
          <hr/>
          <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-2 h6'>
         © Copyright {new Date().getFullYear()}{' '}, All rights Reserved

        {/* <span className='d-none d-sm-inline-block'></span> */}
      </span>
      <span className='float-md-right d-none d-md-block mt-2'>
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
          </Col>
          <Col lg='2'>
  </Col>
  </Row>
        </Col>
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

export default Footer
