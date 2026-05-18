//import Message from './Message';
import {useState} from "react";
import NPC from "./components/NPC"


function App() {
  const [npcIds, setNPCIds] = useState<number[]>([]);
  const addNPC = ()=> setNPCIds([...npcIds, Date.now()]);
  const deleteNPC = (id:number)=>setNPCIds(npcIds.filter((s)=>s !== id))
  
  //HandleSaving
  
  
  return <>
    <h1>NPCs</h1>
    <ul className = "list-group">
      {npcIds.map((id)=> (
        <li className="list-group-item" key={id}>
          <NPC id={id} onDelete={deleteNPC}/>
        </li>
      ))}
    </ul>
    <button type="button" className="btn btn-primary" 
        onClick = {addNPC}>Add NPC</button>
  </>
}



export default App;