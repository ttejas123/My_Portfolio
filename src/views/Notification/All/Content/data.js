
import { Fragment } from 'react'

import { Bell, X, Check, AlertTriangle, Package, User, DollarSign, Gift} from 'react-feather'
import {
       Media
  } from 'reactstrap'
export const notificationsArray = [
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
        type :'payment',
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
        type :'profile',
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
        type :'bid',
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
        type :'payment',
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
        type :'profile',
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
        type :'offer',
        isRead : false,

        subtitle: '03 March 21 5:00 PM',
        title: (
          <Media tag='p' heading>
            <span className='font-weight-bolder'>Unlock some feature, Unlock some feature, Unlock some feature</span>
          </Media>
        )
      }
  ]