// ** Third Party Components
import PropTypes from 'prop-types'

import { Card, CardBody, ListGroupItem, Media } from 'reactstrap'

const StatsHorizontal = ({ icon, color, stats, statTitle, className, ...rest }) => {
  return (
    <div className=' m-0 p-0 mask flex-center rgba-blue-light'>
          <CardBody  className='p-0 draggable'>
            <Media >
              <div className='p-0 mr-1'>
                  <div className={`avatar avatar-stats p-25 m-0 ${color ? `bg-light-${color}` : 'bg-light-primary'}`}>
                    <div className='avatar-content'>{icon}</div>
                  </div>
              </div>
              <div>
                         <p className='font-weight-bolder mb-0 mt-1'>{stats}</p>           
              </div>
            </Media>
          </CardBody>
    </div>
  )
}

export default StatsHorizontal

// ** PropTypes
StatsHorizontal.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
  className: PropTypes.string
}
