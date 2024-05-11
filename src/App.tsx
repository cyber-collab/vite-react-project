import './App.css'
import {Header} from "./component/Header.tsx";
import {Button} from "./component/Button.tsx";
import {useState} from "react";

function App() {
const [counter, setCounter] = useState(0);

  return (
    <>
      <Header title={'Counter: ' + counter} description={''} />
        <Button onClick={() => setCounter(counter + 1)} text={'Press to button'}/>
    </>
  )
}

export default App
