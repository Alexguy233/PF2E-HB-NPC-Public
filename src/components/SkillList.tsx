import Skill from "./Skill";
import {useState} from "react";
//interface SkillListProps {
//    skillIds:number[];
//    onDelete: (id:number)=>void;
//}

function SkillList(){
    const [skillIds, setSkillIds] = useState<number[]>([]);
    const addSkill = ()=> setSkillIds([...skillIds, Date.now()]);
    const deleteSkill = (id:number)=>setSkillIds(skillIds.filter((s)=>s !== id))

    return (
        <>
        <h1>Skills</h1>
        <ul className = "list-group list-group-horizontal">
            {skillIds.map((id)=> (
                <li className="list-group-item" key={id}>
                    <Skill id={id} onDelete={deleteSkill}/>
                </li>
            ))}
        </ul>
        <button type="button" className="btn btn-primary" 
        onClick = {addSkill}>Add Skill</button>
        </>
    )
}

export default SkillList;