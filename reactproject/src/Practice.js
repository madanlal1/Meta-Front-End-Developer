import {Name} from './App';
import { useContext } from 'react';
const Practice = () => {

    const name = useContext(Name);

    return (
        <h1>My name is {name}.</h1>
    )
}

export default Practice; 

