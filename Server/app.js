const app = require("express")();
const cors = require("cors")
app.use(cors())
const books = [
  {
    "id": 1,
    "title": "Welcome to Dead House",
    "author": "R.L. Stine",
    "publication_year": 1992,
    "genre": "Horror",
    "series_number": 1
  },
  {
    "id": 2,
    "title": "Stay Out of the Basement",
    "author": "R.L. Stine",
    "publication_year": 1992,
    "genre": "Horror",
    "series_number": 2
  },
  {
    "id": 3,
    "title": "Monster Blood",
    "author": "R.L. Stine",
    "publication_year": 1992,
    "genre": "Horror",
    "series_number": 3
  },
  {
    "id": 4,
    "title": "Say Cheese and Die!",
    "author": "R.L. Stine",
    "publication_year": 1992,
    "genre": "Horror",
    "series_number": 4
  },
  {
    "id": 5,
    "title": "The Curse of the Mummy's Tomb",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 5
  },
  {
    "id": 6,
    "title": "Let's Get Invisible!",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 6
  },
  {
    "id": 7,
    "title": "Night of the Living Dummy",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 7
  },
  {
    "id": 8,
    "title": "The Girl Who Cried Monster",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 8
  },
  {
    "id": 9,
    "title": "Welcome to Camp Nightmare",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 9
  },
  {
    "id": 10,
    "title": "The Ghost Next Door",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 10
  },
  {
    "id": 11,
    "title": "The Haunted Mask",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 11
  },
  {
    "id": 12,
    "title": "Be Careful What You Wish For...",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 12
  },
  {
    "id": 13,
    "title": "Piano Lessons Can Be Murder",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 13
  },
  {
    "id": 14,
    "title": "The Werewolf of Fever Swamp",
    "author": "R.L. Stine",
    "publication_year": 1993,
    "genre": "Horror",
    "series_number": 14
  },
  {
    "id": 15,
    "title": "You Can't Scare Me!",
    "author": "R.L. Stine",
    "publication_year": 1994,
    "genre": "Horror",
    "series_number": 15
  }
]
const employees = [
  {
    "id": 1,
    "name": "Alice Mwangi",
    "position": "Software Engineer",
    "department": "Engineering",
    "hire_year": 2020
  },
  {
    "id": 2,
    "name": "Brian Otieno",
    "position": "Marketing Specialist",
    "department": "Marketing",
    "hire_year": 2019
  },
  {
    "id": 3,
    "name": "Clara Kimani",
    "position": "HR Manager",
    "department": "Human Resources",
    "hire_year": 2017
  },
  {
    "id": 4,
    "name": "Daniel Njoroge",
    "position": "Sales Executive",
    "department": "Sales",
    "hire_year": 2021
  },
  {
    "id": 5,
    "name": "Eva Wambui",
    "position": "UI/UX Designer",
    "department": "Design",
    "hire_year": 2022
  },
  {
    "id": 6,
    "name": "Felix Omondi",
    "position": "IT Support Specialist",
    "department": "IT",
    "hire_year": 2018
  },
  {
    "id": 7,
    "name": "Grace Achieng",
    "position": "Data Analyst",
    "department": "Analytics",
    "hire_year": 2020
  },
  {
    "id": 8,
    "name": "Henry Kiptoo",
    "position": "Product Manager",
    "department": "Product",
    "hire_year": 2016
  },
  {
    "id": 9,
    "name": "Irene Muthoni",
    "position": "Accountant",
    "department": "Finance",
    "hire_year": 2019
  },
  {
    "id": 10,
    "name": "Jacob Kariuki",
    "position": "DevOps Engineer",
    "department": "Engineering",
    "hire_year": 2021
  },
  {
    "id": 11,
    "name": "Karen Nduta",
    "position": "Customer Success Manager",
    "department": "Customer Service",
    "hire_year": 2018
  },
  {
    "id": 12,
    "name": "Louis Mutua",
    "position": "Legal Advisor",
    "department": "Legal",
    "hire_year": 2015
  },
  {
    "id": 13,
    "name": "Maureen Chebet",
    "position": "Content Writer",
    "department": "Marketing",
    "hire_year": 2022
  },
  {
    "id": 14,
    "name": "Nelson Karanja",
    "position": "Security Analyst",
    "department": "IT",
    "hire_year": 2020
  },
  {
    "id": 15,
    "name": "Olivia Njoki",
    "position": "Business Analyst",
    "department": "Strategy",
    "hire_year": 2019
  }
]

app.get("/books",(req,res)=>{
    return res.send(books)
})
app.get("/books/:id",(req,res)=>{
    let book = books.filter(book=> book.id ===Number(req.params.id))
    book? res.json(book) : res.status(404).send({})
    return 
})
app.get("/employee",(req,res)=>{
    return res.send(employees)
})
app.get("/employee/:id",(req,res)=>{
    let employee = employees.filter(book=> book.id ===Number(req.params.id))
    employee? res.send(employee) : res.status(404).send({})
    return 
})

module.exports = app
