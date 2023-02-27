import React from 'react'
import { useState } from 'react'
import { useAddTodoMutation } from '../redux/apiSlice/apiSlice'

const Form = () => {
const [input,setInput] = useState('')
const [addTodo] = useAddTodoMutation()

const poster = {
    todo:input
}



    return (
        <form onSubmit={(e) => {e.preventDefault(); addTodo(poster);  e.target.reset(); }} className='my-2 flex flex-col gap-2 md:flex-row md:gap-0 md:bg-[#3b3b3b] md:rounded-full'>
            <input onChange={(e)=> setInput(e.target.value)} className='md:w-[300px] py-2 px-4 outline-none rounded-full md:rounded-l-full' placeholder='Add Task Here' type="text" required />
            <input className='bg-emerald-500 py-2 px-4 cursor-pointer rounded-full hover:bg-emerald-500/50' type="submit" value="Add Todo" />
        </form>
    )
}

export default Form