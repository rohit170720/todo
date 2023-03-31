import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { updateItem, deleteItem } from "../features/todo/todoSlice";

const dayDiff =(date)=> {
    const date1 = new Date();
    const date2 = new Date(date);
    const diffTime = date2 - date1
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
return diffDays ; 
}


const checkPriority = (a, b)=>Number(a.priority)-Number(b.priority) ;


const TaskList = () => {
    const todo = useSelector(state=>state.todo);
    const dispatch = useDispatch() ;
    useEffect(()=>{}, [todo.length])

    const [todoData, setTodoData] = useState({
        id:'',
        title:'',
        description:'',
        priority:1, 
        deadline:'', 
        complete:false 
    })

    const handleChange = (e) => {
        
        if(e.target.name==='complete')
        {
            console.log('before', todoData.complete);
        setTodoData({...todoData, complete:!todoData.complete});

         
         
    }else {
        setTodoData({
            ...todoData,
            [e.target.name]:e.target.value  
        })
}
    console.log('after', todoData.complete);
  
    }

   const editModal =(task) => {
    modalChange();
    setTodoData(task);
    console.log('after asigning todo', todoData);


   } 


    const handleSubmit =(e)=> {
        e.preventDefault() ; 
        dispatch(updateItem({...todoData}))
        console.log(todoData);
        modalChange() ;
    }

    const modalChange = ()=>{setOpenModal((prev)=>!prev)} ;

    const [openModal, setOpenModal] = useState(false) ;
    
    return (<>
    <div className="w-full flex flex-col justify-center items-center">
        {
            [...todo].sort(checkPriority).map((item, index) =>(<ListItem key={index} title={item.title} description={item.description} date={item.deadline} complete={item.complete} onDelete={()=>{dispatch(deleteItem(item.id))}} onEdit ={editModal} onCheck ={()=>{dispatch(updateItem({...item, complete:true}))}} task={item} dayDiff={dayDiff} />))
        }

    </div>
    {
            openModal && (<div className="absolute h-full w-full top-0 left-0 flex justify-center items-center z-10 backdrop-blur-sm">
                <div className="relative w-full sm:w-1/2 min-h-1/2 bg-[#8EA7E9] shadow-2xl rounded-xl" >
                    <h3 className="my-2 font-bold">Edit Task</h3>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="mt-10 w-11/12 flex flex-col items-start ">
                        <label htmlFor="title">Title:</label>
                        <input onChange={handleChange} id="title" value={todoData.title} name="title"  type="text" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1" required placeholder="task title"/>
                        </div>

                        <div className="w-11/12 flex flex-col items-start ">
                        <label htmlFor="description">Description:</label>
                        <input onChange={handleChange} id="description" value={todoData.description} name="description" type="text" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1" required placeholder="description"/>
                        </div>

                        <div className="w-11/12 flex flex-col items-start ">
                        <label htmlFor="priority"> Priority:</label>
                       
                        <select onChange={handleChange} value={todoData.priority} name="priority" id="priority" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1">
                            {[1,2,3].map(num=><option key={num} value={num}>{num}</option>)}
                        </select>
                        </div>

                        <div className="w-11/12 flex flex-col items-start ">
                        <label htmlFor="deadline"> Deadline:</label>
                       
                        <input onChange={handleChange} value={todoData.deadline} name="deadline" id="deadline" type="date" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1"  required/>
                        </div>

                        <div className="w-11/12 flex flex-row items-start">
                        <label htmlFor="complete" className="my-2"> completed:</label>
                        <input id="complete" onChange={handleChange} checked={todoData.complete} name="complete" type="checkbox" className="w-auto border rounded mx-2 mt-1 h-[2rem] px-2 py-1" />
                        </div>

                        <input type="submit" value="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-6 rounded"/>
                        

                    </form>

                    <div className="absolute top-2 right-2"><button onClick={modalChange}>&#10006;</button></div>
                </div>
            </div>)
        }
    </>)}

    export default TaskList ;