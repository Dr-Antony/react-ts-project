import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';



type AdressType = { 
  city?: string,
  country?:string
}
// знак вопроса после ключа означает что ключ не является обязательным.

type UserType = {
  sayHello:(message:string)=> void
  name: string,
  age:number,
  samurai: boolean,
  adress: AdressType
}

let user ={
  sayHello:(message:string)=>{alert(message)},
  name:'Anton',
  age:24,
  samurai:true,
  adress: {
    city: 'Kherson',
    country: 'Ukraine'
  }
}

export type UserTS = typeof user;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
