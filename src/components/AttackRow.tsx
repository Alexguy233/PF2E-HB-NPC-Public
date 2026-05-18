import {useState} from "react";

export interface AttackRowProps {
  id: number;
  name: string;
  attackType: string;
  actions: string;
  range: string;
  toHit: string;
  traits: string;
  damagetype: string;
}

//all attacks have:

function AttackRow({attack, onDelete} : {attack:AttackRowProps,onDelete: (id:number)=>void} ){
    const [fields, setFields] = useState(attack);

    const handleChange = (field:keyof AttackRowProps, value:string)=>{
        setFields({...fields, [field]:value});
    };

    const cell = (field: keyof AttackRowProps, placeholder: string) => (
    <td>
      <input
        value={fields[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={placeholder}
        className="form-control form-control-sm"
      />
    </td>
  );
    
    return(
        <tr>
      {cell("name", "Attack name")}
      {cell("attackType", "Melee/Ranged")}
      {cell("actions", "1")}
      {cell("range", "5")}
      {cell("toHit", "+11")}
      {cell("traits", "agile, finesse, etc.")}
      {cell("damagetype", "2d6+7 Piercing")}
      <td>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(attack.id)}>
          ✕
        </button>
      </td>
    </tr>
    );
}


export default AttackRow;