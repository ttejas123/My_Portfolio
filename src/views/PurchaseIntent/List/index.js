import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
import { data } from './data'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, X, Check, MoreVertical } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap'
import AcceptModalForm from './accept_modal'
import RejectModalForm from './reject_modal'


const PurchaseIntent = () => {
    const [picker, setPicker] = useState(new Date())
    const statusObj = {
          pending: 'light-secondary',
          approved: 'light-success',
          approval: 'light-warning'
    }
    const [editData, setEditData] = useState({})

   
    const [acceptmodal, setAcceptModal] = useState(false)
    const [rejectmodal, setRejectModal] = useState(false)

    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [currentId, setCurrentId] = useState('')
    const [Filter, setFilter] = useState('')
    const [values, setValues] = useState('')
   
    // ** Function to handle filter
    const handleFilter = e => {
      const value = e.target.value
      let updatedData = []
      setSearchValue(value)
  
      if (value.length) {
        updatedData = data.filter(item => {
          const startsWith =
            item.bidId.toLowerCase().startsWith(value.toLowerCase())
          const includes =
            item.bidId.toLowerCase().includes(value.toLowerCase())
            
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
    
  
    const handlePerPage = e => {
      setRowsPerPage(20)
      console.log(e.target.value)
      // dispatch(
      //   getData({
      //     page: currentPage,
      //     perPage: parseInt(e.target.value),
      //     q: searchValue
      //   })
      // )
    }
  
    // ** Custom Pagination
    const CustomPagination = () => (
      <ReactPaginate
        previousLabel=''
        nextLabel=''
        forcePage={currentPage}
        onPageChange={page => handlePagination(page)}
        pageCount={searchValue.length ? filteredData.length / rowsPerPage : data.length / rowsPerPage || 1}
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
    const handleCollapseToggle =  {
    }
    // const conditionalRowStyles = [
    //   {
    //     when: row => row.calories < 300,
    //     style: {
    //       backgroundColor: 'green',
    //       color: 'white',
    //       '&:hover': {
    //         cursor: 'pointer',
    //       },
    //     },
    //   },
    //   // You can also pass a callback to style for additional customization
    //   {
    //     when: row => row.calories < 300,
    //     style: row => ({
    //       backgroundColor: row.isSpecia ? 'pink' : 'inerit',
    //     }),
    //   },
    // ];
   
    const handleAcceptClick = (item) => {
      // if (!addClicked) { 
      //   setEditClicked(!editClicked)
      //   setEditData(item)
      // }
      setEditData(item)
    }
    const handleAccept = (row) =>  {
      handleAcceptClick(row)

      setAcceptModal(!acceptmodal)

    }

    const handleReject = (row) =>  {
      setRejectModal(!rejectmodal)

    }
  
    const columns = [
      // {
      //   name: 'Id',
      //   selector: 'id',
      //   sortable: true,
      //   minWidth: '50px'
      // },
      {
        name: 'Bid',
        selector: 'bidId',
        sortable: true,
        minWidth: '150px'
      },
        {
          name: 'Product',
          selector: 'SKU',
          sortable: true
        },
        {
          name: 'Quantity',
          selector: 'quantity',
          sortable: true
        },
      {
          name: 'Lead Time',
          selector: 'delivery_date',
          sortable: true
        },
        // {
        //   name: 'Date',
        //   selector: 'date',
        //   sortable: true,
        //   minWidth: '150px'
        // },
        {
          name: 'Customization Needed',
          selector: 'date',
          // sortable: true,
          // minWidth: '150px'
          cell: row => (
            <div className='d-flex justify-content-left align-items-center '>
                {row.custimization_require ? <Check/> : <X/>}
              </div>
          )
        },
          {
            name: 'Buyer',
            selector: 'buyer',
            sortable: true,
            minWidth: '150px'
          },
          {
              name: 'Actions',
              minWidth: '100px',
              cell: row => (
                <div className='d-flex'>
                <UncontrolledDropdown>
                  <DropdownToggle className='pr-1' tag='span'>
                    <Check className = 'text-success' size={25} onClick={e => { 
                      handleAccept(row)
                      console.log("Handle the ckehc")
                       }} />
                  </DropdownToggle>
                </UncontrolledDropdown>
                <X className = 'text-danger' size={25} onClick={e => {
                    console.log("Handle the X")
                    handleReject(row)
                  // e.preventDefault()
                }} />
              </div>
              )
            }
     
      
    ]
    const getTrProps = (state, rowInfo, instance) => {
      if (rowInfo) {
        return {
          // className: (rowInfo.row.status == 'D') ? "status-refused" : "", // no effect
          style: {
            background: true ? 'red' : 'green'
          }
        }
      }
      return {}
    }
  
    return (
      <Fragment>
        <Card>
          <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
            <CardTitle tag='h4'>Purchase Intent</CardTitle>
           
          </CardHeader>
  
          <Row className='mx-0 mt-1 mb-50'>
            <Col sm='6'>
             
            </Col>
            <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
              <Label className='mr-1' for='search-input'>
                Search
              </Label>
              <Input
                className='dataTable-filter'
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
            // striped
            // selectableRows
            style = {{backgroundColor : 'red'}}
            columns={columns}
            paginationPerPage={rowsPerPage}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
            data={searchValue.length ? filteredData : data}
            // conditionalRowStyles={conditionalRowStyles}
            // getTrProps={getTrProps}


            // selectableRowsComponent={BootstrapCheckbox}
          />
          
        </Card>
        <AcceptModalForm formModal={acceptmodal} setFormModal={handleAccept} productData = {editData} ></AcceptModalForm>
        <RejectModalForm formModal={rejectmodal} setFormModal={handleReject} productData = {editData} ></RejectModalForm>

      </Fragment>
    )
  }
  
  export default PurchaseIntent