import Skill, { type SkillData } from "./Skill";

interface SkillListProps {
  skills: SkillData[];
  onChange: (skills: SkillData[]) => void;
}

function SkillList({ skills, onChange }: SkillListProps) {
  //const [skillIds, setSkillIds] = useState<number[]>([]);
  const addSkill = () =>
    onChange([...skills, { id: Date.now(), name: "", bonus: "" }]);
  const deleteSkill = (id: number) =>
    onChange(skills.filter((s) => s.id !== id));
  const updateSkill = (update: SkillData) =>
    onChange(skills.map((s) => (s.id === update.id ? update : s)));
  return (
    <>
      <h1>Skills</h1>
      <ul className="list-group list-group-horizontal">
        {skills.map((s) => (
          <li className="list-group-item" key={s.id}>
            <Skill skill={s} onChange={updateSkill} onDelete={deleteSkill} />
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary" onClick={addSkill}>
        Add Skill
      </button>
    </>
  );
}

export default SkillList;
