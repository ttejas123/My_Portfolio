// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
import { Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
import Nouislider from 'nouislider-react'
import '@styles/react/libs/noui-slider/noui-slider.scss'
import Repeters from './formRep'
import { useRTL } from '@hooks/useRTL'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Star, Pocket, Truck, Search } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import NumberInput from '@components/number-input'
import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { 
  Button, 
  Modal, 
  ModalHeader, 
  CardHeader, 
  CardBody, 
  ModalBody, 
  Card, 
  CardTitle,
  FormGroup, 
  InputGroup, 
  InputGroupAddon, 
  InputGroupText, 
  Input, 
  Label, 
  Media,
  Badge, 
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem, 
  Row, 
  Col, 
  CardText
} from 'reactstrap'
// ** Styles
const AddNewModal = (prop) => {
     const [count, setCount] = useState(0)
   const [isRtls, setIsRtl] = useRTL()
  const [values, setValues] = useState('')
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  const view = (val) => {
    //here we passing id to delete this specific record
   setModal(true)
  }

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className=''
     
      contentClassName='pt-0'
    >

      <ModalBody >
          <Repeters />
      </ModalBody>
    
    </Modal>
  )
}

export default AddNewModal