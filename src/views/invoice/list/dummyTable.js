// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Table Columns
import { columns } from './columns'
import TableS from './tableSample' 
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Button, Label, Input, CustomInput, Row, Col, Card } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Store & Actions
import { getData } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const InvoiceList = () => {
  const [AllData, setAllData] = useState(null)
  const dispatch = useDispatch()
  const store = useSelector(state => {
    return state.invoice
  })

  const optionStatus = [
    {value: "", label: "Filter Status"},
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"}
  ]

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)

  // useEffect(() => {
  //   dispatch(
  //     getData({
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       status: statusValue,
  //       q: value
  //     })
  //   )
  // }, [dispatch, store.filtered.length])

  // const handleFilter = val => {
  //   setValue(val)
  //   dispatch(
  //     getData({
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       status: statusValue,
  //       q: val
  //     })
  //   )
  // }

  // const handlePerPage = e => {
  //   dispatch(
  //     getData({
  //       page: currentPage,
  //       perPage: parseInt(e.target.value),
  //       status: statusValue,
  //       q: value
  //     })
  //   )
  //   setRowsPerPage(parseInt(e.target.value))
  // }

  // const handleStatusValue = e => {
  //   setStatusValue(e.target.value)
  //   dispatch(
  //     getData({
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       status: e.target.value,
  //       q: value
  //     })
  //   )
  // }

  // const handlePagination = page => {
  //   dispatch(
  //     getData({
  //       page: page.selected + 1,
  //       perPage: rowsPerPage,
  //       status: statusValue,
  //       q: value
  //     })
  //   )
  //   setCurrentPage(page.selected + 1)
  // }

  // const CustomPagination = () => {
  //   const count = Number((store.total / rowsPerPage).toFixed(0))

  //   return (
  //     <ReactPaginate
  //       pageCount={count || 1}
  //       nextLabel=''
  //       breakLabel='...'
  //       previousLabel=''
  //       activeClassName='active'
  //       breakClassName='page-item'
  //       breakLinkClassName='page-link'
  //       forcePage={currentPage !== 0 ? currentPage - 1 : 0}
  //       onPageChange={page => handlePagination(page)}
  //       pageClassName={'page-item'}
  //       nextLinkClassName={'page-link'}
  //       nextClassName={'page-item next'}
  //       previousClassName={'page-item prev'}
  //       previousLinkClassName={'page-link'}
  //       pageLinkClassName={'page-link'}
  //       containerClassName={'pagination react-paginate justify-content-end p-1'}
  //     />
  //   )
  // }

  // const dataToRender = () => {
  //   const filters = {
    //   status: statusValue,
    //   q: value
    // }

  //   const isFiltered = Object.keys(filters).some(function (k) {
  //     return filters[k].length > 0
  //   })

  //   if (store.filtered.length) {
  //     setAllData(store.filtered)
  //     return store.filtered
  //   } else if (store === 0 && isFiltered) {
  //     return []
  //   } else { 
     
  //   }
  // }


  return (
    <>
    <Card style={{marginTop: '-1.9rem'}} className='mx-1'>
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-3'>
          <div className='d-flex align-items-center mr-2'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control ml-50 pr-3'
              type='select'
              id='rows-per-page'
             
            >
              <option value='7'>7</option>
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
          </div>
          <Label>Group By</Label>
          <Col md='6'>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                id='State'
                isMulti
                isClearable
                isSearchable
                
                classNamePrefix='select'
                closeMenuOnSelect={false}
                
                theme={selectThemeColors}
                className='react-select'
                
                options={optionStatus}
                value={value.Date}
                  onChange={data => {
                                     setValue(
                                              {
                                                 ...value,
                                                 Date : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>
        </Col>
        <Col
          lg='6'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 px-lg-2 pr-lg-1 p-0'
        >
          <div className='d-flex align-items-center'>
            <Label for='search-invoice'>Search</Label>
            <Input
              id='search-invoice'
              className='ml-50 mr-2 w-100'
              type='text'
             
              placeholder='Search User'
            />
          </div>
        </Col>
      </Row>
    </div>
    </Card>
    <div className='invoice-list-wrapper rounded'>
      <div className='mx-1'>
          <div className='my-1'><TableS /></div>
      </div>
    </div>
    </>
  )
}

export default InvoiceList
