import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"

const ListUsers=()=>{

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <h2>List Users</h2>
            {
               loading ? <h1>Mazel</h1> : users.map((el,i,t)=><CardUser el={el}/>)
            }
        </div>
    )
}

export default ListUsers