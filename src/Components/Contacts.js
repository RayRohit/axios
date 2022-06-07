import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import Contact from './Contact'

export default function Contacts() {

    
    const[contacts,setContacts]=useState([])
    const[isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        getContacts();
    },[])

    const getContacts = async ()=>{
        try {
            const res = await axios.get("https://randomuser.me/api/?results=12");
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
        {isLoading && 
        contacts.map((contact)=>{
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
