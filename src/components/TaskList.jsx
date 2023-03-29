import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { updateItem, deleteItem } from "../features/todo/todoSlice";
const TaskList = () => {
    const todo = useSelector(state=>state.todo);
    const dispatch = useDispatch() ;
    useEffect(()=>{}, [todo.length])
    
    return (<>
    <div className="w-full flex flex-col justify-center items-center">
        {
            todo && todo.map((item, index) =>(<ListItem key={index} title={item.title} description={item.description} date={item.deadline} complete={item.complete} onDelete={()=>{dispatch(deleteItem(item.id))}} onEdit ={()=>{}} onCheck ={()=>{dispatch(updateItem({...item, complete:true}))}} />))
        }

    </div>
    </>)}

    export default TaskList ;