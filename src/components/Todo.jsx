import React from 'react'
import { useDeleteTodoMutation } from '../redux/apiSlice/apiSlice'

const Todo = (props) => {
    
 const [deleteTodo] = useDeleteTodoMutation()

    return (
        <li className='bg-emerald-900 py-2 px-4 flex justify-start items-center gap-2 w-[250px] md:w-[400px] rounded-full cursor-pointer ' key={props.id}>
            <input type="checkbox" />
            <span>{props.task}</span>
            <p className='ml-auto flex gap-4 cursor-pointer'  ><i className="fa-solid fa-pencil fa-lg"></i><i onClick={() => {deleteTodo(props.ide)}} className="fa-solid fa-trash fa-lg"></i></p>
        </li>
    )
}

export default Todo