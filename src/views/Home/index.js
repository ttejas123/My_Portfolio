import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import SearchCard from './searchCard'
import Header from './header'
import CreateCart from '../Rfq7/createCart'
import Category from './categories'
import Footer from '../Home'
import Marketting from './marketing'
import Testimonals from './testimonals'
import UseProf  from './UseProf'
    

// import '@styles/base/pages/page-knowledge-base.scss'

const Homepage = () => {
    return (
       <div> 
           <Header/>
           {/* <CreateCart/> */}
           <SearchCard/>
           <UseProf/>
           <Testimonals/>
           <Marketting/>
           {/* <Header/> */}
           <Category/>
           <Footer/>
       </div>
    )
}

export default Homepage
