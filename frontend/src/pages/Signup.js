import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [user,setUser]=useState([])
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()


    useEffect(()=>{
        fetchUsers();
    }, [] )

    const fetchUsers=()=>{
        axios
        .get('http://localhost:3001/register')
        .then((res)=>{
            // console.log(res.data)
        })

    }
    const handleRegister=(event)=>{
        event.preventDefault()
        axios
        .post('http://localhost:3001/register',{email, username, password})
        .then(()=>{
            alert('Registration Succesful')
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers()
            navigate('/login')
        })
        .catch((err)=>{
            alert("Error with Registration")
        })
    }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >               
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
