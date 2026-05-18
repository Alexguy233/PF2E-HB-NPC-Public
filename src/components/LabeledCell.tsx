import { useState } from "react";

interface LabeledCellProps {
  name: string;
  value: string;
  onChange: (val: string) => void;
}

function LabeledCell({ name, value, onChange }: LabeledCellProps) {
  //every element has an onClick={} you can set to an arrow function.

  //value is text usually for this component.

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div>{name}</div>
      {isEditing ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>{value || "0"}</div>
      )}
    </>
  );
}

export default LabeledCell;
