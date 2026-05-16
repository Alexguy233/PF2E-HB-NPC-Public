import {useState} from "react";

interface SkillProps{
    id:number;
    onDelete: (id:number) => void;
}

function Skill({id, onDelete}:SkillProps){
const [bonus, setBonus] = useState("");
const [isEditingName, setIsEditingName] = useState(false);
const [name, setName] = useState("");
const [isEditingBonus, setIsEditingBonus] = useState(false);

return(
    <>
    {isEditingName ? (
        <textarea value = {name}
        onChange={(e)=>setName(e.target.value)}
        onBlur={()=> setIsEditingName(false)}
        autoFocus
        />
    ) : (
        <p onClick = {()=> setIsEditingName(true)}>
            {name || "name"}
        </p>
    )}
    {isEditingBonus ? (
        <textarea value = {bonus}
        onChange={(e)=>setBonus(e.target.value)}
        onBlur={()=> setIsEditingBonus(false)}
        autoFocus
        />
    ) : (
        <p onClick = {()=> setIsEditingBonus(true)}>
            {bonus || "0"}
        </p> )
    }
    <button type="button" className="btn btn-sm btn-danger" onClick = {()=>onDelete(id)}>
        X
    </button>
    
    </>
);

}

export default Skill;