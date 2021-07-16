// ** React Imports
import { Fragment, useState } from 'react'
import AutoComplete from '@components/autocomplete'
import Avatar from '@components/avatar'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Table Columns
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { data } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus, Eye} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Row, Col, Label, Input } from 'reactstrap'
//import InputBasic from './AddBackUp'
// import HorizontalForm from './AddBackUp'
// import EditForm from './EditBackUp'
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


const BackUpAccounts = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [value, setValues] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})
  
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const [suggestions, setSuggestions] = useState([
    
        {
          title: 'Tejas'
        },
        {
          title: 'Pravin'
        },
        {
          title: 'Komal'
        },
        {
          title: 'Harpriya'
        },
        {
          title: 'Sneha'
        },
        {
          title: 'Vijay'
        },
        {
          title: 'Vanita'
        },
        {
          title: 'Dhavde'
        }
  ])

  const [suggestions1, setSuggestions1] = useState([
    
        {
          title: 'Admin'
        },
        {
          title: 'Project Lead'
        },
        {
          title: 'Employee'
        }
  ])

  const BackUpColumns = [
    {
          name: 'Backup Name',
          minWidth: '150px',
          selector: 'name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(row)}
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.name}</span>
                <small className='text-truncate text-muted mb-0'>@{row.name}</small>
              </div>
            </div>
          )
    },
    {
      name: 'email',
      selector: 'email',
      sortable: false,
      minWidth: '250px'
    },
    {
      name: 'Role',
      selector: 'role',
      sortable: false,
      minWidth: '250px'
    },
    {
      name: 'Start at',
      selector: 'Date',
      sortable: false,
      minWidth: '250px'
    },
    {
      name: 'End at',
      selector: 'Date2',
      sortable: false,
      minWidth: '250px'
    }
  ]
  
  const Previous = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Prev' /> */}
        </span>
      </Fragment>
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Next' /> */}
        </span>
      </Fragment>
    )
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
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.role.toLowerCase().startsWith(value.toLowerCase()) 
          
        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.role.toLowerCase().includes(value.toLowerCase())  
                   
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

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 5 : data.length / 5 || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
    />
  )

  return (
      <Fragment>
        <Card>

          <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
            <CardTitle tag='h4'>Back Up</CardTitle>
          </CardHeader>
          
          <Row className='justify-content-end mx-0'>
            <Col className='d-flex align-items-center justify-content-end mt-1 mb-1' md='4' sm='12'>
              <Label className='mr-1' for='search-input-1'>
                <b>Members</b>
              </Label>
              <AutoComplete
                suggestions={suggestions}
                className='form-control'
                filterKey='title'
                onChange={(e) => handleFilter(e.target.value)}
                userssValue={(e) => handleFilter(e)} 
                filterHeaderKey='groupTitle'
                placeholder="Backup"
              />
            </Col>
          </Row>
        

      <DataTable
        noHeader
        pagination
        highlightOnHover
        stripedRows
        
        selectableRowsNoSelectAll
        columns={BackUpColumns}
        className='react-dataTable'
        paginationPerPage={5}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={searchValue.length ? filteredData : data}
      />
      </Card>
    
    </Fragment>
  )
}

export default BackUpAccounts
