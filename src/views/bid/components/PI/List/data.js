//expot data
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { X, Check, MoreVertical, FileText, Trash2, Archive } from 'react-feather'


export const data = [
    {
     id : "#1451",
     bidId : "BM160210",
     buyer : "Badger",
     date : "01-09-2021",
     SKU :"TSHIRBLACK01",
     delivery_date: "10 Days",
     quantity : 250,
     custimization_require : false
    },
    {
        id : "#1452",
        bidId : "BM160210",
        buyer : "SlowLoris",
        date : "01-09-2021",
        SKU :"IPhoneK12K01",
        delivery_date: "5 Days",
        quantity : 450,
        custimization_require : false

       },
       {
        id : "#1453",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "6 Days",
        quantity : 500,
        custimization_require : true

       },
       {
        id : "#1454",
        bidId : "BM160210",
        buyer : "Pumpkin",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "14 Days",
        quantity : 30,
        custimization_require : false

       },
       {
        id : "#1455",
        bidId : "BM160210",
        buyer : "Capybara",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "3 Days",
        quantity : 700,
        custimization_require : true

       },
       {
        id : "#1456",
        bidId : "BM160210",
        buyer : "Platypus",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "4 Days",
        quantity : 20,
        custimization_require : true
       },
       {
        id : "#1457",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "7 Days",
        quantity : 80,
        custimization_require : true
       },
       {
        id : "#1458",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "2 Days",
        quantity : 50,
        custimization_require : false
       },
       {
        id : "#1459",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "2 Days",
        quantity : 300,
        custimization_require : false
       },
       {
        id : "#14511",
        bidId : "BM160210",
        buyer : "BlackSnake",
        date : "04-09-2021",
        SKU :"PAINREAD02",
        delivery_date: "15 Days",
        quantity : 400,
        custimization_require : true
       }
  
]

// export const columns = [
//     {
//       name: 'Id',
//       selector: 'id',
//       sortable: true,
//       minWidth: '50px'
//     },
//     {
//       name: 'Bid',
//       selector: 'bidId',
//       sortable: true,
//       minWidth: '150px'
//     },
//       {
//         name: 'Product',
//         selector: 'SKU',
//         sortable: true
//       },
//       {
//         name: 'Quantity',
//         selector: 'quantity',
//         sortable: true
//       },
//     {
//         name: 'Delivery till',
//         selector: 'delivery_date',
//         sortable: true
//       },
//       // {
//       //   name: 'Date',
//       //   selector: 'date',
//       //   sortable: true,
//       //   minWidth: '150px'
//       // },
//       {
//         name: 'Customization Needed',
//         selector: 'date',
//         sortable: true,
//         minWidth: '150px'
//       },
//         {
//           name: 'Buyer',
//           selector: 'buyer',
//           sortable: true,
//           minWidth: '150px'
//         },
//         {
//             name: 'Actions',
//             minWidth: '100px',
//             cell: row => (
//               <div className='d-flex'>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className='pr-1' tag='span'>
//                     <Trash size={15} onClick={e => { 
//                       // handleDelete(row)
//                        }} />
//                   </DropdownToggle>
//                 </UncontrolledDropdown>
//                 <Edit size={15} onClick={e => {
//                   // e.preventDefault()
//                   // handleEditClick(row)
//                 }} />
//               </div>
//             )
//           }
   
//     // {
//     //   name: 'Actions',
//     //   allowOverflow: true,
//     //   cell: row => {
//     //     return (
//     //       <div className='d-flex'>
//     //         <UncontrolledDropdown>
//     //           <DropdownToggle className='pr-1' tag='span'>
//     //             <Trash size={15} onClick={e => {
//     //                                                                             e.preventDefault()
//     //                                                                             deleteCountry(row.id)
//     //                                                                           } }/>
//     //           </DropdownToggle>
//     //         </UncontrolledDropdown>
//     //         <Link  to={`/edit-product/${row.id}`}><Edit  
//     //           size={15} 
//     //           onClick={ () => { 
//     //                             setCurrentId(row.id)
//     //                             setModal(true)
//     //                              } }>
//     //                                <Link to='/edit-product'/>
//     //                              </Edit></Link>
//     //       </div>
//     //     )
//     //   }
//     // }
//   ]