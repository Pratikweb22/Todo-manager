import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"message",
            completed:false,
        }
    ],
    addTodo:(todo) => {},
    updateTodo:(id,todo) =>{},
    deleteTodo:(id) => {},
    toggleComplete : (id) => {}

})
   
 /* if you declare any context , you need to return  use
  context with the declared context , to know about the object we are going to use*/ 
export const useTodo =() =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider