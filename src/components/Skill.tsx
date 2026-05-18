import { useState } from "react";

export interface SkillData {
  id: number;
  name: string;
  bonus: string;
}

interface SkillProps {
  skill: SkillData;
  onChange: (updated: SkillData) => void;
  onDelete: (id: number) => void;
}

function Skill({ skill, onChange, onDelete }: SkillProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingBonus, setIsEditingBonus] = useState(false);

  return (
    <>
    <div className="close-button">
      {isEditingName ? (
        <textarea
          value={skill.name}
          onChange={(e) => onChange({ ...skill, name: e.target.value })}
          onBlur={() => setIsEditingName(false)}
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditingName(true)}>{skill.name || "name"}</p>
      )}
        <button
        type="button"
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(skill.id)}
      >
        X
      </button>
      </div>
      {isEditingBonus ? (
        <textarea
          value={skill.bonus}
          onChange={(e) => onChange({ ...skill, bonus: e.target.value })}
          onBlur={() => setIsEditingBonus(false)}
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditingBonus(true)}>{skill.bonus || "0"}</p>
      )}
    </>
  );
}

export default Skill;
