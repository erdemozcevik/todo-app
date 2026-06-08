import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
//<FaRegCheckCircle />
function ToDoItems({ todo, toggleTodo, deleteTodo }) {
    return (
        <div onClick={() => toggleTodo(todo.id)} className=' w-full  flex items-center p-2 justify-between gap-2 border-b border-[#6FD1D7] cursor-pointer '>
            {todo.isComplete ? <FaRegCheckCircle className=' size-5 text-[#3B7597]' /> : <FaRegCircle className=' size-5 text-[#3B7597]' />}
            <p className={`flex-1 ${todo.isComplete ? "line-through text-gray-500" : ""}`}>{todo.text}</p>
            <FaRegTrashCan onClick={() => deleteTodo(todo.id)} className=' size-5 text-[#cb2c2c] hover:scale-110 transition-all ' />
        </div>
    )
}

export default ToDoItems