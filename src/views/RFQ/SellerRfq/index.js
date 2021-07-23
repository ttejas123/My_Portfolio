  // ** React Imports
  import { Fragment, useEffect, useRef, useState, forwardRef  } from 'react'
  
  // ** Styles
  import '@styles/base/pages/app-ecommerce.scss'
  // ** Steps
  import Cards from './card'  
  const optionStatus = [
      {value: "", label: "Filter Status"},
      {value: "created", label: "created"},
      {value: "live", label: "live"},
      {value: "extended", label: "extended"},
      {value: "closed", label: "closed"},
      {value: "rejected", label: "rejected"}
    ]
  
  import { products } from './data.js'
  const Checkout = () => {
    // ** Ref & State
    const ref = useRef(null)
    const [stepper, setStepper] = useState(null)
  
    // ** Store Vars
    // const dispatch = useDispatch()
    // const store = useSelector(state => state.ecommerce)
  
    // // ** Get Cart Items on mount
    // useEffect(() => {
    //   dispatch(getCartItems())
    // }, [])
  
    return (
        <div  >        
          <div  className=''>  
            <Cards
                  stepper={stepper}
                  products={products}
                />
          </div> 
        </div>  
    )
  }
  export default Checkout
  