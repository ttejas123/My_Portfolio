import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'

const Customization_Edit = () => {
    const [isOpen, setisOpen] = useState(true)

    const toggleModal = () => {
        setisOpen(!isOpen)
      }
    return <div className='demo-inline-spacing'>
        <Modal
          isOpen={isOpen}
          toggle={() => toggleModal()}
          className='modal-dialog-centered'
          modalClassName='modal-secondary'
          key='{item.id}'
        >
          {/* <ModalHeader toggle={() => toggleModal()}>{item.title}</ModalHeader> */}
          <ModalHeader toggle={() => toggleModal()}>
          <h4>
          Customization : <small className='text-secondary font-weight-bold'>View</small>
              </h4>
              {/* <Button color='flat-secondary'>View</Button> */}

              </ModalHeader>

          <ModalBody>
          <Input name="Name" id='Name' type="textarea" bsSize="lg" rows='5'/>
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={() => toggleModal()}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
    </div>

}

export default Customization_Edit
