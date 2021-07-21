// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Table Columns

import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import { columns } from './columns'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Badge } from 'reactstrap'
//import InputBasic from './AddBadges'
// import HorizontalForm from './AddCurrency'
// import EditForm from './EditCurrency'

const data1 =  [
    {
      id: 4987,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Nike",
      releaseDate: '5 days',
      client: {
        address: '7777 Mendez Plains',
        company: 'Hall-Robbins PLC',
        companyEmail: 'don85@johnson.com',
        country: 'USA',
        contact: '(616) 865-4180',
        name: 'Jordan Stevenson'
      },
      service: 'Software Development',
      total: 3428,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$724',
      dueDate: '23 Apr 2019'
    },
    {
      id: 4988,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '17 Jul 2019',
      client: {
        address: '04033 Wesley Wall Apt. 961',
        company: 'Mccann LLC and Sons',
        companyEmail: 'brenda49@taylor.info',
        country: 'Haiti',
        contact: '(226) 204-8287',
        name: 'Stephanie Burns'
      },
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: '15 Dec 2019'
    },
    {
      id: 4989,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '19 Oct 2019',
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'Tony Herrera'
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '03 Nov 2019'
    },
    {
      id: 4990,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '06 Mar 2020',
      client: {
        address: '19022 Clark Parks Suite 149',
        company: 'Smith, Miller and Henry LLC',
        companyEmail: 'mejiageorge@lee-perez.com',
        country: 'Cambodia',
        contact: '(832) 323-6914',
        name: 'Kevin Patton'
      },
      service: 'Software Development',
      total: 4749,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '11 Feb 2020'
    },
    {
      id: 4991,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '08 Feb 2020',
      client: {
        address: '8534 Saunders Hill Apt. 583',
        company: 'Garcia-Cameron and Sons',
        companyEmail: 'brandon07@pierce.com',
        country: 'Martinique',
        contact: '(970) 982-3353',
        name: 'Mrs. Julie Donovan MD'
      },
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: '30 Jun 2019'
    },
    {
      id: 4992,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '26 Aug 2019',
      client: {
        address: '661 Perez Run Apt. 778',
        company: 'Burnett-Young PLC',
        companyEmail: 'guerrerobrandy@beasley-harper.com',
        country: 'Botswana',
        contact: '(511) 938-9617',
        name: 'Amanda Phillips'
      },
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '24 Jun 2019'
    }
]

const data2 =  [
    {
      id: 4987,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Nike",
      releaseDate: '5 days',
      client: {
        address: '7777 Mendez Plains',
        company: 'Hall-Robbins PLC',
        companyEmail: 'don85@johnson.com',
        country: 'USA',
        contact: '(616) 865-4180',
        name: 'Jordan Stevenson'
      },
      service: 'Software Development',
      total: 3428,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$724',
      dueDate: '23 Apr 2019'
    },
    {
      id: 4988,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '17 Jul 2019',
      client: {
        address: '04033 Wesley Wall Apt. 961',
        company: 'Mccann LLC and Sons',
        companyEmail: 'brenda49@taylor.info',
        country: 'Haiti',
        contact: '(226) 204-8287',
        name: 'Stephanie Burns'
      },
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: '15 Dec 2019'
    },
    {
      id: 4989,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '19 Oct 2019',
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'Tony Herrera'
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '03 Nov 2019'
    },
    {
      id: 4990,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '06 Mar 2020',
      client: {
        address: '19022 Clark Parks Suite 149',
        company: 'Smith, Miller and Henry LLC',
        companyEmail: 'mejiageorge@lee-perez.com',
        country: 'Cambodia',
        contact: '(832) 323-6914',
        name: 'Kevin Patton'
      },
      service: 'Software Development',
      total: 4749,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '11 Feb 2020'
    },
    {
      id: 4991,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '08 Feb 2020',
      client: {
        address: '8534 Saunders Hill Apt. 583',
        company: 'Garcia-Cameron and Sons',
        companyEmail: 'brandon07@pierce.com',
        country: 'Martinique',
        contact: '(970) 982-3353',
        name: 'Mrs. Julie Donovan MD'
      },
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: '30 Jun 2019'
    },
    {
      id: 4992,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '26 Aug 2019',
      client: {
        address: '661 Perez Run Apt. 778',
        company: 'Burnett-Young PLC',
        companyEmail: 'guerrerobrandy@beasley-harper.com',
        country: 'Botswana',
        contact: '(511) 938-9617',
        name: 'Amanda Phillips'
      },
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '24 Jun 2019'
    }
]

