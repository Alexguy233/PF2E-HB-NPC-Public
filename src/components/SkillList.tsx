import Skill from "./Skill";

interface SkillListProps {
    skillIds:number[];
    onDelete: (id:number)=>void;
}

function SkillList({skillIds, onDelete}:SkillListProps){
    return (
        <>
        <h1>Skills</h1>
        <ul className = "list-group list-group-horizontal">
            {skillIds.map((id)=> (
                <li className="list-group-item" key={id}>
                    <Skill id={id} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
        </>
    )
}

export default SkillList;