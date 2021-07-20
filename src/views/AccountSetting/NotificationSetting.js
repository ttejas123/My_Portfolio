
import React from 'react'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import {Lock } from 'react-feather'

const UserNotificationsSetting = () => {
    return (
 
        <Card>
        <CardHeader>
          <CardTitle tag='h1'>Notifications</CardTitle>
        </CardHeader>
        <CardBody>
        <Row>
        <Col sm='12'>
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
                <Col sm='12'>
                    <div className='permissions border mt-1'>
                        {/* <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                            <Lock size={18} className='mr-25' />
                            <span className='align-middle'>Permissions</span>
                        </h6> */}
                        <Table borderless striped responsive>
                            <thead className='thead-light'>
                                <tr>
                                    <th>Notifications</th>
                                    <th>Email</th>
                                    <th>SMS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bid</td>
                                    <td>
                                        <CustomInput type='checkbox' id='master-1' label='' defaultChecked />
                                    </td>
                                    <td>
                                        <CustomInput type='checkbox' id='master-2' label='' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Change Password</td>
                                    <td>
                                        <CustomInput type='checkbox' id='reports-1' label='' />
                                    </td>
                                    <td>
                                        <CustomInput type='checkbox' id='reports-2' label='' defaultChecked />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Payment</td>
                                    <td>
                                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                                    </td>
                                    <td>
                                        <CustomInput type='checkbox' id='user-2' label='' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Backup Account Activity</td>
                                    <td>
                                        <CustomInput type='checkbox' id='back-1' label='' defaultChecked />
                                    </td>
                                    <td>
                                        <CustomInput type='checkbox' id='back-2' label='' />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </Col>
              <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                  Save Changes
                </Button.Ripple>
                <Button.Ripple color='secondary' outline>
                  Reset
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
        </Row>
        </CardBody>
        </Card>
          ) 
}

export default UserNotificationsSetting
