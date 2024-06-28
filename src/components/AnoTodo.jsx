/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from 'react'
import axios from "axios"

const AnoTodo = () => {
    useEffect(() => {
        fetchTodos();
    }, [])

    const [todos, setTodos] = useState([])
    const [currentUpdateTodo, setCurrentUpdateTodo] = useState({})
    const [usertodo, setUsertodo] = useState("")
    const [addSatet, setAddSatet] = useState(true)

    const handleSubmit = async () => {
        console.log("handelsubmit...................");
        if(addSatet){
            console.log("Add todo..................")
            const posttodo = await axios.post("https://apisaga.vercel.app/todos/createtodo", {todo: usertodo})
            console.log(posttodo);
            fetchTodos();
            setUsertodo("")
        }else{
            console.log("update todo ..................")
            const data = await axios.put(`https://apisaga.vercel.app/todos/updatetodo/${currentUpdateTodo._id}`, {todo: usertodo})
            console.log(data)
            setUsertodo("")
            setAddSatet(true)
            fetchTodos();
        }
    }

    const fetchTodos = async () => {
        const data = await axios.get("https://apisaga.vercel.app/todos/alltodos")
        setTodos(data.data)
    }
    
    const deleteTodos = async (id) => {
        console.log(id);
        const data = await axios.delete(`https://apisaga.vercel.app/todos/deletetodo/${id}`);
        console.log(data);
        fetchTodos();
    }

    // const updateTodo = async(todos) => {
        
    // }
    console.log(todos)



    return (
        <>

            <div className="h-100 w-[100vh] flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest text-black">Todo List</h1>
                        <div className="flex mt-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value={usertodo} onChange={e => setUsertodo(e.target.value)}/>
                            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={() => handleSubmit()}>{addSatet ? "Add" : "Update"}</button>
                        </div>
                    </div>
                    <div>
                        {
                            todos.map((todos) => {
                                return (
                                    <div className="flex mb-4 items-center" key={todos?._id}>
                                        <p className="w-full text-grey-darkest text-black">{todos?.todo}</p>
                                        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green" onClick={()=> {setCurrentUpdateTodo(todos), setAddSatet(false), setUsertodo(todos?.todo)}}>Edit</button>
                                        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => deleteTodos(todos?._id)}>Remove</button>
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

export default AnoTodo