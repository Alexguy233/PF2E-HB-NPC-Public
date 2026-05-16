import AttackRow, {type AttackRowProps} from "./AttackRow";
import {useState} from "react";

function AttackTable(){
const [attacks, setAttacks] = useState<AttackRowProps[]>([]);

const addAttack = () => {
    setAttacks([...attacks, {id: Date.now(), 
        name : "",
        attackType : "",
        actions : "",
        range : "",
        toHit : "",
        traits : "",
        damage : "",
        damageType : ""
    }]);
};

const deleteAttack = (id:number) => {
    setAttacks(attacks.filter((a)=>a.id !==id));
};

return(
    <>
    <h1>Attacks</h1>
    <table className = "table table-bordered">
    <thead>
        <tr>
        <th>Name</th>
            <th>Attack Type</th>
            <th>Actions</th>
            <th>Range</th>
            <th>To Hit</th>
            <th>Traits</th>
            <th>Damage</th>
            <th>Damage Type</th>
            <th></th>
            </tr>
    </thead>
    <tbody>
        {attacks.map((a)=> (
            <AttackRow key ={a.id} attack = {a} onDelete={deleteAttack}/>
        ))}
    </tbody>
    </table>
    <button className = "btn btn-primary" onClick={addAttack}>
    Add Attack
    </button>
    </>
);

}
export default AttackTable;