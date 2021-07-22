import { ChevronDown,  X, Check } from 'react-feather'
import { Badge} from 'reactstrap'

//expot data
export const data = [
    {
     id : "#331",
     bidId : "MK11942",
     seller : "Badger",
     date : "01-09-2021",
     SKU :"FRAMEBORDER_1",
     delivery_date: "11 Days",
     quantity : 250,
     accepted : true,
     reason : 'Quoted Price is very high',
     comment :"Out of stock product"
    },
    {
        id : "#332",
        bidId : "MK11944",
        seller : "SlowLoris",
        date : "01-09-2021",
        SKU :"IPhoneK12K01",
        delivery_date: "2 Days",
        quantity : 450,
        accepted : false,
        status : "Dispatched",
        reason : 'Quoted Price is very high',
        comment :"Lead time is less"
       },
       {
        id : "#333",
        bidId : "MK11947",
        seller : "RedPaanda",
        date : "01-09-2021",
        SKU :"BOAT_HEADPHONE",
        delivery_date: "15 Days",
        quantity : 500,
        accepted : true,
        status : "Dispatched",
        reason : 'Quoted Price is very high',
        comment :"Logistic not availble"
       },
       {
        id : "#334",
        bidId : "MK11947",
        seller : "Pumpkin",
        date : "01-09-2021",
        SKU :"PLANT_RED_6",
        delivery_date: "12 Days",
        quantity : 30,
        accepted : true,
        reason : 'Quoted Price is very high',
        comment :"Logistic not availble"
       },
       {
        id : "#335",
        bidId : "MK11947",
        seller : "Capybara",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "11 Days",
        quantity : 700,
        accepted : false,
        status : "Dispatched",
        reason : 'Quoted Price is very high'
       },
       {
        id : "#336",
        bidId : "BM160210",
        seller : "Platypus",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "16 Days",
        quantity : 20,
        accepted : true,
        reason : 'Quoted Price is very high',
        comment :"Lead time is less"
       },
       {
        id : "#337",
        bidId : "BM160210",
        seller : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "21 Days",
        quantity : 80,
        accepted : true,
        reason : 'Quoted Price is very high',
        comment :"Lead time is less"
       },
       {
        id : "#339",
        bidId : "BM160210",
        seller : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "24 Days",
        quantity : 50,
        accepted : false,
        reason : 'Quoted Price is very high',
        comment :"Lead time is less"
       },
       {
        id : "#339",
        bidId : "BM160210",
        seller : "RedPaanda",
        date : "01-09-2021",
        SKU :"TSHIRBLACK01",
        delivery_date: "19 Days",
        quantity : 300,
        accepted : true,
        reason : 'Quoted Price is very high',
        comment :"Lead time is less"

       },
       {
        id : "#14511",
        bidId : "BM160210",
        seller : "BlackSnake",
        date : "04-09-2021",
        SKU :"PAINREAD02",
        delivery_date: "15 Days",
        quantity : 400,
        accepted : true,
        status : "Dispatched",
        reason : 'Quoted Price is very high'
       }
  
]

export const columns = [
    {
      name: 'Bid Id',
      selector: 'bidId',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Seller',
      selector: 'seller',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Live Date',
      selector: 'liveDate',
      sortable: true
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
      name: 'Customization Needed',
      selector: 'approved',
      sortable: false,
      // minWidth: '250px',
      cell: row => (
              <div className='d-flex justify-content-left align-items-center '>
                {row.accepted ? <Check/> : <X/>}
              </div>
            )
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