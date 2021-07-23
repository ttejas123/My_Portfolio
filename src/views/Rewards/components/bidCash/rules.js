// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data1 } from './data'
import Select from 'react-select'

// ** Add New Modal Component

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Eye, Trash  } from 'react-feather'
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
  UncontrolledAlert,
  Label,
  Row,
  Col,
  Badge, UncontrolledDropdown
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))


// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name || 'John Doe'} initials status="online" />
  }
}


const DataTableWithButtons = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
   const [values, setValues] = useState('')

    const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) { 
        console.log("Deleted")
      } else {
      console.log("not deleted ")
      }
  }

  //columns
  const columns = [
        {
          name: 'Category',
          minWidth: '150px',
          selector: 'category',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
            
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.category}</span>
                
              </div>
            </div>
          )
        },
        {
          name: 'BidCash',
          selector: 'bidCash',
          sortable: true,
          minWidth: '150px',
          cell: row => {
            const str = row.bidCash
           
            return (
              <div className='d-flex justify-content-left align-items-center'>
               {/* {
                                 res === '+' ? (
                                       <Badge color='light-success'>
                                         {str}
                                       </Badge>    
                                   ) : (
                                       <Badge color='light-danger'>
                                         {str}
                                       </Badge>
                                   )
                               }*/}
                  {str}

              </div>
            )
          }
        },
        {
          name: 'Conversion',
          selector: 'rs',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Maximum Redemption',
          selector: 'MRid',
          sortable: true,
          minWidth: '150px'
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }


  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

   // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data1[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }


  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )


  return (
   <Fragment>

      <Card>
      
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start'>
          <CardTitle tag='h4'>Rules</CardTitle>
        </CardHeader>
        <div className='border-bottom'>
          <UncontrolledAlert className='mx-2 text-left' color='primary'>
              <div className='alert-body'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices, elit ut porttitor ultrices, justo magna rhoncus felis, sit amet blandit nibh diam in arcu. Morbi malesuada leo in arcu placerat, convallis varius dui vulputate. Donec aliquet, odio et placerat lobortis, dui massa condimentum eros, quis condimentum mauris libero ut orci. Nulla sit amet sapien a mauris aliquet laoreet quis in nunc. Nulla a dapibus nisi. Nulla vitae euismod neque. Curabitur consequat sapien ut facilisis dapibus. Vestibulum malesuada ultricies tortor et viverra. Nullam in mattis neque. Mauris nec congue quam. Nulla eget tellus vitae purus facilisis pulvinar sed et tellus. Fusce convallis leo nisl, non eleifend est efficitur id.
                  <br /><br />
                Suspendisse laoreet commodo nisi, vel accumsan orci sollicitudin at. Aliquam cursus augue euismod elit rhoncus, quis iaculis nisl tempus. Vestibulum fringilla placerat volutpat. Etiam aliquam at dolor et fringilla. Maecenas ut magna auctor nisi laoreet sodales ut sed enim. Aliquam tempus nisi in lorem convallis, ac tincidunt nulla dapibus. Donec sit amet tempus leo. Etiam ornare imperdiet quam id pretium. Donec consectetur facilisis augue in faucibus. Pellentesque vitae magna sagittis, maximus nisi nec, blandit ante. Suspendisse posuere vulputate ligula at lacinia. Etiam maximus vitae lectus non ornare. Donec pretium tempor urna, at finibus turpis tincidunt ac.
                <br /><br />
                <ul>
                  <li><b> Maximum Use Of Bid Cash Is Depended On Category </b></li>
                  <li><b> You Can't Share Bid Cash With Other People </b></li>
                  <li><b> Bid Cash is Bidoya Currency  </b></li>
                  <li><b> No Refund </b></li>
                </ul>
              </div>
              
          </UncontrolledAlert>
        </div>
      
        <CardBody>
        <DataTable
          noHeader
          pagination
          highlightOnHover
          striped
          columns={columns}
          paginationPerPage={5}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data1}
          
        />
        </CardBody>
        
      </Card>
      
    </Fragment>
  )
}

export default DataTableWithButtons
