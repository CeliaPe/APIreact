import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const url ='https://jsonplaceholder.typicode.com/posts'
  const [posts, setPosts] = useState()

  const fetchApi = async() =>{
    const respuesta = await fetch(url)
    const respuestaJSON = await respuesta.json()
    setPosts(respuestaJSON)
    console.log(respuestaJSON)
  }

  useEffect(() =>{
    fetchApi()
  },[])

  return (
    <div className="App">
    <h1>Posts</h1>
    { !posts ? 'Cargando...' :
      posts.map( (post,index) =>{
        return <li>{post.title}</li>
      })
    }
    </div>
  );
}

export default App;
