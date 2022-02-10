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
        return (
          <div>
            <h3>Usuario{post.userId}:</h3> {post.title}
            {/*<img src="https://media.revistagq.com/photos/5ca5fe4e3492a90c37bf1d13/3:4/w_363,h_484,c_limit/huron_gq_9670.jpg"/>*/}
          </div>
        )
      })
    }
    </div>
  );
}

export default App;
