import React from 'react'
import { useEffect,useState } from 'react'; 
import { Form, Table,Col} from 'react-bootstrap';

export default function Filter() {
    const [data,setData] = useState([]);
    const [searchItem,setSearchItem] = useState('');
    const [searchParam] = useState(["id","name","username","email","phone"])
  

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json()).then((data)=>{setData(data)})
    }, []);
    


 
    return (
        <div style={{textAlign:"center"}}>
            <div>
            <Col sm={4}>
            <Form.Control type="text"  placeholder='search'
                value={searchItem}
                onChange={(e)=>{setSearchItem(e.target.value)}} />
            </Col>
            </div>
            <div>
           


                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                        </tr>
                    </thead>
                    <tbody>{data.filter((item)=>{
                        return searchParam.some((newItem) => {
                            return (
                              item[newItem]
                                  .toString()
                                  .toLowerCase()
                                  .indexOf(searchItem.toLowerCase()) > -1
                                       );
                                   });
                        // if(searchItem == ""){
                        //     return val
                        // }
                        // else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
                        //     return val
                        // }
                    }).map((users,index)=>
                    <tr key={index}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.username}</td>
                        <td>{users.email}</td>
                        <td>{users.phone}</td>
                    </tr>
                    )}
                        
                    </tbody>
                </Table>


              
                           </div>
            
        </div>
    )
}
