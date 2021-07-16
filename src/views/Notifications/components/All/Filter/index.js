import '@styles/react/libs/noui-slider/noui-slider.scss'
import {  CustomInput } from 'reactstrap'

const Filters = props => {
    // ** Array of brands
    const {
      updateFilter,
      updateAllFilters,
      store,
      dispatch
    } = props
  const brands = [
    
    {
      title: 'All',
      total: 800
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
        <div className='d-flex'>
        <h4 className="mt-1 "><b>Filters</b></h4>
        <div className='d-flexbrands ml-3 mt-1' >
            
            <ul className='d-flex list-unstyled brand-list'>
              {brands.map(brand => {
                return (
                  <li key={brand.title} className='ml-4'>
                    {brand.title !== 'All' ? (<CustomInput
                            type='checkbox'
                            id={brand.title}
                            key={brand.title}
                            label={brand.title}
                            // defaultChecked={brand.checked}
                            checked={store.selectedNotification.includes(brand.title)}
                            // onChange={e => updateFilter(e.target.checked)}
                            onChange={e => dispatch(updateFilter(brand.title))}
                          />) : (<CustomInput
                              type='checkbox'
                              id={brand.title}
                              key={brand.title}
                              label={brand.title}
                              checked={store.selectedNotification.length === brands.length - 1}
                              onChange={e => dispatch(updateAllFilters(e.target.checked))}
                            />)
                    }
                    
                    <span>{brand.total}</span>
                    
                  </li>
                )
              })}

            </ul>
          </div>
        </div>
     
     )
}
export default Filters
