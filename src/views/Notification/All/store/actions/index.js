import axios from 'axios'

import { Bell, X, Check, AlertTriangle, Package, User, DollarSign, Gift} from 'react-feather'
import {
       Media
  } from 'reactstrap'
// ** Filter Events
const notificationsArray = [
  {
      avatarIcon: <Package size={14} />,
      type :'bid',
      color: 'light-danger',
      isRead : true,
      subtitle: '03 March 21 5:00 PM',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Request for 'Gifts' is created under ABC category</span>
        </Media>
      
      )
    },
    {
      avatarIcon: <DollarSign size={14} />,
      color: 'light-success',
      type :'Payment',
      isRead : true,

      subtitle: '03 March 21 5:00 PM',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Payment of 50K received</span>
        </Media>
      )
    },
    {
      avatarIcon: <User size={14} />,
      color: 'light-success',
      type :'Profile',
      isRead : true,
      subtitle: '03 March 21 5:00 PM',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Profile Image uploaded.</span>
        </Media>
      )
    },
    {
      avatarIcon: <Package size={14} />,
      type :'Bid',
      color: 'light-danger',
      isRead : true,
      subtitle: '03 March 21 5:00 PM',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Seller X has sent you bid for Bid : 123</span>
        </Media>
      
      )
    },
    {
      avatarIcon: <DollarSign size={14} />,
      color: 'light-success',
      type :'Payment',
      isRead : false,

      subtitle: '03 March 21 5:00 PM',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Invoice generate for order number 12090</span>
        </Media>
      )
    },
    {
      avatarIcon: <User size={14} />,
      color: 'light-success',
      type :'Profile',
      subtitle: '03 March 21 5:00 PM',
      isRead : false,

      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Profile score is 100% now</span>
        </Media>
      )
    },
    {
      avatarIcon: <Gift size={14} />,
      color: 'light-success',
      type :'Offer',
      isRead : false,

      subtitle: '03 March 21 5:00 PM',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Unlock some feature, Unlock some feature, Unlock some feature</span>
        </Media>
      )
    }
]

export const getNotifications = params => {
  console.log("the paramts is", params)
  return dispatch => {
    const filters = notificationsArray.filter(event => params.includes(event.type))
    console.log("the notificationsArray ", filters)
    const data1 = {
      events: filters,
      total: notificationsArray.length
    }
    dispatch({ type: 'FETCH_EVENTS', data:data1, params })

  }
  
}
export const updateFilter = filter => {
  console.log("FIlter is updateing ", filter)
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      filter
    })
    dispatch(getNotifications(getState().notifications.selectedNotification))
  }
}

// ** Add/Remove All Filters
export const updateAllFilters = value => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_ALL_FILTERS',
      value
    })
    dispatch(fetchEvents(getState().calendar.selectedNotification))
  }
}
