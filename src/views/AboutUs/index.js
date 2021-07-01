import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import Develop from './developSection'
import Leadership from './leadership'
import MediaCoverage from './mediaCoverage'
import OurMission from './ourMission'

// import '@styles/base/pages/page-knowledge-base.scss'

const Homepage = () => {
    return (
       <div className="bg-white"> 
           <OurMission/>
           <Develop/>
           <Leadership/>
           <MediaCoverage/>
       </div>
    )
}

export default Homepage
