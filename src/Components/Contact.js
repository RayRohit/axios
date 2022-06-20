import React from 'react'
import { Card ,Button} from 'react-bootstrap'

export default function Contact( {contact} ) {
  return (
    <div>
        <Card className='my-3 p-3 rounded h-90'>
            <Card.Img style={{objectFit:"contain"}} variant="top" src={contact.picture.large} />
            <Card.Body>
                <Card.Title>
                    {`${contact.name.first + " "+ contact.name.last}`}
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Address </Card.Subtitle>
                <Card.Text>
                    <div>
                        <strong>Number:</strong>{contact.location.street.number}
                    </div>
                    <div>
                        <strong>Street:</strong>{contact.location.street.name}
                    </div>
                    <div>
                        <strong>City:</strong>{contact.location.city}
                    </div>
                    <div>
                        <strong>State:</strong>{contact.location.state}
                    </div>
                    <div>
                        <strong>Country:</strong>{contact.location.country}
                    </div>
                </Card.Text>
                <Card.Subtitle className='mb-2 text-muted'>Phone</Card.Subtitle>
                <Card.Text>
                    {contact.phone}
                </Card.Text>
                <Card.Subtitle className='mb-2 text-muted'>Email</Card.Subtitle>
                <Card.Text>
                    {contact.email}
                </Card.Text>
                <a href={`mailto:${contact.email}`}>
                <Button style={{borderRadius:"20px"}} className="w-100" variant="primary">E-Mail</Button>
                </a>

            </Card.Body>
        </Card>
    </div>
  )
}
