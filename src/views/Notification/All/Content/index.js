import { notificationsArray } from './data'
import { Fragment } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Media
} from 'reactstrap'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'

const Content = () => {
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
                          <Avatar icon =  {item.avatarIcon} color = {item.color}/>
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
    return (
        <>
        {renderNotificationItems()}
         </>
      )
}
export default Content
