import AttackRow, { type AttackData } from "./AttackRow";

interface AttackTableProps {
  attacks: AttackData[];
  onChange: (val: AttackData[]) => void;
}

function AttackTable({ attacks, onChange }: AttackTableProps) {
  //const [attacks, setAttacks] = useState<AttackRowProps[]>([]);

  const addAttack = () => {
    onChange([
      ...attacks,
      {
        id: Date.now(),
        name: "",
        attackType: "",
        actions: "",
        range: "",
        toHit: "",
        traits: "",
        damagetype: "",
      },
    ]);
  };

  const deleteAttack = (id: number) => {
    onChange(attacks.filter((a) => a.id !== id));
  };

  return (
    <>
      <h1>Attacks</h1>
      <table
        className="table table-bordered"
        style={{ maxWidth: "800px", minWidth: "700px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Attack Type</th>
            <th>Actions</th>
            <th>Range</th>
            <th>To Hit</th>
            <th>Traits</th>
            <th>Damage & Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {attacks.map((a) => (
            <AttackRow
              key={a.id}
              attack={a}
              onDelete={deleteAttack}
              onChange={(update) =>
                onChange(attacks.map((x) => (x.id === update.id ? update : x)))
              }
            />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addAttack}>
        Add Attack
      </button>
    </>
  );
}
export default AttackTable;
