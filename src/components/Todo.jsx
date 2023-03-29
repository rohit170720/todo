import Form from "./Form";
import ListItem from "./ListItem";
import TaskList from "./TaskList";


const Todo = () => {
    return (
        <>
        <div className="relative bg-white flex flex-col justify-center items-center min-h-hscreen rounded-xl">
           <Form/>
            

            {/* <ul>
                <li className="text-3xl font-bold underline">your tak</li>
            </ul> */}

            <TaskList/>

            

        </div>
        </>
    )

}

export default Todo ; 
