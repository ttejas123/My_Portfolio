import { useState } from 'react'
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
    CustomInput,
    Label
  } from 'reactstrap'
  
  const EditForm = (props) => {
      console.log(props.data)
      console.log(props.data)
      const [values, setValues] = useState('')
    const handleInputeChange = (event) => {
        const {name, value} = event.target
        setValues(
        {
          ...values,
          [name] : value
        }
        )
      }
    
      const handleSubmit = () => {
        console.log(values)
        props.handleSubmit(values)
        //prop.editAction(values)
        setValues('')
      }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 11, offset: 1 }}>
            <FormGroup row  md={{ size: 9, offset: 3 }}>
              <Label sm='4' size='lg' for='name'>
                City
              </Label>
              <Col sm='8'>
                <Input type='text' name='name' id='name' defaultValue={props.data.name} placeholder='City Name' onChange={handleInputeChange}/>
              </Col>
            </FormGroup>
  
            <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='state'>
                State
              </Label>
              <Col sm='8'>
                <Input type='text' name='State' id='State' defaultValue={props.data.state} placeholder='State' onChange={handleInputeChange}/>
              </Col>
            </FormGroup>
            {/* <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='country'>
                Country
              </Label>
              <Col sm='8'>
                <Input type='email' name='Country' id='Country' defaultValue={props.data.country} placeholder='Country' onChange={handleInputeChange}/>
              </Col>
            </FormGroup> */}
            <FormGroup className='ml-3' row>
                <Label sm='5' size='lg' for='country'>Country</Label>
                <Col sm='7'>
                <Input  type='select' name='country' id='country' defaultValue={props.data.country} onChange={handleInputeChange}>
                <option value='select'>Select</option>
                  <option value='inida'>India</option>
                  <option value='usa'>USA</option>
                  <option value='uk'>UK</option>
                  <option value='australia'>Australia</option>
                  <option value='vatican city'>Vatican City</option>
                </Input>
                </Col>
              </FormGroup>
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' type='submit'  onClick={e => { 
                                                e.preventDefault() 
                                                handleSubmit()
                                                } } >
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset' onClick={props.handleCancel}>
                  Cancel
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default EditForm
  