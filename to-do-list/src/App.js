import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState();
  const [toDos, setToDos] = useState([]);
  const onChange = (event) =>  setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); //currentArray = [] initial value in useState
  };
  console.log(toDos);


  return (
    <div>
      <h1>My To do list ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input 
            onChange={onChange} 
            value = {toDo}
            type="text" 
            placeholder="Write your to do..." 
          />
          <button>Add To Do</button>
        </div>
      </form>

      <hr />
      {toDos.map((item, index)=> 
        <li key={index}>{item}</li>
        )
      }
    </div>

  );
}

export default App;



// we cannot modify state directly, always use function
// array.map(callbackFn(currentValue, index, array), thisArg)
// callback function execute all item of array
// Returns a new array without changing the original array

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // output: [1, 4, 9, 16, 25] 








