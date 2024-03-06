// import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(()=> {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

// whenever state changed, App function will execute again.
// when we get data through API, we only want to call API one time.
// you want specific code to be executed only in the first component rendering  time

//useEffect: it is like protector
// 1st arg: Code you want to run only once
// 2nd arg: dependencies. when this variable change, component re-render
