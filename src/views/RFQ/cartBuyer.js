// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import CardAction from '@components/card-actions'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** React Imports
import { Fragment, useState, forwardRef } from 'react'

// ** Table Data & Columns
import { data } from './data'

// ** Add New Modal Component

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash, Zap  } from 'react-feather'
import {
  Card,
  CardHeader,
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
import CardBody from 'reactstrap/lib/CardBody'
import Topbar from '../Rfq7/topbar'
import SubBar from '../Rfq7/subBar'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const CartBuyer = () => {
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')

  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

    // ** Function to handle toggle
  const handleModal = () => {
    if (addClicked === 1) {
     setAddClicked(0)
    } else {
      setAddClicked(1)
    }
  }

   //deleteCountry
  const deleteState = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) {
        console.log(" your record is deleted")
      } else {
      console.log("not deleted ")
      }
  }
    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
     console.log(currentId)
      setCurrentId("")
      console.log(val)
  }

  //columns
  const columns = [
        {
          name: 'SKUID',
          selector: 'skuId',
          sortable: true,
          minWidth: '90px'
        },
        {
          name: 'Product Name',
          selector: 'productName',
          sortable: true,
          minWidth: '90px'
        },
        {
            name: 'Sample MRP',
            selector: 'sampleMrp',
            sortable: true,
            minWidth: '90px'
        },
        {
            name: 'MOQ Units',
            selector: 'moqUnits',
            sortable: true,
            minWidth: '90px'
        },
        {
            name: 'Offer Price',
            selector: 'offerPrice',
            sortable: true,
            minWidth: '90px'
        },
        {
            name: 'Delivery Time',
            selector: 'deliveryTime',
            sortable: true,
            minWidth: '90px'
        },
        {
            name: 'Inventory',
            selector: 'inventory',
            sortable: true,
            minWidth: '90px'
        },
        {
            name: 'Image',
            selector: 'image',
            sortable: true,
            minWidth: '90px',
            minHeight:'330px',
            cell: row => (
              <div className=''>
                <div className='mx-1 my-1'>
                  <CardBody className='d-block font-weight-bold py-1 px-0'>
                      <img src={row.image} alt={row.Name} width='40' height='50'/>
                      </CardBody>
                </div>
              </div>
            )
        }
    ]


  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    console.log(data)
    setSearchValue(value)
    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase())

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

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
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
      {/* <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Brand List</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <Link to={`/master/branda/add`}>
                <Button className='ml-2' color='primary' onClick={handleModal}>
                                        <Plus size={15} />
                                        <span className='align-middle ml-50'>Add Your Brand</span>
                </Button>
            </Link>   
          </div>
        </CardHeader>
        <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row> */}
        <Topbar/>
        <Card>
        <SubBar cart='true' buttons='true'/>
        <hr className='mb-0'/>
        <CardAction color='primary' inverse className='text-truncate py-0'  actions='remove'>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom pt-0'>
          <CardTitle tag='h4'>Home Decor Wall Hanging Painting (18)</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <Link to={`/master/branda/add`}>
                <Button className='ml-2' color='primary' onClick={handleModal}>
                                        <Zap size={15} />
                                        <span className='align-middle ml-50'>RFQ</span>
                </Button>
            </Link>   
          </div>
        </CardHeader>
        <DataTable
          noHeader
          pagination
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        </CardAction>
        </Card>
        </Fragment>
  )
}

export default CartBuyer
