import { useAuthContext } from "../../hooks/useAuthContext";
import TransactionForm from "./TransactionForm";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";


export default function Home() {
  const {user} = useAuthContext()
  const { documents, error } = useCollection(
    "transactions",
    ['uid.uid', '==', user.uid], ['createdAt', 'desc']
  );
  
  return (
   <>
   <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-4 text-center p-7">

   <div>
    {error && <p>{error}</p>}
    {documents && <TransactionList transactions={documents} uid={user.uid}/>}
   </div>

   
   <div>
      <TransactionForm uid={user.uid}/>

    </div>

    </div>

  </>
  )
}
