import { React, useState } from 'react';
import style from './style.module.css';

const Input = ({ setTodos }) => {
    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault(); // ben nggak ngerefresh
        if (title === '') {
            alert('Please add a todo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        } else {
            setTodos((oldArray) => [...oldArray, { id: id, title: title, completed: false }])
            setId(id + 1)
            setTitle('')
        }
    }

    return (
        <div className={style.pill}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" placeholder='Add todo...' value={title} onInput={e => setTitle(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>

    );
}

export default Input;
