import React, { useEffect, useState } from 'react'
import Todo from './todo'
import { useGetTodosQuery } from '../redux/apiSlice/apiSlice'
import Loader from "react-js-loader";

const TodoList = () => {

    const [todoArr, setTodoArr] = useState([])

    const { data: todos, isSuccess, isLoading, isError } = useGetTodosQuery()

    useEffect(() => {
        isSuccess ? setTodoArr(todos) : ''
    })

    console.log(todos)
    return (
        <>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-semibold py-4'>All Todo's</h2>
                <span className='border border-emerald-500 py-1 px-2 text-sm'>{todoArr?.length}</span>
            </div>
            <ul className='flex flex-col justify-center items-center gap-4'>
                {
                    todoArr?.map((todo) => {
                        return (
                            <Todo task={todo.todo} ide={todo._id} key={todo._id} />
                        )
                    })
                }
                {
                    isLoading ? <Loader type="spinner-default" bgColor={"#FFFFFF"} title={"spinner-default"} color={'#FFFFFF'} size={100} /> : ''
                }
                <li className='bg-emerald-900 py-2 px-4 rounded-full cursor-pointer hover:bg-emerald-900/50'>Clear All</li>
            </ul>
        </>
    )
}

export default TodoList