import { Fragment } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Media,
  Card, CardBody
} from 'reactstrap'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
// import CardBody from 'reactstrap/lib/CardBody'


const Content = props => {
  // ** Props
  const {
    store,
    dispatch
  } = props
    const renderNotificationItems = () => {
        return (
        //   <PerfectScrollbar
        //   component='li'
        //   className='media-list scrollable-container'
        //   options={{
        //     wheelPropagation: false
        //   }}
        // >
          <>
        {console.log("the eveni its", store)}
          { store.events.length ? store.events.map((item, index) => {
              return (
                <div className='media-list'>
                      <Media className={`${item.isRead ? `table-active` : ''}`}>
                        <Media left href='#'>
                         <Avatar icon={item.avatarIcon} color={item.color} />
                        </Media>
                        <Media body>
                          {item.title}
                          <small className='notification-text'>{item.subtitle}</small>
                        </Media>
                      </Media>

                    {/* </CardBody>
                  </Card> */}
              
                </div>
              )
            }) :   <div className='media-list'>No Notification here</div>}
            {/* </PerfectScrollbar> */}
         
           </>
        )
      }
    return (
        <>
        {renderNotificationItems()}
         </>
      )
}
export default Content
