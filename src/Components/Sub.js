import React from 'react'
import { Container, Form,Row,Col,Button,Alert} from 'react-bootstrap'
import { useFormik } from 'formik'

import * as Yup from 'yup'

export default function Sub() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            imageInput:"",
            street:"",
            city:"",
            state:"",
            country:""
            
        },
        onSubmit:values=>{
            alert(JSON.stringify(values));
        console.log(values);

        },
        validationSchema:Yup.object({
            name:Yup.string().required('Please Fill The Above Field'),
            email:Yup.string().required('Please Fill The Above Field').email('Invalid Email Format'),
            phone:Yup.string().required('please enter your phone number').max(12,'max of 12 characters').min(10,'min of 10 characters'),
            imageInput:Yup.string().required('Please Insert your Image '),
            street:Yup.string().required('please fill the above field'),
            city:Yup.string().required('please fill the above field'),
            state:Yup.string().required('please fill the above field'),
            country:Yup.string().required('please fill the above field'),

        })

    })
  return (
    <div className='mt-5'>
    
    <Container>
    <Alert variant='danger' className='mt-5'>

<Alert.Heading>Lorem Epsum Dummy Content</Alert.Heading>

</Alert>

    <Row  className="justify-content-md-center">
    <Col sm={12} md={8} lg={6}>
    <Alert className='mt-3'>
    <Form onSubmit={formik.handleSubmit}>
    
    <Form.Group className="mb-3">
    <Form.Label htmlFor='name'> Name </Form.Label>
    <Form.Control type="text" id='fname' name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Name" />
    <div>
    {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null} 
        
    </div>
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label htmlFor='email'>Email</Form.Label>
    <Form.Control type="email" id='email' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <div>
    {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
    </div>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label htmlFor='phone'> Phone</Form.Label>
    <Form.Control type="number" id='phone' name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Phone Number" />
    <div>
    {formik.touched.phone && formik.errors.phone?<div style={{color:'red'}}>{formik.errors.phone}</div>:null} 
        
    </div>
    </Form.Group>

    <Form.Group>
      <Form.Label htmlFor='imageInput'>Insert Your Image</Form.Label>
      <Form.Control type='file' id='imageInput' name='imageInput' onChange={formik.handleChange} value={formik.values.imageInput} onBlur={formik.handleBlur} ></Form.Control>
    <div>
    {formik.touched.imageInput && formik.errors.imageInput?<div style={{color:'red'}}>{formik.errors.imageInput}</div>:null}
    </div>
    </Form.Group>
    <Row className='mt-3'>
    <Col>
    <Form.Group>
      <Form.Label htmlFor='street'>Street</Form.Label>
      <Form.Control type='text' name='street' id='street' value={formik.values.street} onChange={formik.handleChange} onBlur={formik.handleBlur}   placeholder='enter your street'/>
      <div>
    {formik.touched.street && formik.errors.street?<div style={{color:'red'}}>{formik.errors.street}</div>:null} 

      </div>
    </Form.Group>
    </Col>

    <Col>
    <Form.Group>
      <Form.Label htmlFor='city'>City</Form.Label>
      <Form.Control type='text' name='city' id='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='enter your City'/>
    <div>
    {formik.touched.city && formik.errors.city?<div style={{color:'red'}}>{formik.errors.city}</div>:null} 

    </div>
    </Form.Group>
    </Col>
    </Row>

    <Row className='mt-3'>
    <Col>
    <Form.Group>
      <Form.Label htmlFor='state'>State</Form.Label>
      <Form.Control type='text' name='state' id='state' value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='enter your state'/>
    <div>
    {formik.touched.state && formik.errors.state?<div style={{color:'red'}}>{formik.errors.state}</div>:null} 

    </div>
    </Form.Group>
    </Col>

    <Col>
    <Form.Group>
      <Form.Label htmlFor='country'>Country</Form.Label>
      <Form.Control type='text' name='country' id='country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='enter your Country'/>
   <div>
    {formik.touched.country && formik.errors.country?<div style={{color:'red'}}>{formik.errors.country}</div>:null} 

   </div>
    </Form.Group>
    </Col>
    </Row>

     {/* <div class="form-group">
      <label for="formFile" class="form-label mt-4">Default file input example</label>
      <input class="form-control" type="file" id="formFile" />
    </div> */}

  
  

    <Button type="submit" variant="primary" className='mt-3'>Submit</Button>





    </Form>
    </Alert>
    </Col>
    </Row>
    </Container>

    </div>
  )
}
