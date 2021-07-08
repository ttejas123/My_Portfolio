import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import SearchCard from './searchCard'
import Header from './header'
import CreateCart from '../Rfq7/createCart'
import Category from './categories'
import Footer from '../Home'
import Marketting from './marketing'
import Testimonals from './testimonals'
import UseProf  from './UseProf'
import Bbb3 from './home_info_card.js'

// import '@styles/base/pages/page-knowledge-base.scss'

const Homepage = () => {
    return (
       <div className="bg-white"> 
           <Header/>
           {/* <CreateCart/> */}
           <SearchCard/>
           <UseProf/>
           <Category/>
           <Bbb3 />
           <Testimonals/>
           <Marketting/>
           {/* <Header/> */}
       </div>
    )
}

export default Homepage
