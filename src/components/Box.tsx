import {useState} from "react";

interface BoxProps{
    name: string;
}
function Spells({name}:BoxProps){
   const [contents, setContents] = useState(""); 
   const [isEditing, setIsEditing]= useState(false);
    return (
        <>
        <h1>{name}</h1>
        {isEditing ? (
        <textarea value = {contents}
        onChange={(t)=>setContents(t.target.value)}
        onBlur={()=>setIsEditing(false)}
        autoFocus
        style={{ width: "80%" }}
        />
        ) : (
            <p onClick = {()=>setIsEditing(true)}>
                {contents || name}
            </p>
        )}
        </>
    )

}

export default Spells;