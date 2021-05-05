// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Check, AlertTriangle } from 'react-feather'
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
      avatarContent: 'TT',
      color: 'light-success',
      subtitle: 'Won the monthly best seller badge.',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Congratulation Ravi</span>winner!
        </Media>
      )
    },
    {
      //img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      avatarContent: 'SN',
      color: 'light-success',
      subtitle: 'You have 10 unread messages.',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>New message</span>&nbsp;received
        </Media>
      )
    },
    {
      avatarContent: 'MD',
      color: 'light-danger',
      subtitle: 'MD Inc. order updated',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>New Orders</span>&nbsp;checkout
        </Media>
      )
    },
    {
      avatarIcon: <X size={14} />,
      color: 'light-danger',
      subtitle: 'USA Server is down due to hight CPU usage',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Server down</span>&nbsp;registered
        </Media>
      )
    },
    {
      avatarIcon: <Check size={14} />,
      color: 'light-success',
      subtitle: 'Last month sales report generated',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Sales report</span>&nbsp;generated
        </Media>
      )
    },
    {
      avatarIcon: <AlertTriangle size={14} />,
      color: 'light-warning',
      subtitle: 'You Missed This awasome Offer',
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
        <Bell size={21} />
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
        {/* <li className='dropdown-menu-footer'>
                  <Button.Ripple color='primary' block>
                    Read all notifications
                  </Button.Ripple>
            </li> */}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
