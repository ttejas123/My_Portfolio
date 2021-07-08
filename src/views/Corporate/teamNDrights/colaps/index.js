import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CardText,
  CustomInput
} from 'reactstrap'
import AppCollapse from '@components/app-collapse'
import Roles from './roleR.js'
const data = [
  {
    title: 'Admin',
    content: (
      <CardText className='mb-0'>
        <Roles name="Admin Rights" data='5' />
      </CardText>
    )
  },
  {
    title: 'Accountant',
    content: (
      <CardText className='mb-0'>
        <Roles name="Accountant's Rights" data='3' />
      </CardText>
    )
  },
  {
    title: 'Assistant1',
    content: (
      <CardText className='mb-0'>
        <Roles name="Accountant's Rights" data='10' />
      </CardText>
    )
  },
  {
    title: 'Assistant2',
    content: (
      <CardText className='mb-0'>
        <Roles name="Accountant's Rights" data='2' />
      </CardText>
    )
  },
  {
    title: 'Assistant3',
    content: (
      <CardText className='mb-0'>
        <Roles name="Accountant's Rights" data='1' />
      </CardText>
    )
  }
]

const AccordionShadow = () => {
    return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Corporate Role and Rights</CardTitle>
      </CardHeader>

      <CardBody>
        <AppCollapse data={data} type='shadow' accordion />
      </CardBody>
    </Card>
  )
}

export default AccordionShadow