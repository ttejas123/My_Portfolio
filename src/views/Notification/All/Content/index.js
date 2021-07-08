import { notificationsArray } from './data'
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


const Content = () => {
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
          
            {notificationsArray.map((item, index) => {
              return (
                // <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
                //   <Media
                //     className={classnames('d-flex', {
                //       'align-items-start': !item.switch,
                //       'align-items-center': item.switch
                //     })}
                //   >
                //      <Fragment>
                //         <Media left>
                //           <Avatar icon =  {item.avatarIcon} color = {item.color}/>
                //         </Media>
                //         <Media body>
                //           {item.title}
                //           <small className='notification-text'>{item.subtitle}</small>
                //         </Media>
                //       </Fragment>
                //   </Media>
                // </a>

                <div className='media-list'>
                  {/* className='table-active' */}
                  {/* <Card>
                    <CardBody> */}
                      {/* <Media className='table-active'> */}
                      <Media className={`${item.isRead ? `table-active` : ''}`}>

                        <Media left href='#'>
                          {/* <Media object src={item.avatarIcon} height='64' width='64' alt='Generic placeholder image' /> */}
                          <Avatar icon={item.avatarIcon} color={item.color} />
                        </Media>
                        <Media body>
                          {/* <Media heading>{item.title}</Media> */}
                          {item.title}
                          <small className='notification-text'>{item.subtitle}</small>
                        </Media>
                      </Media>

                    {/* </CardBody>
                  </Card> */}
              
                </div>
              )
            })}
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
