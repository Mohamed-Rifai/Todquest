import { useState } from 'react';
import './App.css';

function App() {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
   

  }

  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <img
            src="https://images.pexels.com/photos/10773454/pexels-photo-10773454.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
            className="left-image"
          />
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">username</label>
              <br />
              <input
               type="text"
               name='name'
               value={username}
               onChange={(e)=> setUserName(e.target.value)}
               placeholder="Enter username" />
              <br />
              <label htmlFor="">password</label>
              <br />
              <input 
              type="password"
              name='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Enter your password" /><br />
              <button>SIGN IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
