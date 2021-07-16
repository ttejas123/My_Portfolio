import { ChevronDown,  X, Check } from 'react-feather'
import { Badge} from 'reactstrap'

//expot data
export const data = [
    {
     id : "#331",
     bidId : "MK11942",
     buyer : "Badger",
     date : "01-09-2021",
     SKU :"FRAMEBORDER_1",
     delivery_date: "11 Days",
     quantity : 250,
     accepted : true,
     comment :"Out of stock product"
    },
    {
        id : "#332",
        bidId : "MK11944",
        buyer : "SlowLoris",
        date : "01-09-2021",
        SKU :"IPhoneK12K01",
        delivery_date: "2 Days",
        quantity : 450,
        accepted : false,
        status : "Dispatched",
        comment :"Lead time is less"
       },
       {
        id : "#333",
        bidId : "MK11947",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"BOAT_HEADPHONE",
        delivery_date: "15 Days",
        quantity : 500,
        accepted : true,
        status : "Dispatched",
        comment :"Logistic not availble"
       },
       {
        id : "#334",
        bidId : "MK11947",
        buyer : "Pumpkin",
        date : "01-09-2021",
        SKU :"PLANT_RED_6",
        delivery_date: "12 Days",
        quantity : 30,
        accepted : true,
        comment :"Logistic not availble"
       },
       {
        id : "#335",
        bidId : "MK11947",
        buyer : "Capybara",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "11 Days",
        quantity : 700,
        accepted : false,
        status : "Dispatched"

       },
       {
        id : "#336",
        bidId : "BM160210",
        buyer : "Platypus",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "16 Days",
        quantity : 20,
        accepted : true,
        comment :"Lead time is less"
       },
       {
        id : "#337",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "21 Days",
        quantity : 80,
        accepted : true,
        comment :"Lead time is less"
       },
       {
        id : "#339",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "24 Days",
        quantity : 50,
        accepted : false,
        comment :"Lead time is less"
       },
       {
        id : "#339",
        bidId : "BM160210",
        buyer : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "19 Days",
        quantity : 300,
        accepted : true,
        comment :"Lead time is less"

       },
       {
        id : "#14511",
        bidId : "BM160210",
        buyer : "BlackSnake",
        date : "04-09-2021",
        SKU :"PAINREAD02",
        delivery_date: "15 Days",
        quantity : 400,
        accepted : true,
        status : "Dispatched"


       }
  
]

export const columns = [
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
      {
        name: 'Date',
        selector: 'date',
        sortable: true
      },
    {
      name: 'Customization Needed',
      selector: 'approved',
      sortable: false,
      // minWidth: '250px',
      cell: row => (
              <div className='d-flex justify-content-left align-items-center '>
                {row.accepted ? <Check/> : <X/>}
              </div>
            )
    },
        
        {
          name: 'Comment',
          minWidth: '138px',
          selector: 'comment'
        }
        //,
       
        // {
        //   name: 'Comment',
        //   selector: 'comment',
        //   sortable: true,
        //   minWidth: '150px'
        // },
       
   
    // {
    //   name: 'Actions',
    //   allowOverflow: true,
    //   cell: row => {
    //     return (
    //       <div className='d-flex'>
    //         <UncontrolledDropdown>
    //           <DropdownToggle className='pr-1' tag='span'>
    //             <Trash size={15} onClick={e => {
    //                                                                             e.preventDefault()
    //                                                                             deleteCountry(row.id)
    //                                                                           } }/>
    //           </DropdownToggle>
    //         </UncontrolledDropdown>
    //         <Link  to={`/edit-product/${row.id}`}><Edit  
    //           size={15} 
    //           onClick={ () => { 
    //                             setCurrentId(row.id)
    //                             setModal(true)
    //                              } }>
    //                                <Link to='/edit-product'/>
    //                              </Edit></Link>
    //       </div>
    //     )
    //   }
    // }
  ]