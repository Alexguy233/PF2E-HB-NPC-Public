export interface AttackData {
  id: number;
  name: string;
  attackType: string;
  actions: string;
  range: string;
  toHit: string;
  traits: string;
  damagetype: string;
}

interface AttackRowProps {
  attack: AttackData;
  onChange: (update: AttackData) => void;
  onDelete: (id: number) => void;
}

//all attacks have:

function AttackRow({ attack, onChange, onDelete }: AttackRowProps) {
  const handleChange = (field: keyof AttackData, value: string) => {
    onChange({ ...attack, [field]: value });
  };

  const cell = (field: keyof AttackData, placeholder: string) => (
    <td>
      <textarea
        value={attack[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={placeholder}
        rows={1}
        className="form-control form-control-sm"
        onInput={(e) => {
        const el = e.currentTarget;
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
      }}
      />
    </td>
  );

  return (
    <tr>
      {cell("name", "Attack name")}
      {cell("attackType", "Melee/Ranged")}
      {cell("actions", "1")}
      {cell("range", "5")}
      {cell("toHit", "+11")}
      {cell("traits", "agile, finesse, etc.")}
      {cell("damagetype", "2d6+7 Piercing")}
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(attack.id)}
        >
          ✕
        </button>
      </td>
    </tr>
  );
}

export default AttackRow;