const data3 =  [
    {
      id: 4987,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Nike",
      releaseDate: '5 days',
      client: {
        address: '7777 Mendez Plains',
        company: 'Hall-Robbins PLC',
        companyEmail: 'don85@johnson.com',
        country: 'USA',
        contact: '(616) 865-4180',
        name: 'Jordan Stevenson'
      },
      service: 'Software Development',
      total: 3428,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$724',
      dueDate: '23 Apr 2019'
    },
    {
      id: 4988,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '17 Jul 2019',
      client: {
        address: '04033 Wesley Wall Apt. 961',
        company: 'Mccann LLC and Sons',
        companyEmail: 'brenda49@taylor.info',
        country: 'Haiti',
        contact: '(226) 204-8287',
        name: 'Stephanie Burns'
      },
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: '15 Dec 2019'
    },
    {
      id: 4989,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '19 Oct 2019',
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'Tony Herrera'
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '03 Nov 2019'
    },
    {
      id: 4990,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '06 Mar 2020',
      client: {
        address: '19022 Clark Parks Suite 149',
        company: 'Smith, Miller and Henry LLC',
        companyEmail: 'mejiageorge@lee-perez.com',
        country: 'Cambodia',
        contact: '(832) 323-6914',
        name: 'Kevin Patton'
      },
      service: 'Software Development',
      total: 4749,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '11 Feb 2020'
    },
    {
      id: 4991,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '08 Feb 2020',
      client: {
        address: '8534 Saunders Hill Apt. 583',
        company: 'Garcia-Cameron and Sons',
        companyEmail: 'brandon07@pierce.com',
        country: 'Martinique',
        contact: '(970) 982-3353',
        name: 'Mrs. Julie Donovan MD'
      },
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: '30 Jun 2019'
    },
    {
      id: 4992,
      SKU_ID: "#sku5643",
      Lead_time: '5 days',
      Rate: '5000',
      MOQ: '200pcs',
      BUIN:'#bidoya5462',
      custom:true,
      inspection:true,
      sampling: true,
      brand: "Naruto",
      releaseDate: '26 Aug 2019',
      client: {
        address: '661 Perez Run Apt. 778',
        company: 'Burnett-Young PLC',
        companyEmail: 'guerrerobrandy@beasley-harper.com',
        country: 'Botswana',
        contact: '(511) 938-9617',
        name: 'Amanda Phillips'
      },
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar1: require('@src/assets/images/logo/ss2.jpg').default,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '24 Jun 2019'
    }
]
const BankGuaranteeApplPendingList = (props) => {

    //console.log(BankGuarranteApplsColumns)
    console.log(data1)
  // ** State
//   const data = [
//     {
//       name: "US Dollar",
//       symbol: "$"
//     },
//     {
//       name: "Canadian Dollar",
//       symbol: "$"
//     },
//     {
//       name: "Euro",
//       symbol: "€"
//     }
// ]
// console.log(data)

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})
  
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const handleEditClick = (item) => {
      if (!addClicked) { 
        setEditClicked(!editClicked)
        setEditData(item)
      }
    //console.log(item)
  }

  const handleAddClick = () => {
      if (!editClicked) {
        setAddClicked(!addClicked)
      }
  }

  const handleCancelOfEdit = () => {
    console.log("in Cancel")
    setEditClicked(!editClicked)
}
const handleCancelOfAdd = () => {
    console.log("in Cancel")
    setAddClicked(!addClicked)
}
const handleSubmitOfAdd = (data) => {
    console.log("in submit", data)
    setAddClicked(!addClicked)
}

const handleSubmitOfEdit = (data) => {
    console.log("in submit of edit", data)
    setEditClicked(!editClicked)
}

const handleDelete = (data) => {
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) {
        console.log(" your record is deleted")
      } else {
      console.log("not deleted ")
      }
}

const renderClient = row => {
    const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
  
    if (row.icon.length) {
      return <Avatar className='mr-1' img={row.icon} width='32' height='32'  />
    } else {
      return <Avatar color={color || 'primary'} className='mr-1' content={row.name || 'John Doe'} initials status="online" />
    }
  }

const columns1 = [
    {
      name: 'User',
      selector: 'user',
      sortable: true,
      minWidth: '50px'
    },
    {
      name: 'Financial Institute',
      selector: 'financialInstitute',
      sortable: true,
      minWidth: '50px'
    },
    {
        name: 'Amount',
        selector: 'amount',
        sortable: true,
        minWidth: '50px'
    },
    {
        name: 'Approved By',
        selector: 'approvedBy',
        sortable: true,
        minWidth: '50px'
    },
    {
        name: 'Approved Time',
        selector: 'approvedTime',
        sortable: true,
        minWidth: '50px'
    },
    {
        name: 'Created Time',
        selector: 'createdTime',
        sortable: true,
        minWidth: '50px'
    },
    {
        name: 'Updated Time',
        selector: 'updatedTime',
        sortable: true,
        minWidth: '50px'
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div key = {row.financialInstitute} className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pr-1' tag='span'>
                <Trash size={15} onClick={e => { handleDelete(row) }} />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Link  to={`/edit-bank-guarrante-appl`}><Edit  
                  size={15} 
                  onClick={ () => { 
                                    //setCurrentId(row.id)
                                    //setModal(true)
                                     } }>
                                       <Link to='/edit-bank-guarrante-appl'/>
                                     </Edit></Link>
          </div>
        )
      }
    }
  ]


  // ** Pagination Previous Component
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

  // ** Custom Pagination Component
  const CustomPagination1 = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
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

  const CustomPagination2 = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
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

    const CustomPagination3 = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
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
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>GroupBy Brand <Badge>Nike</Badge></CardTitle>
        <Link  to={`/edit-bank-guarrante-appl`}>
            <Button className='ml-2' color='primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add</span>
            </Button>
            </Link>
      </CardHeader>
      
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={columns}
        className='react-dataTable'
        paginationPerPage={4}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination1}
        data={data1}
      />
      
    </Card>
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>GroupBy Brand <Badge>Guccie</Badge></CardTitle>
        <Link  to={`/edit-bank-guarrante-appl`}>
            <Button className='ml-2' color='primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add</span>
            </Button>
            </Link>
      </CardHeader>
      
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={columns}
        className='react-dataTable'
        paginationPerPage={4}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination2}
        data={data2}
      />
      
    </Card>
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>GroupBy Brand <Badge>Armani</Badge></CardTitle>
        <Link  to={`/edit-bank-guarrante-appl`}>
            <Button className='ml-2' color='primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add</span>
            </Button>
            </Link>
      </CardHeader>
      
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={columns}
        className='react-dataTable'
        paginationPerPage={4}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination3}
        data={data3}
      />
      
    </Card>
    </Fragment>
  )
}

export default BankGuaranteeApplPendingList
