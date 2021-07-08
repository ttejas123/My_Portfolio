import * as yup from 'yup'
import { useState, Fragment } from 'react'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Form, FormGroup, Row, Col, Button } from 'reactstrap'
import InputPasswordToggle from '@components/input-password-toggle'

const UpdatePassword = ({ stepper, type }) => {
  const SignupSchema = yup.object().shape({
    'old-password': yup.string().required(),
    'new-password': yup.string().required(),
    'retype-new-password': yup
      .string()
      .required()
      .oneOf([yup.ref(`new-password`), null], 'Passwords must match')
  })

  const { register, errors, handleSubmit, trigger } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => trigger()

  return (
    <Fragment>
    <div className='content-header'>
    <h5 className='mb-0'>Update Password</h5>
    <small>Update Your Password</small>
  </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm='6'>
          <FormGroup>
            <InputPasswordToggle
              label='Old Password'
              htmlFor='old-password'
              name='old-password'
              innerRef={register({ required: true })}
              className={classnames('input-group-merge', {
                'is-invalid': errors['old-password']
              })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='6'>
          <FormGroup>
            <InputPasswordToggle
              label='New Password'
              htmlFor='new-password'
              name='new-password'
              innerRef={register({ required: true })}
              className={classnames('input-group-merge', {
                'is-invalid': errors['new-password']
              })}
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <InputPasswordToggle
              label='Retype New Password'
              htmlFor='retype-new-password'
              name='retype-new-password'
              innerRef={register({ required: true })}
              className={classnames('input-group-merge', {
                'is-invalid': errors['retype-new-password']
              })}
            />
          </FormGroup>
        </Col>
        {/* <Col md='5'>
              <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                <span className='align-middle d-sm-inline-block d-none'>Previous</span>
              </Button.Ripple>  
            </Col>
            <Col className='ml-2' md='5'>
              
                <Button.Ripple color='success' className='btn-submit m-0' onClick={() => alert('submitted')}>
                  Submit
                </Button.Ripple>
              
            </Col> */}
      </Row>
      <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
    </Form>
    </Fragment>
  )
}

export default UpdatePassword
