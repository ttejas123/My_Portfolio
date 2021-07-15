import { useState, useContext } from 'react'
import { Button, CardText, CardBody, Row, Col, CardImg, Card, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '@styles/base/pages/page-misc.scss'
import orders from '@src/assets/images/elements/ordersImg.png'
import myProfile from '@src/assets/images/elements/myProfile.png'
import bidsImage from '@src/assets/images/elements/bidsImg.png'
// import googleLogo from '@src/assets/images/elements/p1.jpg'
import CardHeader from 'reactstrap/lib/CardHeader'
import Avatar from '@components/avatar'
import { AlertCircle, MoreHorizontal } from 'react-feather'

const SiteMap = props => {
    
    const Links = [
        {
            title : 'Your Orders',
            links : [
                {
                    linkName : 'My Orders',
                    description: 'View all your Orders till date'
                },
                {
                    linkName : 'Track Status',
                    description: 'Track Your Order Status'
                }
            ]
        },
        {
            title : 'My Profile',
            links : [
                {
                    linkName : 'My Gallery',
                    description: 'View all the images uploaded by you'
                },
                {
                    linkName : 'My Kyc',
                    description: 'View documents submitted by you and track their approval status'
                },
                {
                    linkName : 'My Commissions',
                    description: 'View your commissions'
                }
            ]
        },
        {
            title : 'Bids',
            links : [
                {
                    linkName : 'My Bids',
                    description: 'View all your Bids till date'
                },
                {
                    linkName : 'Old Bids',
                    description: 'View all your past Bid'
                },
                {
                    linkName : 'Individual Bid',
                    description: 'View Individual Bid Detail'
                },
                {
                    linkName : 'New Leads',
                    description: 'View New Leads'
                }
            ]
        }
    ]
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({
        title : '',
        links : [
            {
                linkName : '',
                description : ''
            }
        ]
    })
    const handlePropertiesClick = (number) => {
        setModalData(Links[number])
        setModal(true)
    }

    const renderLinks = () => {
        return modalData.links.map(col => {
          return (
           <li>
               <h6 className='text-truncate'>{`${col.linkName} : `}</h6>
               <span>
                   {col.description}
               </span>
               </li>
          )
        })
      }

    return (
        <>
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalHeader toggle={() => setModal(!modal)}>{modalData.title}</ModalHeader>
          <ModalBody>
          <ul className='pl-1'>
            {renderLinks()}
            </ul>
          </ModalBody>
          {/* <ModalFooter>
            <Button color='primary' onClick={() => setModal(!modal)}>
              Accept
            </Button>
          </ModalFooter> */}
        </Modal>
        <div className='mt-5 mb-3'>
                {/* <h1 className='text-primary text-center'>Our SiteMap</h1>
                <div className='home-prof-wrapper'>
                        <div className='misc-inner'>
            <div className='w-100 text-center'>
            <p className=' mt-1 pb-1 ' style={{textAlign:'center'}}>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia commodo tristique. Cras rutrum sapien non augue venenatis blandit. Praesent ac ante eu lorem */}
                                    {/* The fastest way to convert visitors into leads and sales on your website is with Social Proof Marketing. That's why 125,000+ businesses use Bidoya. */}
                                    {/* </p>
                                    </div>
                                    </div>
                                    </div> */}
                    <Row className='match-height'>   
                        <Col lg='2' sm='2' md='2' xs='2'>
                        </Col>             
                <Col lg='8' md='8' sm='8' xs='8'>
                    <Row className='match-height'>
                        <Col md='6' xs='12' lg='4'>
                        <Card >
          <CardBody className='py-0' style={{paddingLeft:'0.5rem'}}>
              <Row>
                  <Col lg='4'>
                      <CardHeader className=''>
                <img src={orders} height='60' width='60'/>
                </CardHeader>
                  </Col>
                  <Col lg='8' className='px-0'>
                  
            <CardHeader tag='h4' className='px-0 pb-0'> 
            <h4>MY Orders</h4>
            <a>
                       <AlertCircle size={20} style={{marginBottom:'5px'}} onClick={() => {
                           handlePropertiesClick('0')
                       }}/>
            </a>
            <CardText>
                <span className='h6 '>
            View Orders, Track Status, View Orders, Track Status,View Orders Track Status, ...
             </span>
         </CardText>
         </CardHeader>
            </Col>
            <Col lg='12'>
            <CardHeader className='py-0'>
           <ul className='pl-0'>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                       <a>My Orders</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                      <a>Track Status</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                      <a>My wishlist</a> 
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                       <a>My Commisiions</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                      <a>more...</a> 
                   </span>
               </div>
           </ul>
            </CardHeader>
            </Col>
            </Row>
          </CardBody>
        </Card>
                      </Col>    
                      <Col md='6' xs='12' lg='4'>
                        <Card >
          <CardBody className='py-0' style={{paddingLeft:'0.5rem'}}>
              <Row>
                  <Col lg='4'>
                      <CardHeader className=''>
                <img src={myProfile} height='60' width='60'/>
                </CardHeader>
                  </Col>
                  <Col lg='8' className='px-0'>
                  
            <CardHeader tag='h4' className='px-0 pb-0'> 
            <h4>MY Profile</h4>
            <a>
                     <AlertCircle size={20} style={{marginBottom:'5px'}} onClick={() => {
                           handlePropertiesClick('1')
                       }}/>
            </a>
            <CardText>
                <span className='h6'>
                View Orders, Track Status, View Orders, Track Status,View Orders Track Status, ...
             </span>
         </CardText>
         </CardHeader>
            </Col>
            <Col lg='12'>
            <CardHeader className='py-0'>
           <ul className='pl-0'>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                       <a>My Gallery</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                      <a>My Kyc</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                      <a>My Support</a> 
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                       <a>My Warehouses</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                      <a>more...</a> 
                   </span>
               </div>
           </ul>
           </CardHeader>
           </Col>
            </Row>
          </CardBody>
        </Card>
                      </Col>    
                      <Col md='6' xs='12' lg='4'>
                        <Card >
          <CardBody className='py-0' style={{paddingLeft:'0.5rem'}}>
              <Row>
                  <Col lg='4'>
                      <CardHeader className=''>
                <img src={bidsImage} height='60' width='60'/>
                </CardHeader>
                  </Col>
                  <Col lg='8' className='px-0'>
                  
            <CardHeader tag='h4' className='px-0 pb-0'> 
            <h4>Bids</h4>
            <a>
                     <AlertCircle size={20} style={{marginBottom:'5px'}} onClick={() => {
                           handlePropertiesClick('2')
                       }}/>
            </a>
            <CardText>
                <span className='h6'>
                View Orders, Track Status, View Orders, Track Status,View Orders Track Status, ...
             </span>
         </CardText>
         </CardHeader>
            </Col>
            <Col lg='12'>
            <CardHeader className='py-0'>
           <ul className='pl-0'>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                       <a>My Bids</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                      <a>Old Bids</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                      <a>Individual Bid</a> 
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                       {/* <AlertCircle size={20} style={{paddingRight:'5px'}}/> */}
                       <a>Purchase Intents</a>
                   </span>
               </div>
               <div>
                   <span className='h6' style={{color:'blue'}}>
                      <a>more...</a> 
                   </span>
               </div>
           </ul>
            </CardHeader>
            </Col>
            </Row>
          </CardBody>
        </Card>
                      </Col>   
                    </Row>
                    </Col>   
            </Row>
        </div>
                        </>
    )
}
export default SiteMap
