import React, {useState} from 'react';

const App = () =>
{
  const [todo, setTodo] = useState([]);

  function handleClick(event)
  {
    event.preventDefault()
    console.log("-------------------handleClick is clicked-------------------")
    let newTodo = document.getElementById("addTodo").value
    let newTodoObject = {
      id: todo.length,
      text: newTodo,
      completed: false,
    }
    todo.push(newTodoObject)
    setTodo([...todo])
    console.log(todo)
    document.getElementById("addTodo").value = ""
  }

  function deleteTodo(id)
  {
    //event.preventDefault()
    console.log("-------------------Delete button called!-------------------")
    console.log(todo)
    let udatedTodo = todo.filter((tempTodo)=>  tempTodo.id != id)
    console.log("Update Array: "+udatedTodo)
    setTodo(udatedTodo)
    console.log(todo)
  }
  
  return <div>
       <h1>ToDo list</h1>
       <form onSubmit={handleClick}>
         <input type="text" id='addTodo' placeholder='Todo.....'/>
         <button type='submit'>Add To-do</button>
       </form>
       <div>
          {todo.map((tempTodo) =>
            {
              return <div id="todoListID">
                <div id="todoTextId">{tempTodo.text}</div>
                <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
                </div>
            })
          }          
      </div>
    </div>
}
export default App;