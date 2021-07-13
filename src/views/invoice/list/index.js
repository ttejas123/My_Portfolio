// ** React Imports
import { useState, useEffect, forwardRef } from 'react'
import { Link } from 'react-router-dom'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Button, Label, Input, CustomInput, Row, Col, Card, FormGroup } from 'reactstrap'

// ** Store & Actions
import { getData } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const InvoiceList = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => {
    console.log(state)
    return state.invoice
  })

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [model, setModel] = useState(false)

  const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue, handlePerPage, rowsPerPage }) => {
  return (
    <>
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center mr-2'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control ml-50 pr-3'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
            >
              <option value='7'>7</option>
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
          </div>
          <Button.Ripple tag={Link} to='/tabless/tables1ss' color='primary'>
            Group By
          </Button.Ripple>
        </Col>
        <Col
          lg='6'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0'
        >
          <div className='d-flex align-items-center'>
            <Label for='search-invoice'>Search</Label>
            <Input
              id='search-invoice'
              className='ml-50 mr-2 w-100'
              type='text'
              value={value}
              onChange={e => handleFilter(e.target.value)}
              placeholder='Search'
            />
          </div>
          
        </Col>
      </Row>
    </div>
    <div className={model ? ('invoice-list-table-header w-100 py-2') : ('d-none')} >
      <Row>
        <Col sm='3'>
              <FormGroup>
                <Label for='EmailVertical'>Name</Label>
                <Input type='text' disabled name='Name' id='NameVertical' placeholder='Name' />
              </FormGroup>
        </Col>
        <Col sm='3'>
              <FormGroup>
                <Label for='EmailVertical'>SKU ID</Label>
                <Input type='text' disabled name='Name' id='NameVertical' placeholder='SKU ID' />
              </FormGroup>
        </Col>
        <Col sm='3'>
              <FormGroup>
                <Label for='EmailVertical'>Lead Time</Label>
                <Input type='datepicker' name='Name' id='NameVertical' placeholder='Lead Time' />
              </FormGroup>
        </Col>
        <Col sm='3'>
              <FormGroup>
                <Label for='EmailVertical'>Rate</Label>
                <Input type='text' name='Name' id='NameVertical' placeholder='Rate' />
              </FormGroup>
        </Col>
        <Col sm='3'>
              <FormGroup>
                <Label for='EmailVertical'>MOQ</Label>
                <Input type='text' name='Name' id='NameVertical' placeholder='MOQ' />
              </FormGroup>
        </Col>
        <Col sm='3'>
              <FormGroup>
                <Label for='EmailVertical'>Customization</Label>
                <Input type='textarea' name='Name' id='NameVertical' placeholder='Required Customization' />
              </FormGroup>
        </Col>
        <Col sm='2'>
              <FormGroup>
                
                <CustomInput
                  type='checkbox'
                  className='custom-control-Primary'
                  id='Primary'
                  label='Sampling'
                  defaultChecked
                  inline
                />
              </FormGroup>
        </Col>
        <Col sm='2'>
              <FormGroup>
                
                <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Inspection'
            defaultChecked
            inline
          />
              </FormGroup>
        </Col>
        
      </Row>
    </div>
    </>
  )
}

  const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => {
      if (rest.name === "select-all-rows" && rest.checked === true) {
        setModel(true)
      } else if (rest.name === "select-all-rows" && rest.checked === false) {
        setModel(false)
      }
      return (
        <div className='custom-control custom-checkbox'>
          <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
          <label className='custom-control-label' onClick={onClick} />
        </div>
      )
    }
  )
  useEffect(() => {
    console.log(getData)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
        q: value
      })
    )
  }, [dispatch])

  const handleFilter = val => {
    setValue(val)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
        q: val
      })
    )
  }

  const handlePerPage = e => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        status: statusValue,
        q: value
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value,
        q: value
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        status: statusValue,
        q: value
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        activeClassName='active'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
      />
    )
  }

  const dataToRender = () => {
    const filters = {
      status: statusValue,
      q: value
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      
      return store.data
    } else if (store === 0 && isFiltered) {
      return []
    } else {
      
     
    }
  }

  return (
    <div className='invoice-list-wrapper rounded'>
      <Card className='mx-1'>
        <div className='invoice-list-dataTable'>
          <DataTable
            noHeader
            pagination
            selectableRows
            selectableRowsComponent={BootstrapCheckbox}
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
              <CustomHeader
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
              />
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default InvoiceList
