import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/',
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: `/`,
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
        body: JSON.stringify(id),
      }),
      invalidatesTags: ['Todos']
    })
  })
})

  export const { useGetTodosQuery, useDeleteTodoMutation, useAddTodoMutation } = apiSlice