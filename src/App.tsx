import './App.css';
import { Header } from "./components/Header.tsx";
import { Button } from "./components/Button.tsx";
import { useEffect, useState } from "react";

// Custom hook to manage counter state
const useCounter = () => {
    const [value, setState] = useState(0);
    const increment = () => setState(value + 1);
    return { value, increment };
};

function App() {
    const { value, increment } = useCounter();

    const [state, setState] = useState({ isAdmin: false, userName: 'Bla bla' });
    const { isAdmin } = state;
    const assignAdmin = () => {
        setState({ ...state, isAdmin: true });
    };

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <>
            <Header title={'Counter: '} description={value.toString()} />
            <Button onClick={increment} text={'Press the button'} />
            <h1>Hello, user is {isAdmin ? "super user" : 'simple user'}</h1>
            <button onClick={assignAdmin}>Make Admin</button>
        </>
    );
}

export default App;
