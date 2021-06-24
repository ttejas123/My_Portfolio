
import { React, Fragment, useState, useEffect} from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

// export default function ContactNumber() {
    const ContactNumber = ({ lable }) => {
        const [dropdownOpen, setDropdownOpen] = useState(false)
        const [count, setCount] = useState('')


        const toggleDropDown = () => {
            setDropdownOpen(!dropdownOpen)
          }
    return (
        <div>
              <FormGroup>
                <Label className='form-label' for='register-mnumber'>
                {lable}
                </Label>
                
                  <InputGroup className='mb-2'>
                    <InputGroupButtonDropdown addonType='prepend' isOpen={dropdownOpen} toggle={toggleDropDown}>
                      <DropdownToggle color='primary' caret outline>
                        +91
                     </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem className='w-100'>+91</DropdownItem>
                        <DropdownItem className='w-100'>+1</DropdownItem>
                      </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input type='text' id='register-mnumber'  />
                  </InputGroup>
              </FormGroup>
        </div>
    )
}

export default ContactNumber

