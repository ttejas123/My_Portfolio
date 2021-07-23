//Redressal
// id
// name
// From
//slug:"",// 
//rating
// Issue_Type
// qty
// offers
// Status
// shippingDate
// Action(Response)

import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'

import useC from '@src/assets/images/logo/useC.jpg'

//expot data
export const products = [
      {
        image: useC,
        name:"Tejas Thakare",
       brand:"Pravin",
       price:2000,
        slug:"Plese don't false rate",
        rating:2,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        qty:16521,
        offers:"This is msg from offers box",
        shippingDate : "04 / 10 /2021",
       
        id: 1
      },
      {
        image: pravin,
        name:"Pravin",
    brand:"Tejas",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        qty:19321,
        offers:"This is msg from offers box",  //Single multiple
        shippingDate : 7 / 10 / 2021,
        
        id: 2
      },
      {
        image: komal,
        name:"Komal Kamble",
    brand:"Mehul",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        qty:19841,
        offers:"This is msg from offers box",
        shippingDate : 4 / 10 / 2021,
        
        id: 3
      },
      {
        image: komal,
        name:"Mehul",
    brand:"Komal",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        qty:13431,
        offers:"This is msg from offers box",
        shippingDate : 1 / 10 / 2021,
       
        id: 4
      },
      {
        image: himanshu,
        name:"Harpriya",
    brand:"Mehul",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        qty:12421,
        offers:"This is msg from offers box",  //Single multiple
        shippingDate : 1 / 10 / 2021,
       
        id: 5
      }
]

export const data1 = [
    {

          id:1,
          charg: "200K",
          Task : "Boxes",
          DateAdded : "12-11-2020",
          Partner : "Tejas Thakare",
          avatar: "",
          Name: "Tejas",
          username:"tejas"
    
    },
    {
        id:2,
        charg: "200K",
        Task : "Provide Raw Material",
        DateAdded : "05-05-2021",
        Partner : "Pravin Poshmani",
        avatar: pravin,
        Name: "Pravin",
        username:"pravinn2"
    },
    {
        id:3,
        charg: "200K",
        Task : "Transport",
        DateAdded : "12-10-2020",
        Partner : "Himanshu Chanda",
        avatar: komal,
        Name: "Komal",
        username:"komal12"
    },
    {
        id:4,
        charg: "200K",
        Task : "Checking Samples",
        DateAdded : "10-11-2020",
        Partner : "Daksh",
        avatar: "",
        Name: "Mehul",
        username:"mehulq1"
    },
    {
        id:5,
        charg: "200K",
        Task : "Taking Logs",
        DateAdded : "12-11-2020",
        Partner : "Umang Shah",
        avatar: "",
        Name: "Harpriya",
        username:"harpriya23"
    }
  ]