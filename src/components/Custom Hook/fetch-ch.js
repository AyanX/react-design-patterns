import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchBook(bookId){
    const [book,setBook]= useState(null)

    useEffect(()=>{
            (async()=> {
                const res= await axios.get(`http://localhost:5000/books/${bookId}`);
                setBook(res.data);
            })();
        })

        return book;
}