//import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'Stella';
  const list = ['milk', 'strawberry', 'banana'];

  return (
    <>
      <div className='orange'>{`Hello! ${name}`}</div>
      <h2>Hello</h2>
      <ul>
        {
          list.map((item)=>
          <li>{item}</li>
          )
        }
      </ul>
      <img
        style={{width: '200px', height: '200px'}}
        src='https://images.unsplash.com/photo-1727458880307-fd23422c2528?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='landscape'
      />
    </>
  );
}

export default AppJSX;


// JSX syntax
//when React return JSX, it should be only one tag.
// className
// if we want to use javascript in JSX, use it inside of {}

// When displaying a component in React, you can create it as a function. The function name starts with a capital letter. 
// In order for React to recognize it as a component, you must use JSX syntax in the return value.