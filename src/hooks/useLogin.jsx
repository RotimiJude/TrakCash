import {useState, useEffect} from 'react'
import {projectAuth} from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIspending] = useState(false)
    const {dispatch} = useAuthContext()
    //adding clean up functions to avoid unmounting
    //we return clean up functions in useEffect()
    const [isCancelled, setIsCancelled]=useState(false)

    const login = async (email, password) => {
        setError(null)
        setIspending(true)
        //sign user out
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            //dispatch logout action
            dispatch ({type: 'LOGIN', payload: res.user})
            
            setIspending(false)
            setError(null)
            
        }
        catch (err) {
            
              console.log("Login error:", err.message)
              console.log("Full error object:", err) // 👈 add this
              setError(err.message)
              setIspending(false)
            
          }
        

    }
    
    
    return{login, error, isPending}

}