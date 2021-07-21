// ** React Imports
import { useState, useEffect } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

// ** Third Party Components
import { Box,  AtSign } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const UpdateOrder = () => {

    // const date = new Date()
    const optionsEntity = [
        {
            value: "Order",
             label: "Order",
              id:0,
         reasons : [
            {value : 'Delivery is too late', label : 'Delivery is too late'},
            {value : 'Product is damaged', label : 'Product is damaged'},
            {value : 'Return is not available', label : 'Return is not available'},
            {value : 'Other', label : 'Other'}
        ]
    },
        {
            value: "Bid",
         label: "Bid",
          id:1,
         reasons : [
            {value : 'Bid details are fake', label : 'Bid details are fake'},
            {value : 'Sellers are fake', label : 'Sellers are fake'},
            {value : 'Other', label : 'Other'}
        ]
    },
        {
            value: "Product",
         label: "Product",
          id:2,
         reasons : [
            {value : 'Price is fake', label : 'Price is fake'},
            {value : 'Images are fake', label : 'Images are fake'},
            {value : 'Name is fake', label : 'Name is fake'},
            {value : 'Other', label : 'Other'}
        ]
    }
      ]
   
    const selectedUser = {
        avatar: "",
        company: "Yotz PVT LTD",
        contact: "(479) 232-9151",
        Category: "El Salvador",
        currentPlan: "enterprise",
        email: "gslixby0@abc.net.au",
        fullName: "Coense Solutions",
        id: 1,
        role: "editor",
        status: "inactive",
        username: "gslixby0"
          }
 // console.log(selectedUser)

  const initialvalues = {
    id:1,
    name: "",
    email: "",
    hasSubscription: "",
    isVerified: "",
    logo : "",
    phone : "",
    panNumber: "",
    Currency:  [{value: "currency", label: "Indian Rupee"}],
    City:  [{value: "city", label: "Mumbai"}], 
    reason:  [{value: "reason", label: "reason"}],
    entity: [{value: "Entity", label: "Entity"}]
  }

  const [reasonsOptions, setReasonsOptions] = useState(optionsEntity[0].reasons)
  const [values, setValues] = useState(initialvalues)
  const [renderOther, setRenderOther] = useState(false)
  const [renderUpload, setRenderUpload] = useState(false)
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
  

  const setreasonsOptions = (data) => {
      
    setValues(
        {
           ...values,
           entity : data,
           reasons : optionsEntity[data.id].reasons
        } 
)
    setReasonsOptions(optionsEntity[data.id].reasons)
  }


  // Image Upload section
  const [previewArr, setPreviewArr] = useState([])

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true,
    totalProgress: 0
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
      console.log(file.data)
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }

  // ** Update user image on mount or change
//   useEffect(() => {
//     if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
//       setUserData(selectedUser)
//       if (selectedUser.avatar.length) {
//         return setImg(selectedUser.avatar)
//       } else {
//         return setImg(null)
//       }
//     }
//   }, [selectedUser])

  return (
      <Card>
          <CardBody>
    <Row>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
          <Col md='4' sm='12'>
        <FormGroup>
          <Label for='readonlyInput'>Order Id</Label>
          <Input type='text' id='readonlyInput' placeholder='ORD001' readOnly value={'ORD001'}/>
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='readonlyInput'>Bid Id</Label>
          <Input type='text' id='readonlyInput' placeholder='B0001' readOnly value={'B0001'}/>
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='quantity'>Quantity</Label>
          <Input type='text' id='quantity' placeholder='80'/>
        </FormGroup>
      </Col>
      {/* <Col sm='12'>
          <h4 className='d-block mb-1'>
            <span className='align-middle'>Redressal For</span>
          </h4>
          <Row>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='entity'>Entity</Label>
            <Select
              id='entity'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionsEntity}
              theme={selectThemeColors}
              value={values.entity[0]}
              onChange={data => {

                                setreasonsOptions(data)
                                //  setValues(
                                //           {
                                //              ...values,
                                //              Category : data
                                //           } 
                                //   )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='reason'>Reason</Label>
            <Select
              id='reason'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={reasonsOptions}
              theme={selectThemeColors}
              value={values.reason[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             reason : data
                                          } 
                                  )
                                  { data.value === 'Other' ? setRenderOther(true) : setRenderOther(false) }
                                  setRenderUpload(true)
                                }
                        }
            />
            </FormGroup> 
            </Col>
            {renderOther ? (
                <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='other'>Other</Label>
                  <Input type='text' id='other' placeholder='Specify reason' />
                </FormGroup>
              </Col>
            ) : null}
            
            </Row>
            </Col>
            {renderUpload ? (
                 <Col sm='12'>
                 <CardHeader>
               <CardTitle tag='h4'>Upload Images</CardTitle>
             </CardHeader>
             <CardBody>
               <DragDrop uppy={uppy} />
               {renderPreview()} */}
               {/* <Button.Ripple className='d-block mb-1 mb-sm-0 mr-0 mr-sm-1 mt-2' type='submit' color='primary' onClick={e => {
                                                                                           e.preventDefault()
                                                                                           // uppy.totalProgress(0)
                                                                                         } }>
                       Reset Images
                     </Button.Ripple> */}
             {/* </CardBody>
             </Col>
            ) : null} */}
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
export default UpdateOrder
