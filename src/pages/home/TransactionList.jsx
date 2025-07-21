import { useFirestore } from "../../hooks/useFirestore"

export default function TransactionList({transactions}) {
  const {deleteDocument, response} = useFirestore('transactions')
  console.log(response)
  return (
    <ul className="">
        {transactions.map((transaction) => (
            <li key={transaction.id} className=" relative flex justify-between p-4 my-2 bg-gray-100 text-center border-l-4 border-l-green-600 border-double rounded-r-lg rounded-tl-lg rounded-bl-lg shadow-xl ">
                <p>{transaction.name}</p>
                <p className="text-gray-700 font-bold">₦{transaction.amount}</p>
                <button onClick={() => deleteDocument(transaction.id)} className="absolute top-0 right-0 text-gray-700 bg-zinc-300 font-bold px-2 cursor-pointer animate-pulse rounded">x</button>
            </li>
        ))}
    </ul>
  )
}
