// ** React Imports
import { Fragment } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import Gal from '@src/assets/images/logo/g.png'
// ** Store & Actions
import { deleteInvoice } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  Check,
  X,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: 'Name',
    minWidth: '150px',
    selector: 'client.name',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='align-items-center'>
          <div className='d-flex flex-column'>
            <div className='user-name text-truncate mb-0 w-75 text-truncate'>{name}</div>
          </div>
        </div>
      )
    }
  },
  {
    name: 'SKU ID',
    minWidth: '150px',
    selector: 'SKU_ID',
    sortable: true,
    cell: row => {
      return (
        <div>
          {row.SKU_ID}
        </div>
      )
    }
  },
  {
    name: 'Lead Time',
    minWidth: '150px',
    selector: 'Lead_time',
    sortable: true,
    cell: row => {
      return (
        <div className='align-items-center'>
          <div className='d-flex flex-column'>
            <div className='user-name text-truncate mb-0'>{row.Lead_time}</div>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Rate',
    minWidth: '150px',
    selector: 'client',
    sortable: true,
    cell: row => {
      return (
        <div className=' align-items-center'>
          <div className='user-name text-truncate mb-0'> ₹{row.Rate}</div>
        </div>
      )
    }
  },
  {
    name: 'MOQ',
    minWidth: '150px',
    selector: 'MOQ',
    sortable: true
  },
  {
    name: 'BUIN',
    selector: 'BUIN',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Photo',
    selector: 'releaseDate',
    sortable: false,
    minWidth: '200px',
    cell: row => {
      const avatar = row.avatar1 ? row.avatar1 : Gal
      return (
        <div className=' align-items-center'>
          <img className='img-fluid' width='50' src={avatar} />
        </div>
      )
    }
  },
  {
    name: 'Customization',
    selector: 'balance',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
         <Check className='ml-1' size={18} />
      )
    }
  },
  {
    name: 'Inspection',
    selector: 'balance',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return row.inspection === 0 ? (
        <Check className='ml-1' size={18} />
      ) : (
        <X className='ml-1' size={18}/>
      )
    }
  },
  {
    name: 'Sampling',
    selector: 'balance',
    sortable: true,
    minWidth: '164px',
    cell: row => {
      return row.sampling === true ? (
        <Check className='ml-1' size={18} />
      ) : (
        <X className='ml-1' size={18}/>
      )
    }
  },
  {
    name: 'Action',
    minWidth: '110px',
    selector: '',
    sortable: true,
    cell: row => (
      <div className='column-action d-flex align-items-center'>
      
        <Link to={`/rfq/rfqN/bidDetails`} id={`pw-tooltip-${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
          Preview Invoice
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteInvoice(row.id))
              }}
            >
              <Trash size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
