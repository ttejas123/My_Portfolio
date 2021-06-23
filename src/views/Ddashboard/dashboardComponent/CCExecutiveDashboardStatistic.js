import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, Layers, FileText} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const CCExecutiveDashboardStatistic = ({ cols }) => {
  const data = [
    {
      title: '65k',
      subtitle: 'Corporate',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: '765',
      subtitle: 'KYCs',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: '40',
      subtitle: 'Ticket',
      color: 'light-danger',
      icon: <FileText size={24} />
    },
    {
      title: '70',
      subtitle: 'Customization',
      color: 'light-success',
      icon: <Layers size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Card className='card-statistics'>
          <CardBody>
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
          </CardBody>
          </Card>
         
        </Col>
      )
    })
  }

  return (
  
    <Row>{renderData()}</Row>

  )
}

export default CCExecutiveDashboardStatistic
