import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import axios from "axios"


const Body = () => {

    const [data,setData] = useState([])
    const [change,setChange]= useState(0)
    
 
   const ticketData = async() =>{
   const dat = await axios.get("https://ticket-management-backend.herokuapp.com/getticket")  
    setData(dat.data)  
    
    } 
    
   useEffect(()=>{

    ticketData()
   
   
},[change])

const DeleteUser = (id) => {
    axios.delete(`https://ticket-management-backend.herokuapp.com/deleteticket/${id}`).then((res)=>{
        console.log(res)
        let counts = change+1
        setChange(counts)
        
})
  }



    console.log(data)


    return(
        <div className="container">
            <br/>
       <Link to="/add"><div className="button"><button type="button" className="btn btn-primary">Add Ticket</button></div><br/> </Link> 
        <table className="table">
        <thead className="thead-dark">
  <tr>
    
    <th scope="col">ID</th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    <th scope="col"></th>
    <th scope="col"></th>
  </tr>
</thead>
<tbody className="table">
   
          {
              data.map((datas,index)=>(
                  <tr key={index+1}>
                      <td><b>{datas.id}</b></td>
                      <td><b>{datas.queryTitle}</b></td>
                      <td><b>{datas.description}</b></td>
                   <td><button className="btn btn-primary mr-2" onClick={()=>{DeleteUser(datas.id)}}>Delete</button></td> 
                    <td><Link to = {`/edit/${datas.id}`}><button className="btn btn-primary mr-2">Edit</button></Link> </td>
                  </tr>
              ))
          }
        
    
</tbody>
</table>

</div>

    )
}

export default Body;