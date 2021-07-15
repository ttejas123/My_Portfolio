// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Package, Check, DollarSign, AlertTriangle } from 'react-feather'
import {
  Button,
  Badge,
  Media,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const NotificationDropdown = () => {
  // ** Notification Array
  const notificationsArray = [
    {
      //img: require('@src/assets/images/portrait/small/avatar-s-15.jpg').default,
      avatarIcon: <Package size={14} />,
      color: 'light-success',
      subtitle: '5 Bid Registration',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Bids Registration</span>
        </Media>
      )
    },
    {
      //img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      avatarContent: <DollarSign size={14} />,
      color: 'light-success',
      subtitle: '10 Emails Of Transaction Completed',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>3 Transaction</span>&nbsp;received
        </Media>
      )
    },
    {
      avatarContent: <Package size={14} />,
      color: 'light-danger',
      subtitle: '2 New Orders Are Placed',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>New Orders</span>&nbsp;checkout
        </Media>
      )
    },
    {
      avatarIcon: <Check size={14} />,
      color: 'light-success',
      subtitle: '3 Sales report are generated',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Sales report</span>&nbsp;generated
        </Media>
      )
    },
    {
      avatarIcon: <AlertTriangle size={14} />,
      color: 'light-warning',
      subtitle: '3 Offers Are Misted',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Offer Missed</span>&nbsp;usage
        </Media>
      )
    }
  ]

  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <Media left>
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 32, imgWidth: 32 }
                          : item.avatarContent
                          ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                          : item.avatarIcon
                          ? {
                              icon: item.avatarIcon,
                              color: item.color
                            }
                          : null)}
                      />
                    </Media>
                    <Media body>
                      {item.title}
                      <small className='notification-text'>{item.subtitle}</small>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </a>
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
        <Bell size={18} />
        <Badge pill color='danger' className='badge-up'>
          5
        </Badge> 
      </DropdownToggle>
      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>
            <Badge tag='div' color='light-primary' pill>
              6 New
            </Badge>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
            <li className='dropdown-menu-footer'>
                  <Button.Ripple color='primary' block>
                    Read all notifications
                  </Button.Ripple>
            </li> 
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
