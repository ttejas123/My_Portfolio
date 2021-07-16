// Sponser key add form
// Sponser Key List page(Key, product, About paid, start end date)

// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import AutoComplete from '@components/autocomplete'
// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
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

  const [suggestions, setSuggestions] = useState([
    
        {
          title: '#Bid3432'
        },
        {
          title: '#Bid4432'
        },
        {
          title: '#Bid3442'
        },
        {
          title: '#Bid3452'
        },
        {
          title: '#Bid3433'
        },
        {
          title: '#Bid6432'
        },
        {
          title: '#Bid7432'
        }
  ])

  //columns
  const columns = [
        {
          name: 'orderid',
          selector: 'orderId',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Product',
          minWidth: '150px',
          selector: 'Name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.name}</span>
                  
              </div>
            </div>
          )
        },
        {
          name: 'Bid Id',
          selector: 'Bid',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Price Paid',
          selector: 'budget',
          sortable: true,
          minWidth: '150px',
          cell: row => {
            const str = row.budget
            const res = str.substring(0, 1)
            return (
              <div className='d-flex justify-content-left align-items-center'>
                {
      
                        <Badge color='light-success'>
                          {str}
                        </Badge>    
                   
                }

              </div>
            )
          }
        },
        {
          name: 'SGST',
          selector: 'SGST',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'IGST',
          selector: 'IGST',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'CGST',
          selector: 'CGST',
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

      // ** Function to handle filter
  const handleFilter = e => {
    const value = e
    let updatedData = []
    setSearchValue(value)
    console.log(value)
    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
          item.Bid.toLowerCase().startsWith(value.toLowerCase()) 
          
        const includes =
          item.Bid.toLowerCase().includes(value.toLowerCase())
                   
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

   // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

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
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
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
      
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>GST Report</CardTitle>
        </CardHeader>

        <Row className='justify-content-end mx-0'>
            <Col className='d-flex align-items-center justify-content-end mt-1 ' md='4' sm='12'>
              <Label className='mr-1' for='search-input-1'>
                <b>Name of User</b>
              </Label>
              <AutoComplete
                suggestions={suggestions}
                className='form-control'
                filterKey='title'
                onChange={(e) => handleFilter(e.target.value)}
                userssValue={(e) => handleFilter(e)} 
                filterHeaderKey='groupTitle'
                placeholder="Bid Id"
              />
            </Col>
          </Row>
      
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
          data={searchValue.length ? filteredData : data}
          
        />
        </CardBody>
        
      </Card>
      
    </Fragment>
  )
}

export default DataTableWithButtons

//orderid, Payment Name, bid id, invoice, amount, Expected Date

//mode of payment

//order id product, price payed, SGST, IGST, CGST