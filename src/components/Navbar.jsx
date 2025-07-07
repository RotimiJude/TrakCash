import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center bg-green-300 px-3 py-4'>
      <div className='font-bold text-2xl'>
        <Link to = '/'>TrakCash</Link>
      </div>
      <ul className='flex space-x-4'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>

    </nav>
  )
}
