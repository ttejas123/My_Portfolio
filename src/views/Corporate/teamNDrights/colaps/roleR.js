// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Lock  } from 'react-feather'

import { useForm, Controller } from 'react-hook-form'

import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (props) => {
  const initialvalues = {
    id:0,
    role:"",
    Company:"",
    transaction: 0,
    balance: 0,
    CorporateName: [{value: "TCS", label: "TCS"}]
  }

  const optionsUser = [
    {value: "", label: "Select sub-Category"},
    {value: "Tejas", label: "Tejas"},
    {value: "Komal", label: "Komal"},
    {value: "Pravin", label: "Pravin"}
  ]

  const optionCorporateName = [
    {value: "TCS", label: "TCS"},
    {value: "Coense", label: "Coense"},
    {value: "Accenture", label: "Accenture"},
    {value: "Infosys", label: "Infosys"},
    {value: "Cognizant", label: "Cognizant"}
  ]

  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  

  return (
    <Row>
 
          <Col sm='12'>
              <div className='permissions border mt-1'>
                <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                  <span className='align-middle'>{props.name}({props.data})</span>
                </h6>
                <Table borderless striped responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th>Rights</th>
                      <th>Create</th>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bids</td>
                      <td>
                        <CustomInput type='checkbox' id='master-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-4' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Transaction</td>
                      <td>
                        <CustomInput type='checkbox' id='reports-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-2' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-4' label='' />
                      </td>
                      </tr>
                    <tr>
                      <td>Team</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-3' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-4' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Profile</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-3' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-4' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Warehouse</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-3' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-4' label='' />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
    </Row>
  )
}
export default UserAccountTab
