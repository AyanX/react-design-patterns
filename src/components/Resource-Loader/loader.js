import axios from "axios";
import React, { useEffect, useState } from "react";


export default function ResourceLoader({resourceUrl,children}){
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
    },[resourceUrl])

   const res = React.Children.map(children, (child) => 
    React.cloneElement(child, { resource })
  );

    return <>{res}</>
}