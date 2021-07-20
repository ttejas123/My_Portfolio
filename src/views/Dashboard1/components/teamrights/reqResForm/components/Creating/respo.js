// ** React Imports
import { useState } from 'react'

// ** Table columns & Expandable Data
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Lock } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CustomInput, Table, Label } from 'reactstrap'


const Columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: 'Rights',
    selector: 'right',
    sortable: true
  }
]

const data = [
  {
    id: 1,
    rights:[ 
                {link:"MasterLink1", ids:1, c: true, d: true, u: true, v: false}, 
                {link:"MasterLink2", ids:2, c: true, d: false, u: true, v: true}, 
                {link:"MasterLink3", ids:3, c: false, d: true, u: false, v: true}, 
                {link:"MasterLink4", ids:4, c: true, d: true, u: true, v: true}
    ],
    name: "Master"
  },
  {
    id: 2,
    rights:[ 
                {link:"ReportLink1", ids:5, c: false, d: true, u: true, v: true}, 
                {link:"ReportLink2", ids:6, c: true, d: false, u: true, v: false}, 
                {link:"ReportLink3", ids:7, c: true, d: true, u: true, v: true}, 
                {link:"ReportLink4", ids:8, c: true, d: true, u: false, v: true}
    ],
    name: 'Report'
  },
  {
    id: 3,
    rights:[ 
                {link:"BidLink1", ids:9, c: false, d: false, u: true, v: true}, 
                {link:"BidLink2", ids:10, c: true, d: false, u: true, v: true}, 
                {link:"BidLink3", ids:11, c: true, d: false, u: false, v: false}, 
                {link:"BidLink4", ids:12, c: true, d: false, u: true, v: false}
    ],
    name: 'Bid'
  },
  {
    id: 4,
    rights:[
                {link:"TransactionsLink1", ids:13, c: true, d: true, u: true, v: true}, 
                {link:"TransactionsLink2", ids:14, c: true, d: true, u: true, v: true}, 
                {link:"TransactionsLink3", ids:15, c: true, d: true, u: true, v: true}, 
                {link:"TransactionsLink4", ids:16, c: true, d: true, u: true, v: true}
    ],
    name: 'Transactions'
  }
]

const ExpandableTable = ({ data }) => {
  const Id = data.id
  
  return (
    <div className=''>
                
                <Table borderless striped responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th>Links</th>
                      <th>Create</th>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    data.rights.map((val) => {
                      
                      return (
                        <tr>
                          <td>{val.link}</td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 1}`} label='' checked = {val.c} />
                          </td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 2}`} label='' checked = {val.d} />
                          </td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 3}`} label='' checked = {val.u} />
                          </td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 4}`} label='' checked = {val.v} />
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </div>
  )
}

const DataTableWithButtons = (props) => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const Previous = () => {
    return (
      
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Prev' /> */}
        </span>
      
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Next' /> */}
        </span>
      
    )
  }

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 5 : props.data.length / 5 || 1}
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
    <Card>
      <div>
        <Label className='ml-0'>{props.Role}</Label>
      </div>
      <DataTable
        noHeader
        pagination
        paginationPerPage={5}
        data={data}
        expandableRows
        columns={Columns}
        expandOnRowClicked
        className='react-dataTable'
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        expandableRowsComponent={<ExpandableTable />}
        
        paginationComponent='nothing'
      />
    </Card>
  )
}

export default DataTableWithButtons
