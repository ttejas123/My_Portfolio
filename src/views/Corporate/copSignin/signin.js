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

const VerticalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Corporate Sigin</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            
            <Col sm='12'>
              <FormGroup>
                <Label for='EmailVertical'>Email</Label>
                <Input type='email' name='Email' id='EmailVertical' placeholder='Email' />
              </FormGroup>
            </Col>
      
            <Col sm='12'>
              <FormGroup>
                <Label for='passwordVertical'>Password</Label>
                <Input type='password' name='password' id='passwordVertical' placeholder='Password' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
                <CustomInput type='checkbox' id='remember-me-vertical' label='Remember Me' defaultChecked={false} />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Sign In
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
