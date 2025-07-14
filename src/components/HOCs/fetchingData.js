import axios from "axios";
import { useEffect, useState } from "react"

//fetch data with hoc and pass it as a prop
export function hocFetch(Component,id){

    return props=> {
        const [data,setData]= useState(null)

        useEffect(()=>{
            (async()=> {
                const res= await axios.get(`http://localhost:5000/books/${id}`);
                setData(res.data);
            })();
        })

        return <>
            <Component {...props} resource={data}/>
        </>


    }
}