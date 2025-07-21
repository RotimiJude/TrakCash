import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

//next time ({uid}) not (uid) cause its meant to be a string
export default function TransactionForm(uid) {
    const [name, setName] =useState('')
    const [amount, setAmount] = useState('')
    const {addDocument, response} = useFirestore('transactions')
    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name, 
            amount})
    }
    //reset form fields
    useEffect(() =>{
        if(response.success){
            setName('')
            setAmount('')
        }
    },[response.success])

  return (
    <>
    <h3 className="text-center text-xl font-bold text-green-700 my-2">Add a Transaction</h3>
    <div className=" rounded-2xl bg-green-600 p-3 text-white">
        
        <form onSubmit={handleSubmit} className="flex flex-col my-1 space-y-2">
            <label>
                <span>
                    Transaction Name:
                </span>
            </label>
            <input
            type="text"
            onChange={(e) => setName (e.target.value)}
            value={name}
            required
            className="w-full border-0 outline-0 bg-white text-black rounded tracking-widest px-2 py-1" />

            <label>
                <span>
                    Amount (₦):
                </span>
            </label>

            <input
            type="number"
            onChange={(e) => setAmount (e.target.value)}
            value={amount}
            required
            className="w-full border-0 outline-0 bg-white text-black rounded tracking-widest px-2 py-1" />

            <button className="my-3 px-2 py-1 rounded-lg border-2 border-white cursor-pointer
            text-white font-bold hover:bg-green-700 hover:text-white">Add</button>
        </form>
    </div>
    </>
  )
}
