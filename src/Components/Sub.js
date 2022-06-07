import React from 'react'
import { Container, Form,Row,Col,Button,Alert} from 'react-bootstrap'
import { useFormik } from 'formik'

import * as Yup from 'yup'

export default function Sub() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            passwordConfirmation:""
        },
        onSubmit:values=>{
            alert(JSON.stringify(values));
        },
        validationSchema:Yup.object({
            name:Yup.string().required('Please Fill The Above Field'),
            email:Yup.string().required('Please Fill The Above Field').email('Invalid Email Format'),
            password: Yup.string()
            .required('No password provided.') 
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            passwordConfirmation: Yup.string()
             .oneOf([Yup.ref('password'), null], 'Passwords must match')
        })

    })
  return (
    <div className='mt-5'>
    
    <Container>
    <Alert variant='danger' className='mt-5'>

<Alert.Heading>Lorem Epsum Dummy Content</Alert.Heading>

</Alert>

    <Row  className="justify-content-md-center">
    <Col sm={12} md={6} lg={4}>
    <Alert className='mt-3'>
    <Form onSubmit={formik.handleSubmit}>
    
    <Form.Group className="mb-3">
    <Form.Label htmlFor='name'> Name :</Form.Label>
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
    <Form.Label htmlFor='password'>Create Password</Form.Label>
    <Form.Control type="password" id='password' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Password" />
    <div>
  {formik.touched.password && formik.errors.password?<div style={{color:'red'}}>{formik.errors.password}</div>:null} 

  </div>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label htmlFor='passwordConfirmation'>Confirm Password</Form.Label>
    <Form.Control type="password" id='passwordConfirmation' name="passwordConfirmation" value={formik.values.passwordConfirmation} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Password" />
    <div>
  {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation?<div style={{color:'red'}}>{formik.errors.passwordConfirmation}</div>:null} 

  </div>
  </Form.Group>
  

    <Button type="submit" variant="primary">Submit</Button>





    </Form>
    </Alert>
    </Col>
    </Row>
    </Container>

    </div>
  )
}
