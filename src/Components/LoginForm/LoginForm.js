import { DataContext } from '../../App'
import { useState, useContext } from 'react';

export default function LoginForm({goToLoadProfile, setCurrentUser, setLoads}) {
  
  const { BASE_URL, setLoggedIn } = useContext(DataContext);

  const [formData, setFormData] = useState({ username: "", password: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {

      const body = JSON.stringify({...formData});
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',				
        headers: { "Content-Type": "application/json" },
				body: body
			})
      const data = await response.json()

      setFormData({username: "", password: ""})

      if (data.token && data.username) {


        window.localStorage.setItem("token", data.token)
				window.localStorage.setItem("username", data.username)

        console.log ("user data:", data.user)
        setLoggedIn(true);
        setCurrentUser(data.user)
        setLoads(data.user.loads)

        //const currentUser = await getUser(BASE_URL, data.username, data.token)

        
 
      } else {
        console.error("login error")
      }    
  }catch (err) {
    console.log (err);
  }finally {

    goToLoadProfile(); 
  }
}


 return (
    <div id="user-login-page" className="form">
      <h1>User Login</h1>

      <form onSubmit={handleSubmit} className="user-login-form">
        <label>
            Username:
            <input 
              type = "text" 
              value={formData.username}
              id="username"
              onChange={handleChange}
              autoComplete="username" 
            ></input>
        </label>
        <br></br>
        <label>
            Password:
            <input 
              type="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
            ></input>
        </label>
        <br></br>

        <button type="submit">Login</button>
      </form>
  </div>
  )
}
