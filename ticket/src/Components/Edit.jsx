import React, {  useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button, Form} from "react-bootstrap"
import axios from "axios"
import "../App.css"
import { useHistory, useParams,Link } from "react-router-dom";



const Edit = () => {

     const [query,setQuery]=useState('')
     const [desc,setDesc] = useState('')
    let history = useHistory();
   const {id} = useParams();
   console.log(id)

   console.log(query,desc)

 
  
    const ticketData = async() =>{
       
       
        await axios.put(`https://ticket-management-backend.herokuapp.com/editticket/${id}`,{
            id:id,
            queryTitle:query,
            description:desc
        }).then(res=>console.log(res)).catch((err)=>console.log(err))

        history.push("/");
        console.log(id)
        } 

    return(
        <Container>
                <Link to="/"><div className="button"><button type="button" className="btn btn-primary">Go Back</button></div><br/> </Link> 

        <Form>
        <h1>Enter the Details to edit</h1>
        <b><Form.Label>Enter Title</Form.Label></b>
        <Form.Control size="lg" type="text"  placeholder="Large text" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>  <br/>
        <b><Form.Label>Enter Description</Form.Label></b>
        <Form.Control size="lg" as="textarea" row={3} placeholder="Large text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
       <br/>
        <Button onClick={()=>{ticketData(id)}}>Submit</Button>
        </Form>
        </Container>
     
    )
}

export default Edit;