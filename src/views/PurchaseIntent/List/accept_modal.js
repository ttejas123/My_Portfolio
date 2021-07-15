
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, CustomInput } from 'reactstrap'

const ModalForm = props => {

    // const {
    //     formModal,
    //     setFormModal
    //   } = props
    const { formModal, setFormModal, productData} = props
 return ( 
     
//  <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
<Modal isOpen={formModal} toggle={setFormModal} className='modal-dialog-centered'>

 <ModalHeader toggle={() => setFormModal(!formModal)}>Accept Purchase Intent</ModalHeader>
 <ModalBody>
 <FormGroup>
     <Label for='Product'>Product:</Label>
     <Input type='Product' id='Product' placeholder='Product'  disabled defaultValue={productData && productData.SKU}/>
   </FormGroup>
   <FormGroup>
     <Label for='Quantity'>Required Quantity:</Label>
     <Input type='Quantity' id='Quantity' placeholder='Required Quantity' disabled defaultValue={productData && productData.quantity} />
   </FormGroup>
   <FormGroup>
     <Label for='Lead_Time'>Lead Time:</Label>
     <Input type='Lead_Time' id='Lead_Time' placeholder='Lead Time' disabled defaultValue={productData && productData.delivery_date} />
   </FormGroup>
             <FormGroup>
                 <CustomInput type='checkbox' name='ddCheck' id='ddCheck' label='I accept that above product is available with given quantity' />
             </FormGroup>
 </ModalBody>
 <ModalFooter>
   <Button color='primary' onClick={() => setFormModal(!formModal)}>
     Accept
   </Button>{' '}
 </ModalFooter>
</Modal>
 )
}

export default ModalForm