import {useState} from "react";

interface LabeledBoxProps {
  name: string;
}

function LabeledBox({name}:LabeledBoxProps){
//every element has an onClick={} you can set to an arrow function.
const [text, setText] = useState("");
const [isEditing, setIsEditing] = useState(false);


return(
    <>
    <p>{name}</p>
    {isEditing ? (
        <textarea value = {text}
        onChange={(e)=> setText(e.target.value)}
        onBlur={()=> setIsEditing(false)}
        autoFocus
        />
    ) : (
        <p onClick = {()=> setIsEditing(true)}>
            {text || "0"}
        </p>
    )
    }
    </>
);
}

export default LabeledBox;