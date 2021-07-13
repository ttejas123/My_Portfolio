import '@styles/react/libs/noui-slider/noui-slider.scss'
import {  CustomInput } from 'reactstrap'

const Filters = props => {
    // ** Array of brands
    const {
      updateFilter,
      store,
      dispatch
    } = props
  const brands = [
    
    {
      title: 'All',
      total: 746
    },
    {
      title: 'Bid',
      total: 633,
      checked: true
    },
    {
      title: 'Payment',
      total: 591
    },
    {
      title: 'Profile',
      total: 530
    },
    {
      title: 'Order',
      total: 422,
      checked: true
    }
  ]
    return (
       
        // <div className='sidebar-detached sidebar-left'>
        // <div className='sidebar'>

        // <div className='brands'>
        //         <h6 className='filter-title'>Brands</h6>
        //         <ul className='list-unstyled brand-list'>
        //           {brands.map(brand => {
        //             return (
        //               <li key={brand.title}>
        //                 <CustomInput
        //                   type='checkbox'
        //                   id={brand.title}
        //                   label={brand.title}
        //                   defaultChecked={brand.checked}
        //                 />
        //                 <span>{brand.total}</span>
        //               </li>
        //             )
        //           })}
        //         </ul>
        //       </div>
     
        // </div>
        // </div>

        <>
        <h4 className="mt-2 mb-2"><b>Filters</b></h4>
        <div className='brands ml-2' >
            
            <ul className='list-unstyled brand-list' style={{height: "250px", overflowY : "auto"}}>
              {brands.map(brand => {
                return (
                  <li key={brand.title} className='mb-1'>
                    <CustomInput
                      type='checkbox'
                      id={brand.title}
                      key={brand.title}
                      label={brand.title}
                      // defaultChecked={brand.checked}
                      checked={store.selectedNotification.includes(brand.title)}
                      // onChange={e => updateFilter(e.target.checked)}
                      onChange={e => dispatch(updateFilter(brand.title))}

                      
                    />
                    <span>{brand.total}</span>
                    
                  </li>
                )
              })}
            </ul>
          </div>
</>
     
     )
}
export default Filters
