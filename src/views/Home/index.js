import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import SearchCard from './searchCard'
import Header from './header'
import CreateCart from '../Rfq7/createCart'
import Category from './categories'
import Footer from '../Home'
import Marketting from './marketing'
// import '@styles/base/pages/page-knowledge-base.scss'

const Homepage = () => {
    return (
       <div>
           <Header/>
           {/* <CreateCart/> */}
           <SearchCard/>
           {/* <Header/> */}
           <Category/>
           <Marketting/>
           <Footer/>
       </div>
    )
}

export default Homepage
