import React from 'react'
import { Alert,Container,Row,Col } from 'react-bootstrap'

export default function Aalert() {
  return (
    <div>
    <Container>
     
     <Alert variant='danger' className='mt-5'>

     <Alert.Heading>Lorem Epsum Dummy</Alert.Heading>

     </Alert>
     <Row>
       <Col sm={12} md={6} lg={4}>
     <Alert variant='danger' className='mt-5'>
     <figure>
   <blockquote className="blockquote">
     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    
   </blockquote>
   <figcaption className="blockquote-footer">
     Someone famous in <cite title="Source Title">Source Title</cite>
   </figcaption>
    </figure>
     </Alert>

       </Col>

       <Col sm={12} md={6} lg={4}>
     <Alert variant='danger' className='mt-5'>
     <figure>
   <blockquote className="blockquote">
     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    
   </blockquote>
   <figcaption className="blockquote-footer">
     Someone famous in <cite title="Source Title">Source Title</cite>
   </figcaption>
    </figure>
     </Alert>

       </Col>


         <Col sm={12} md={6} lg={4}>
     <Alert variant='danger' className='mt-5'>
     <figure>
   <blockquote class="blockquote">
     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    
   </blockquote>
   <figcaption className="blockquote-footer">
     Someone famous in <cite title="Source Title">Source Title</cite>
   </figcaption>
    </figure>
     </Alert>

       </Col>
     </Row>
     
    </Container>
    </div>
  )
}
