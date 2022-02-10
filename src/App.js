import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const url ='https://jsonplaceholder.typicode.com/posts'
  const [todos, setTodos] = useState()

  const fetchApi = async() =>{
    const respuesta = await fetch(url)
    const respuestaJSON = await respuesta.json()
    setTodos(respuestaJSON)
    console.log(respuestaJSON)
  }

  useEffect(() =>{
    fetchApi()
  },[])

  return (
    <div className="App">
    <h1>Hola mundo</h1>
    { !todos ? 'Cargando...' :
      todos.map( (todo,index) =>{
        return <li>{todo.title}</li>
      })
    }
    </div>
  );
}

export default App;
