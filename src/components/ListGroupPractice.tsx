import {useState} from "react";

//Lets you define the inputs (Props/properties) of a component
interface ListGroupPracticeProps<T extends React.ReactNode> {
  name: string;
  values: T[];
}

function ListGroupPractice<T extends React.ReactNode>({name, values}:ListGroupPracticeProps<T>) {
  //the {if} is ethern null, doesnt exist, prints as normal, or shows a warning message.
  //const noValMessage = values.length === 0 ? <p>No Values Found</p> : null;
  //Dumb stupid magic way of ignoring turnary and null: 
  const noValMessage = values.length === 0 && <p>No Values Found</p>;

  //const getMessage = () =>{ //function version that allows you to pass variables if you want
  //  return values.length === 0 ? <p>No Values Found</p> : null;//without inputs, non function is better
  //}
  //handle is general developer syntatx for functions handling events
  //const handleClick = (event:React.MouseEvent)=>console.log(event);


  function handleClick(index:number){
    return selectedIndex === index ? setSelectedIndex(-1) : setSelectedIndex(index)
  }

  // Hook. a function that lets us tap into react stuff.
  //useState means this component has data that can change over
  //time.
  
  //const selectedIndex = useState(-1); //returns array, -1 is initial val
  //arr[0] //variable (selectedIndex)
  //arr[1] //Updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
    <h1>{name}</h1>
    {noValMessage}
    <ul className="list-group list-group-horizontal" >
      {values.map((value, index) => (
        <li className={selectedIndex===index ? 'list-group-item active' : 'list-group-item'}
        key = {index}
        onClick = {()=>(handleClick(index))}
        >
           {value} </li>
      ))}
    </ul>
    </>
  );
}
export default ListGroupPractice;
