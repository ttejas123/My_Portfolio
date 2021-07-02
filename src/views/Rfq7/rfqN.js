import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,

  Row,
  Col,
  Badge, UncontrolledDropdown
} from 'reactstrap'

import Select from 'react-select'
// ** React Imports
import { Fragment, useEffect, useRef, useState, forwardRef  } from 'react'
import SubBar from './subBar' 
// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
// ** Steps
import Cards from './Card'

// ** Third Party Components
import { ShoppingCart, Home, CreditCard, XCircle } from 'react-feather'
import { selectThemeColors } from '@utils'
// ** Store & Actions


const optionStatus = [
    {value: "", label: "Filter Status"},
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"}
  ]

import { products } from './data.js'
const Checkout = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)

  // ** Store Vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.ecommerce)

  // // ** Get Cart Items on mount
  // useEffect(() => {
  //   dispatch(getCartItems())
  // }, [])

  return (
      <div  >
        <div className="mb-1">
              <SubBar rfq="true" buttons='true' createBtn='true' />
        </div>
       
           <div className="mb-3 text-right ml-lg-5 mr-lg-5 pl-lg-3 pr-lg-3">
              <Badge   color='primary' style={{padding:'10px', marginRight: "5px"}} pill >
                Marketing<XCircle size={30} style={{color:"#ff6666", marginLeft:"5px"}} />
              </Badge>
              <Badge   color='primary' style={{padding:'10px', marginRight: "5px"}} pill >
                200 Units<XCircle size={30}  style={{ color:"#ff6666", marginLeft:"5px"}} />
              </Badge>
              <Badge   color='primary' style={{padding:'10px', marginRight: "5px"}} pill>
                30 Days<XCircle size={30}  style={{ color:"#ff6666", marginLeft:"5px"}} />
              </Badge>
              <Badge   color='primary' style={{padding:'10px', marginRight: "5px"}} pill>
                Pending<XCircle size={30}  style={{ color:"#ff6666", marginLeft:"5px"}} />
              </Badge>
              
            </div>
        
        <div  className='ml-lg-5 mr-lg-5 pl-lg-3 pr-lg-3'>  
          <Cards
                stepper={stepper}
                products={products}
              />
        </div> 
      </div>  
  )
}
export default Checkout
