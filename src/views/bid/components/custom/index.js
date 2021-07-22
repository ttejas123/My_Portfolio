//1. Name, 2. Product, 3. SKU, 4. Customization, 5. Action
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
import { data } from './data'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import nego from '@src/assets/images/icons/nego.png'
import { ChevronDown,  X, Check } from 'react-feather'
import Timeline from '@components/timeline'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter, 
  ModalHeader,
  Button,
  Badge
} from 'reactstrap'


const BidsList = () => {
    const [picker, setPicker] = useState(new Date())
    const statusObj = {
          pending: 'light-secondary',
          approved: 'light-success',
          approval: 'light-warning'
    }

    const ndata = [
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
          name: 'BUIN',
          selector: 'BUIN',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Customization',
          selector: 'custom',
          sortable: true,
          minWidth: '150px'
        }, 
        {
            name: 'Response',
            selector: 'response',
            sortable: true,
            minWidth: '50px',
            cell: row => {
              const data = row.response === true ? (<Badge color='success' className='badge-glow'>
                     Approved
                  </Badge>) : (<Badge color='danger' className='badge-glow'>
                    Disapproved
                  </Badge>)
              return (
                <div className='d-flex justify-content-left align-items-center '>
                  {data}
                </div>
              )
            }
        }  
    ]
    
    const [modal, setModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(7)
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
  
    // ** Downloads CSV
    function downloadCSV(array) {
      const link = document.createElement('a')
      let csv = convertArrayOfObjectsToCSV(array)
      if (csv === null) return
  
      const filename = 'export.csv'
  
      if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`
      }
  
      link.setAttribute('href', encodeURI(csv))
      link.setAttribute('download', filename)
      link.click()
    }
  
    return (
      <Fragment>
         <Modal isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalHeader toggle={() => setModal(!modal)}>Negotiation History</ModalHeader>
          <ModalBody>
          <Timeline className='ml-50 mb-0' data={ndata} />
          </ModalBody>
        </Modal>
        <Card>
          <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
            <CardTitle tag='h4'>My Bids</CardTitle>
           
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
            // selectableRows
            columns={ndata}
            paginationPerPage={rowsPerPage}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
            data={searchValue.length ? filteredData : data}
            // selectableRowsComponent={BootstrapCheckbox}
          />
          
        </Card>
      </Fragment>
    )
  }
  
  export default BidsList