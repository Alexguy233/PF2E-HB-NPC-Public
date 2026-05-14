//import Message from './Message';
import {useState} from "react";
import ListGroup from "./components/ListGroup"
import LabeledBox from "./components/LabeledBox"
import Skill from "./components/Skill";
import SkillList from "./components/SkillList"

function App() {
  const coreNames = ["HP", "AC", "Speed"]
  const statsNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
  const savesNames = ["FORT", "REFL", "WILL"]

  const core = coreNames.map((val)=> <LabeledBox name = {val} key = {val}/>)
  const stats = statsNames.map((val)=> <LabeledBox name = {val} key = {val}/>)
  const saves = savesNames.map((val)=> <LabeledBox name = {val} key = {val}/>)

  const [skillIds, setSkillIds] = useState<number[]>([]);


  const addSkill = ()=> setSkillIds([...skillIds, Date.now()]);
  const deleteSkill = (id:number)=>setSkillIds(skillIds.filter((s)=>s !== id))

  const skills = skillIds.map((id)=> (
    <Skill key={id} id={id} onDelete={deleteSkill}/>
  ));

  return <>
    <ListGroup name = "Core" values = {core}/> 
    <ListGroup name = "StatLine" values = {stats}/> 
    <ListGroup name = "Saves" values = {saves}/> 
    <SkillList skillIds= {skillIds} onDelete = {deleteSkill}/>
    <button type="button" className="btn" 
    onClick = {addSkill}>Add Skill</button>
    
  </>
}
//<t /> is self closing syntax. Means <t></t>


export default App;