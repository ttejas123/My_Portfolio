// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components

// ** Third Party Components
import { User, Info, Share2, FileText, ShoppingCart } from 'react-feather'
import { Card, CardHeader, CardTitle, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'
import '@styles/react/libs/swiper/swiper.scss'
import { useRTL } from '@hooks/useRTL'
import ByUserTab from './CreateProduct/byUser'
import FromExcelSheetTab from './CreateProduct/importFromExcel'
import AsinImportTab from './CreateProduct/asinImport'
const ProductNav = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1')

    // store = useSelector(state => state.users),
    // dispatch = useDispatch(),
    // { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)
  const [isRtl, setIsRtl] = useRTL()

  // ** Function to get user on mount
//   useEffect(() => {
//     dispatch(getUser(parseInt(id)))
//   }, [dispatch])

  return (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card className='mx-1'>
            <Nav pills className='mb-0'>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '1'} onClick={() => toggle('1')}>
                  <span className='align-middle d-none d-sm-block'>Add Esisting Products</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '2'} onClick={() => toggle('2')}>
                  <span className='align-middle d-none d-sm-block'>ASIN + FSN</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '3'} onClick={() => toggle('3')}>
                  <span className='align-middle d-none d-sm-block'>Excel</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '4'} onClick={() => toggle('4')}>
                  <span className='align-middle d-none d-sm-block'>By User</span>
                </NavLink>
              </NavItem>
            </Nav>
        </Card>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <ByUserTab/>
              </TabPane>
              <TabPane tabId='2'>
              <AsinImportTab/>
              </TabPane>
              <TabPane tabId='3'>
              <FromExcelSheetTab/>
              </TabPane>
              <TabPane tabId='4'>
              <ByUserTab/>
              </TabPane>
            </TabContent>
         
      </Col>
    </Row>
  )
}
export default ProductNav
