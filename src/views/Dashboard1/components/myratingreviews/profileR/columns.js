// ** React Imports
import { Fragment } from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import Gal from '@src/assets/images/logo/g.png'
// ** Store & Actions

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
  Star,
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

      const custom =  (row) => {
        return row.custom === true ? (
            <div className='d-flex'><div style={{fontSize: "10px"}}>Customization:</div> <Check className='ml-1' size={13} /></div>
          ) : (
            <div className='d-flex'><div style={{fontSize: "10px"}}>Customization:</div> <X className='ml-1' size={13}/></div>
          )
      }

      const Inspec = (row) => {
         return row.inspection === 0 ? (
            <div className='d-flex'><div style={{fontSize: "10px"}}>Inspection:</div> <Check className='ml-1' size={13} /></div>
          ) : (
            <div className='d-flex'><div style={{fontSize: "10px"}}>Inspection:</div> <X className='ml-1' size={13}/></div>
          )
      }

      const Sampling = (row) => {
        return row.sampling === true ? (
            <div className='d-flex'><div style={{fontSize: "10px"}}>Sampling:</div> <Check className='ml-1' size={13} /></div>
          ) : (
            <div className='d-flex'><div style={{fontSize: "10px"}}>Sampling:</div> <X className='ml-1' size={13}/></div>
          )
      }

// ** Table columns
export const columns = [
  {
    name: 'Date',
    maxWidth: '300px',
    selector: 'dueDate',
    sortable: true,
    cell: row => {
      return (
        <div>
          {row.dueDate}
        </div>
      )
    }
  },
  {
          name: 'Rating',
          selector: 'rating',
          sortable: true,
          maxWidth: '300px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              <div className='d-flex flex-column'>
                <Rating
                    emptySymbol={<Star size={15} fill='#babfc7' stroke='#babfc7' />}
                    fullSymbol={<Star size={15} fill='#ff9933' stroke='#ff8000' />}
                    initialRating={row.rating}
                    readonly
                  />  
              </div>
            </div>
          )
        },
        {
          name: 'Review',
          selector: 'review',
          sortable: true,
          maxWidth: '300px'
        }
]
