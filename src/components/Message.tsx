//Function based components

//PascalCasing. Capitalize the first letter of each word
function Message() {
    const name = 'Alex';
    if (name)
        return <h1>Hello {name}</h1>; //you can write any js expression in {} that makess a value
    else
        return <h1>Hello Person</h1>;
}

export default Message; //export as default object from this component