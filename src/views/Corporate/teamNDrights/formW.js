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
  CustomInput
} from 'reactstrap'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'
import { selectThemeColors } from '@utils'

const VerticalForm = () => {
  const Roles = [
    { value: 'Maneger', label: 'Maneger' },
    { value: 'Co-Leader', label: 'Co-Leader' },
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Admin', label: 'Admin' }
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Corporate Add Team</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col sm='6'>
              <FormGroup>
                <Label for='EmailVertical'>Name</Label>
                <Input type='email' name='Email' id='EmailVertical' placeholder='Email' />
              </FormGroup>
            </Col>
            <Col sm='6'>
              <FormGroup>
                <Label for='EmailVertical'>Email</Label>
                <Input type='email' name='Email' id='EmailVertical' placeholder='Email' />
              </FormGroup>
            </Col>
      
            <Col sm='6'>
              <FormGroup >
                <Label className='form-label' for={`language`}>
                  Roles
                </Label>
                <Select
                  isMulti
                  isClearable={false}
                  theme={selectThemeColors}
                  id={`language`}
                  options={Roles}
                  className='react-select'
                  classNamePrefix='select'
                />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default VerticalForm
