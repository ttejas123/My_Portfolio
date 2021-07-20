// ** React Imports
import { useState } from 'react'

// ** Table columns & Expandable Data
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Lock } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CustomInput, Table, Label } from 'reactstrap'
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
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 1}`} label='' />
                          </td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 2}`} label='' />
                          </td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 3}`} label='' />
                          </td>
                          <td>
                            <CustomInput type='checkbox' id={`${val.link}-${val.id + 4}`} label='' />
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
        data={props.data}
        expandableRows
        columns={props.columns}
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
