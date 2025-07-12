import { Link } from "react-router-dom"
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar() {
  const {logout} =useLogout()
  const {user} =useAuthContext()
  return (
    <nav className='flex justify-around items-center bg-green-200 px-3 py-4'>
      <div className='font-bold text-2xl'>
        <Link to = '/'>TrakCash</Link>
      </div>
      <ul className='flex space-x-4 items-center'>

        {!user && (
        <>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li><Link to='/signup'>Sign Up</Link></li>
        </>
        )}

        {user && (

          <>

          <li>Hello, {user.displayName}</li>


        <li>
          <button onClick={logout}
          className="border rounded-xl text-green-700 px-2 py-2 cursor-pointer font-bold hover:bg-green-700 hover:text-white">
            Logout
          </button>
        </li>

        </>
        )}
      </ul>

    </nav>
  )
}
