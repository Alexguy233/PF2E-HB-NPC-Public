//import Message from './Message';
import ListGroup from "./components/ListGroup"
import LabeledBox from "./components/LabeledBox"

function App() {
  const coreNames = ["HP", "AC", "Speed"]
  const statsNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
  const savesNames = ["FORT", "REFL", "WILL"]

  const core = coreNames.map((val)=> <LabeledBox name = {val} key = {val}/>)
  const stats = statsNames.map((val)=> <LabeledBox name = {val} key = {val}/>)
  const saves = savesNames.map((val)=> <LabeledBox name = {val} key = {val}/>)

  return <>
    <ListGroup name = "Core" values = {core}/> 
    <ListGroup name = "StatLine" values = {stats}/> 
    <ListGroup name = "Saves" values = {saves}/> 
    
  </>
}
//<t /> is self closing syntax. Means <t></t>


export default App;