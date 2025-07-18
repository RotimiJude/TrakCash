import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import {useAuthContext} from './useAuthContext'

export const useLogin = () => {
    const [isCancelled, setIsCancelled]= useState(false)
    const [error, setError]=useState(null)
    const [isPending, setIsPending]= useState(false)
    const {dispatch} = useAuthContext()

    const login = async (email, password)=>{
        setError(null)
        setIsPending(true)

        // sign user in
        try{
             const res = await projectAuth.signInWithEmailAndPassword(email, password)

            // dispatch login
            dispatch({type:'LOGIN', payload:res.user})
            console.log("✅ Login successful")

            //update state
            
            if(!isCancelled){
                setIsPending(false)
            setError(null)

            }

            

        }
        catch(err){
            if(!isCancelled){
            console.log("❌ Login error:", err.message)
            setError(err.message)
            setIsPending(false)
            }
        }

    }

    useEffect(()=>{
        return () => setIsCancelled(true)
        
    },[])



    return{login, error, isPending}
}