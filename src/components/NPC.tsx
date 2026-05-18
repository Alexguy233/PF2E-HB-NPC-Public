//import Message from './Message';
import { useState } from "react";
import ListGroup from "./ListGroup";
import LabeledCell from "./LabeledCell";
//import Skill from "./components/Skill";
import { type SkillData } from "./Skill";
import { type AttackData } from "./AttackRow";
import SkillList from "./SkillList";
import AttackTable from "./AttackTable";
import Box from "./Box";

interface NPCProps {
  id: number;
  onDelete: (id: number) => void;
}

function NPC({ id, onDelete }: NPCProps) {
  const coreNames = ["HP", "AC", "Speed"];
  const statsNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  const savesNames = ["FORT", "REFL", "WILL"];

  //Lifted States from children to allow saving
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");

  const [attacks, setAttacks] = useState<AttackData[]>([]);
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [spells, setSpells] = useState("");
  const [traits, setTraits] = useState("");
  const [coreVals, setCoreVals] = useState<Record<string, string>>({});
  const [statVals, setStatVals] = useState<Record<string, string>>({});
  const [savesVals, setSavesVals] = useState<Record<string, string>>({});

  const core = coreNames.map((val) => (
    <LabeledCell
      name={val}
      key={val}
      value={coreVals[val] ?? ""}
      onChange={(v: string) => setCoreVals((prev) => ({ ...prev, [val]: v }))}
    />
  ));

  const stats = statsNames.map((val) => (
    <LabeledCell
      name={val}
      key={val}
      value={statVals[val] ?? ""}
      onChange={(v: string) => setStatVals((prev) => ({ ...prev, [val]: v }))}
    />
  ));

  const saves = savesNames.map((val) => (
    <LabeledCell
      name={val}
      key={val}
      value={savesVals[val] ?? ""}
      onChange={(v: string) => setSavesVals((prev) => ({ ...prev, [val]: v }))}
    />
  ));

  //Save Handler
  const handleSave = () => {
    const data = {
      name,
      attacks,
      skills,
      spells,
      traits,
      coreVals,
      statVals,
      savesVals,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = '${name || "npc"}.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const data = JSON.parse(ev.target?.result as string);
      setName(data.name ?? "");
      setAttacks(data.attacks ?? []);
      setSkills(data.skills ?? []);
      setSpells(data.spells ?? "");
      setTraits(data.traits ?? "");
      setCoreVals(data.coreVals ?? {});
      setStatVals(data.statVals ?? {});
      setSavesVals(data.savesVals ?? {});
    };
    reader.readAsText(file);
  };

  return (
    <>
      {isEditing ? (
        <textarea
          value={name}
          onChange={(t) => setName(t.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <h3 onClick={() => setIsEditing(true)}>{name || "Name"}</h3>
      )}

      <ListGroup name="Core" values={core} />
      <ListGroup name="StatLine" values={stats} />
      <ListGroup name="Saves" values={saves} />
      <SkillList skills={skills} onChange={setSkills} />
      <AttackTable attacks={attacks} onChange={setAttacks} />
      <Box name="Spells" value={spells} onChange={setSpells} />
      <Box name="Traits" value={traits} onChange={setTraits} />

      <button onClick={handleSave}>Save to JSON</button>
      <input type="file" accept=".json" onChange={handleLoad} />
      <button
        type="button"
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(id)}
      >
        X
      </button>
    </>
  );
}

export default NPC;
