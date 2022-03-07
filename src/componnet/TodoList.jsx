import React from 'react';
import { useState } from 'react';
import Form from './Form';
import List from './List';
import "./TodoList.css"
const Todolist = () => {
    
    const [todos, setTodos] = useState([]);
   
    function handleToDoAdd(inputText){
        alert("add");
        if(!inputText){
            return
        }
        const todo = {
            id: Math.random(),
            value: inputText,
            isChecked: false,
            isEditMode:false
        }
        setTodos([...todos, todo]);
        
        console.log(todos)
    }
    function handleDeleteTodo(id){
        const filterTodos=todos.filter(item=>{
          return item.id !== id
       })
       setTodos(filterTodos);
    }
    function handleEditTodo(id){
        setTodos(todos.map(item=>{
            if(id ===item.id){
                return{...item,isEditMode:!item.isEditMode}
            }else{
                return item;
            }
        }))
        
    }
    function handleComletedChange(id){
       setTodos(  todos.map(item=>{
            if(item.id === id){
                
               return {...item,isChecked:!item.isChecked}              

            }
            return item
        }));
        
    }
    function handleUpdeate(id){
    //    alert("update");
    
    }
    return (
        <div>
            
            <div>
            <h1></h1>
           <div>
          <Form  onSubmit={handleToDoAdd} />
            <List todos = {todos}  onCompleted={handleComletedChange} onEdit={handleEditTodo}
            onDelete={handleDeleteTodo} onUpdate={handleUpdeate} />
           </div>
           
           </div>
        </div>
    );
}
export default Todolist;