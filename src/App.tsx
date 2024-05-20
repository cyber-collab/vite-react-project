import './App.css'
import {Header} from "./components/Header.tsx";
import {Button} from "./components/Button.tsx";
import {useEffect, useState} from "react";

function App() {
// const [counter, setCounter] = useState(0);

useEffect(()=> {
    // console.log(counter)
})

const useCounter = () => {
        const [value, setState] = useState(0);
        const increment = () => setState(value + 1)
        return {value, increment}
    }

const [state, setState] = useState({isAdmin: false, userName: 'Bla bla'});
const {isAdmin} = state;
const assignAdmin = () => {
    setState({...state, isAdmin: true});
};

  return (
    <>
      <Header title={'Counter: '} description={''} />
        <Button onClick={() => useCounter.increment} text={'Press to button'}/>
        <h1>Hello, user is {isAdmin ? "super user" : 'simple user'}</h1>
        <button onClick={assignAdmin}></button>
    </>
  )
}

export default App
