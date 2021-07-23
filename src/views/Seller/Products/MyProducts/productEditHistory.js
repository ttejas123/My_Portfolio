//User Info, SKU, Product Name, MRP, MOQ, Image, added Date
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash, Eye, Check, X  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup,
  Input,
  Label,
  Row,
  Media,
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

const ProductEditHistory = () => {
  // ** States
  const [formModal, setFormModal] = useState(false)
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [selectedProduct, setselectedProduct] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [addClicked, setAddClicked] = useState(0)
  const [values, setValues] = useState('')

   const optionCategory = [
        {value: "Electronics", label: "Electronics", id:0},
        {value: "Clothing", label: "clothing", id:1},
        {value: "Footwear", label: "Footwear", id:2}
      ]
      const optionSubCategory = [
        {value: "Mobile", label: "Mobile", id:0},
        {value: "Tablet", label: "Tablet", id:1},
        {value: "Telivision", label: "Telivision", id:2}
      ]

      const optionReportReasons = [
        {value: "Price", label: "Price", id:0},
        {value: "Details", label: "Details", id:1},
        {value: "Specifications", label: "Specifications", id:2}
      ]

  const tempStyle = {
      minHeight : '130px'
  }

  //columns
  const columns = [
    {
        name: 'BUIN',
        selector: 'buin',
        sortable: true,
        minWidth: '30px',
        maxWidth : '100px'
    },
        {
          name: 'Product Name',
          selector: 'product_name',
          sortable: true,
          minWidth: '50px'
        },
        {
          name: 'Entity Changed',
          selector: 'entityChanged',
          sortable: true,
          minWidth: '50px'
        },
        {
            name: 'Previous Value',
            selector: 'previousValue',
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Updated Value',
            selector: 'updatedValue',
            sortable: true,
            minWidth: '50px'
        },
        // {
        //     name: 'Fsn Number',
        //     selector: 'fsnNumber',
        //     sortable: true,
        //     minWidth: '50px',
        //     style : tempStyle
        // },
        // {
        //     name: 'HSN Code',
        //     selector: 'hsnCode',
        //     sortable: true,
        //     minWidth: '50px',
        //     style : tempStyle
        // },
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
            minWidth: '50px'
        }
    ]


  // ** Function to handle toggle
  const handleModal = () => {
    if (addClicked === 1) {
     setAddClicked(0)
    } else {
      setAddClicked(1)
    }
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    console.log(data)
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
         
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.username.toLowerCase().startsWith(value.toLowerCase()) ||
          item.product_name.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase()) ||
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.product_name.toLowerCase().includes(value.toLowerCase()) 

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
<CardBody>
      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Edit History</CardTitle>
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
        </Row>
        <DataTable
          noHeader
          pagination
          selectableRows
          dense='true'
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        
      </Card>
      </CardBody>
    </Fragment>
  )
}

export default ProductEditHistory
