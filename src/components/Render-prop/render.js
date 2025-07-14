import axios from "axios";
import { useEffect, useState } from "react";


export default function RenderLoader({resourceUrl,render}){
    const[resource,setResource] = useState(null)

    async function getResource(){
           try {
      const response = await axios.get(`http://localhost:5000/${resourceUrl}`);
      setResource(response.data);
    } catch (error) {
      console.error("Failed to fetch resource:", error);
    }

    }

    useEffect(()=>{
        getResource()
    },[render])

   

    return render(resource)
}