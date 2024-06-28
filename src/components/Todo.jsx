/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from 'react'
import axios from "axios"

const Todo = () => {
    useEffect(() => {
        fetchTodos();
    }, [])

    const [todos, setTodos] = useState([])
    const [usertodo, setUsertodo] = useState("")

    const handleSubmit = async () => {
        const posttodo = await axios.post("https://apisaga.vercel.app/todos/createtodo", {todo: usertodo})
    }
    const fetchTodos = async () => {
        const data = await axios.get("https://apisaga.vercel.app/todos/alltodos")
        setTodos(data.data)
    }
    console.log(todos)
    return (
        <>
            <div className="h-100 w-[100vh] flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest text-black">Todo List</h1>
                        <div className="flex mt-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
                        </div>
                    </div>
                    <div>
                        {
                            todos.map((todos) => {
                                return (
                                    <div className="flex mb-4 items-center" key={todos?._id}>
                                        <p className="w-full text-grey-darkest text-black">{todos?.todo}</p>
                                        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Edit</button>
                                        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo