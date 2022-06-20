import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row ,Alert, Form} from 'react-bootstrap'
import Contact from './Contact'

export default function Contacts() {

    
    const[contacts,setContacts]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[searching,setSearching]=useState("")

    useEffect(()=>{
        getContacts();
    },[])

    const getContacts = async ()=>{
        try {
            const res = await axios.get("https://randomuser.me/api/?results=30");
            setContacts(res.data.results);
            setIsLoading(true)


        } catch (err) {
            alert(err.message)
            
        }
    }
    
  return (
    <div>
    <Container>
    <Row>
    <Alert variant='danger' className='mt-5'>

     <Alert.Heading>Contact Details</Alert.Heading>

     </Alert>
     <Alert>
        <Form.Control type='text' value={searching} onChange={e=>setSearching(e.target.value)} />
     </Alert>
        {isLoading && 
        contacts.filter((item)=>{
            if(searching ===""){
                return item;
            }
            else if(item.name.first.toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
            else if(item.name.last.toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
            else if(item.location.city.toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
            else if(item.location.state.toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
            else if(item.location.country.toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
            
            else if(item.phone.toString().toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
            else if(item.email.toLowerCase().includes(searching.toLowerCase())){
                return item;
            }
        }).map((contact)=>{
            return(
                <Col sm={12} md={6} lg={4} key={contact.login.uuid}>
                    <Contact contact={contact} />
                </Col>
            )
        })

        }
    </Row>
    </Container>

    </div>
  )
}
