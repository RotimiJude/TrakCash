import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup'
export default function Signup() {
  const [displayName, setDisplayName] =useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isPending} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup( email, password, displayName)
  }
  
  return (

    <div className="flex justify-center items-center min-h-fit">

      <div className='w-[400px] md:w-[500px] duration-500 rounded-xl  p-7'>
        
          <h3 className='text-2xl font-bold my-3 text-center'>Sign Up</h3>

          <form className='flex flex-col my-5 space-y-7' onSubmit={handleSubmit}>

          <div className='flex items-center border rounded-lg p-1'>
              <input
              type='text'
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              className='w-full border-0 outline-0 focus:placeholder-transparent tracking-widest placeholder:font-bold peer' placeholder='Display Name'
              required/>
               <svg className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
            </div>
            
            <div className='flex items-center border rounded-lg p-1'>
             <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='w-full border-0 outline-0 focus:placeholder-transparent tracking-widest placeholder:font-bold peer' placeholder='Email'
              required/>
               <svg className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
            </div>


            <div className='flex items-center border rounded-lg p-1'>
              <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='w-full border-0 outline-0 focus:placeholder-transparent placeholder:font-bold tracking-widest peer' placeholder='Password'
              required/>
               <svg className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
            </div>

            {!isPending && <button className=' text-green-400  border-2 border-green-400 rounded-lg font-bold py-2 px-3 hover:bg-green-600 hover:text-white text-center  cursor-pointer'>Sign Up</button>}

            {isPending && <button className=' text-green-400  border-2 border-green-400 rounded-lg font-bold py-2 px-3 hover:bg-green-600 hover:text-white text-center  cursor-not-allowed' disabled>Loading</button>}

        {error && <p className='text-red-500'>{error}</p>}

          </form>

        
      </div>
     

    </div>
  )
}
