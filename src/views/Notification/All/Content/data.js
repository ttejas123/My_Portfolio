
import { Fragment } from 'react'

import { Bell, X, Check, AlertTriangle } from 'react-feather'
import {
       Media
  } from 'reactstrap'
export const notificationsArray = [
    {
        avatarIcon: <X size={14} />,
        type :'bid',
        color: 'light-danger',
        subtitle: '03 March 21 5:00 PM',
        title: (
          <Media tag='p' heading>
            <span className='font-weight-bolder'>Request for 'Tshirt' is created</span>
          </Media>
        
        )
      },
      {
        avatarIcon: <Check size={14} />,
        color: 'light-success',
        type :'payment',
        subtitle: '03 March 21 5:00 PM',
        title: (
          <Media tag='p' heading>
            <span className='font-weight-bolder'>Payment of 50K received</span>
          </Media>
        )
      },
      {
        avatarIcon: <Check size={14} />,
        color: 'light-success',
        type :'profile',
        subtitle: '03 March 21 5:00 PM',
        title: (
          <Media tag='p' heading>
            <span className='font-weight-bolder'>Bid 123 : </span>
          </Media>
        )
      }
  ]