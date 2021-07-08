// ** Third Party Components
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button,
    CardBody,
    Card,
    CardTitle,
    CardHeader,
    InputGroupAddon,
    InputGroupText
  } from 'reactstrap'
  import { Twitter, Facebook, Instagram, GitHub, Codepen, Slack } from 'react-feather'
  
  const AsinImportTab = () => {
    return (
        <Card className='mx-1'>
            <CardHeader>
  <CardTitle tag='h1'>Import By ASIN + FSN Number</CardTitle>
</CardHeader>
      <Form onSubmit={e => e.preventDefault()}>
          <CardBody>
        <Row>
         <Col md='6' sm='12'>
                <FormGroup>
                  <Label for='asinNumber'>Asin Number</Label>
                  <Input type='text' id='asinNumber' placeholder='Asin Number'  />
                </FormGroup>
              </Col>
              <Col md='6' sm='12'>
                <FormGroup>
                  <Label for='fsnNumber'>Fsn Number</Label>
                  <Input type='text' id='fsnNumber' placeholder='Fsn Number' />
                </FormGroup>
              </Col>
         {/* <a className='d-flex mx-auto' href='https://www.amazon.in/' target='_blank' rel='noopener noreferrer'>
         https://www.amazon.in/
          </a> */}
         {/* <Col sm='6'>
         <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
              Fetch
            </Button>
           </Col>   */}
          <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
            <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
              Fetch
            </Button>
            <Button color='secondary' outline>
              Reset
            </Button>
          </Col>
        </Row>
        </CardBody>
      </Form>
      </Card>
    )
  }
  export default AsinImportTab
  