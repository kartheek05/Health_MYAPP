import { Navigate, useNavigate } from 'react-router-dom'
import './style.css'
function Navbar() {
  let navigate=useNavigate()
  return (
    <nav>
        <h1>Doctor App</h1>
        <h3>
          <div>
            <button onClick={()=>navigate('/')}>Home</button> 
          </div>
          <div>
            <button onClick={()=>navigate('/add-doctor')}>Add Doctor</button>
          </div>
        </h3>
    </nav>
  )
}

export default Navbar
