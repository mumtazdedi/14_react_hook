import React from 'react';
import style from './style.module.css';


const Todo = ({ todo, handleDelete, handleCheck }) => {

    return (
        <div className={style.list}>
            <div className='form-check d-flex justify-content-between container'>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" readOnly checked={todo.completed} onClick={() => handleCheck(todo.id)} />
                    {todo.completed ? <del className={style.fontChecked}>{todo.title}</del> : <span className={style.font}>{todo.title}</span>}
                </label>
                <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Todo;
