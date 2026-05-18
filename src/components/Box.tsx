import { useState } from "react";

interface BoxProps {
  name: string;
  value: string;
  onChange: (val: string) => void;
}
function Box({ name, value, onChange }: BoxProps) {
  //const [contents, setContents] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <h1>{name}</h1>
      {isEditing ? (
        <textarea
          value={value}
          onChange={(t) => onChange(t.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
          style={{ width: "80%" }}
        />
      ) : (
        <p onClick={() => setIsEditing(true)}>{value || name}</p>
      )}
    </>
  );
}

export default Box;
