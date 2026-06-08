import React, { useEffect, useRef, useState } from 'react'
import { TbCheckupList } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import ToDoItems from './ToDoItems';

function ToDo() {
    const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const data = useRef();
    const addTodo = () => {
        const inputText = data.current.value.trim();
        if (inputText == "") {
            return null;
        }

        const newTodos = {
            id: todos.length + 1,
            text: inputText,
            isComplete: false
        };
        setTodos((prev => [...prev, newTodos]));
        data.current.value = "";
    };
    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            )
        );
    };
    const deleteTodo = (id) => {
        setTodos(prev =>
            prev.filter(todo => todo.id !== id)
        );
    };
    useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)), [todos] });

    return (
        <div className="place-self-center bg-[#cce3f0] h-[450px] w-[600px] p-10 flex flex-col gap-5">
            <h1 className="text-3xl font-bold tracking-widest flex gap-1 items-center "> <TbCheckupList /> ToDo App </h1>
            <div className=' flex items-center bg-[#3B7597] rounded-full p-2 '>
                <input ref={data} className='outline-none place border-none bg-transparent flex-1' placeholder='Yeni bir görev ekle' />
                <CiSquarePlus onClick={addTodo} className='size-8 hover:scale-75 transition-all  ' />
            </div>

            <div className=' mt-5 '>
                {
                    todos.map((todo) => <ToDoItems key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
                }
            </div>
        </div>

    )
}

export default ToDo