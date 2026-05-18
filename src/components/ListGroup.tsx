//Lets you define the inputs (Props/properties) of a component
interface ListGroupProps<T extends React.ReactNode> {
  name: string;
  values: T[];
}

//Name is name of the ListGroup
function ListGroup<T extends React.ReactNode>({
  name,
  values,
}: ListGroupProps<T>) {
  return (
    <>
      <h2>{name}</h2>
      <ul className="list-group list-group-horizontal">
        {values.map((value, index) => (
          <li
            className="list-group-item py-0"
            
            key={index}
          >
            {value}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
