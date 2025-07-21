import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [isCancelled, setIsCancelled]= useState(false)
    const [error, setError]=useState(null)
    const [isPending, setIsPending]= useState(false)
    const {dispatch} = useAuthContext()

    const signup =async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try{
            // create a new user and stores the email and password
           const res =  await projectAuth.createUserWithEmailAndPassword(email, password)
             if(!res){
            throw new Error('could not complete signup')
           }

           //add display name to user
           await res.user.updateProfile({displayName})
           // dispatch login function
           dispatch({type: 'LOGIN', payload:res.user})

           
           
            setIsPending(false)
            setError(null)
          

        }
        catch(err){
            
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
        
    }

    
    return{error, isPending, signup}

}