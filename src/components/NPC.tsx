//import Message from './Message';
import {useState} from "react";
import ListGroup from "./ListGroup"
import LabeledBox from "./LabeledBox"
//import Skill from "./components/Skill";
import SkillList from "./SkillList"
import AttackTable from "./AttackTable"
import Box from "./Box"

interface NPCProps{
    id:number;
    onDelete: (id:number) => void;
}

function NPC({id, onDelete}:NPCProps) {
  const coreNames = ["HP", "AC", "Speed"]
  const statsNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
  const savesNames = ["FORT", "REFL", "WILL"]

  const core = coreNames.map((val)=> <LabeledBox name = {val} key = {val}/>)
  const stats = statsNames.map((val)=> <LabeledBox name = {val} key = {val}/>)
  const saves = savesNames.map((val)=> <LabeledBox name = {val} key = {val}/>)

  const [name, setName] = useState(""); 
  const [isEditing, setIsEditing]= useState(false);
  return <>

    {isEditing ? (
        <textarea value = {name}
        onChange={(t)=>setName(t.target.value)}
        onBlur={()=>setIsEditing(false)}
        autoFocus/>
    ) : (<h1 onClick={()=>setIsEditing(true)}>
            {name||"Name"}
        </h1>)

    }

    <ListGroup name = "Core" values = {core}/> 
    <ListGroup name = "StatLine" values = {stats}/> 
    <ListGroup name = "Saves" values = {saves}/> 
    <SkillList/>
    <AttackTable/>
    <Box name= "Spells"/>
    <Box name= "Traits"/>

    <button type="button" className="btn btn-sm btn-danger" onClick = {()=>onDelete(id)}>
        X
    </button>
  </>
}



export default NPC;