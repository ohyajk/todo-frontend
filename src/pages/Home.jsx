import React from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center py-2 w-11/12 md:w-2/3'>
      <Form />
      <div>
        <TodoList />
      </div>
    </div>
  )
}

export default Home