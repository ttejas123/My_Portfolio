
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, CustomInput } from 'reactstrap'

const RejectModalForm = props => {

    // const {
    //     formModal,
    //     setFormModal
    //   } = props
    const { formModal, setFormModal, productData} = props
 return ( 
     
//  <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
<Modal isOpen={formModal} toggle={setFormModal} className='modal-dialog-centered'>

 <ModalHeader toggle={() => setFormModal(!formModal)}>Reject Purchase Intent</ModalHeader>
 <ModalBody>
 <FormGroup>
     <Label for='Product'>Product:</Label>
     <Input type='Product' id='Product' placeholder='Product'  disabled defaultValue={productData && productData.SKU}/>
   </FormGroup>
   <FormGroup>
     <Label for='Product'>Comment:</Label>
     <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Comment' />
   </FormGroup>

   
             <FormGroup>
                 <CustomInput type='checkbox' name='ddCheck' id='ddCheck' label='I am rejecting above purchase intent' />
             </FormGroup>
 </ModalBody>
 <ModalFooter>
   <Button color='primary' onClick={() => setFormModal(!formModal)}>
     OK
   </Button>{' '}
 </ModalFooter>
</Modal>
 )
}

export default RejectModalForm