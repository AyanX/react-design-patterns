import "./App.scss"
import ResourceLoader from "./components/Resource-Loader/loader"

export default function App(){


  function Resource({resource}){
    console.log("resource:", resource);
     if (!resource) return <p>Loading book...</p>;

     const mapped = resource.map((book,index)=> {
      return (
           <div key={index}>
           <h2>{book.title}</h2>
           <p>Author: {book.author}</p>
           <p>Year: {book.publication_year}</p>
          </div>
      )
     })
  return <>{mapped}</>
  }


  return (
    <div>
      <h1>hello</h1>
      <ResourceLoader resourceUrl="books/5">
          <Resource  />
      </ResourceLoader>

      <ResourceLoader resourceUrl="books">
          <Resource  />
      </ResourceLoader>
    </div>
  )
}