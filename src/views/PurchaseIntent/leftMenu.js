
import {
    Card, CardBody,
       Nav, ListGroup, ListGroupItem,
    NavItem,
    NavLink
  } from 'reactstrap'
  import { Home} from 'react-feather'

const PurchaseIntentSideMenu =  props => {
    const {
        activeTab,
        toggle1
      } = props
return (<Card className='p-0'>
<CardBody className='p-1' > 
  <ListGroup flush>

    <ListGroupItem className='cursor-pointer' active={activeTab === '1'} onClick={() => toggle1('1')}>
       <Nav className='mb-0 ml-md-0 ' >
        <NavItem style={{paddingLeft: '5px'}}>
          <NavLink className='font-weight-bold'>
            <span className='d-none d-md-block'>List</span>
            <Home className='d-block d-md-none' size={14} />
          </NavLink>
        </NavItem>
      </Nav>
    </ListGroupItem>
    <ListGroupItem className='cursor-pointer' active={activeTab === '2'} onClick={() => toggle1('2')}>
      <Nav className='mb-0 ml-md-0 ' >
        <NavItem style={{paddingLeft: '5px'}}>
          <NavLink className='font-weight-bold'>
            <span className='d-none d-md-block'>Accepted</span>
            <Home className='d-block d-md-none' size={14} />
          </NavLink>
        </NavItem>
      </Nav>
    </ListGroupItem>
    <ListGroupItem className='cursor-pointer' active={activeTab === '3'} onClick={() => toggle1('3')}>
      <Nav className='mb-0 ml-md-0 ' >
        <NavItem style={{paddingLeft: '5px'}}>
          <NavLink className='font-weight-bold'>
            <span className='d-none d-md-block'>Rejected</span>
            <Home className='d-block d-md-none' size={14} />
          </NavLink>
        </NavItem>
      </Nav>
    </ListGroupItem>
    </ListGroup>
</CardBody>
</Card>  
)
}

export default PurchaseIntentSideMenu
