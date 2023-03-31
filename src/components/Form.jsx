import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/todo/todoSlice";


const Form = () => {

    function generateUID() {
        // I generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        firstPart = ("000" + firstPart.toString(36)).slice(-3);
        secondPart = ("000" + secondPart.toString(36)).slice(-3);
        return firstPart + secondPart;
    }

    const todo = useSelector((state)=>state.todo);
    const dispatch = useDispatch() ;

    const [todoData, setTodoData] = useState({
        title:'',
        description:'',
        priority:1, 
        deadline:''
    })

    const handleChange = (e) => {
        setTodoData({
            ...todoData,
            [e.target.name]:e.target.value  
        })
    }


    const handleSubmit =(e)=> {
        e.preventDefault() ; 
        const uid = generateUID() ;
        dispatch(addItem({...todoData,id:uid, complete:false}))
        modalChange() ;
    }

    const modalChange = ()=>{setOpenModal((prev)=>!prev)} ;

    const [openModal, setOpenModal] = useState(false) ;

    return( <>
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded my-6" onClick={modalChange}>
            Create new Task+
        </button>

        {
            openModal && (<div className="absolute h-full w-full top-0 left-0 flex justify-center items-center z-10 backdrop-blur-sm">
                <div className="relative w-full  sm:w-1/2 min-h-1/2 bg-[#B3FFAE] shadow-2xl rounded-xl" >
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="mt-10 w-11/12 flex flex-col items-start ">
                        <label htmlFor="title">Title:</label>
                        <input onChange={handleChange}id="title" name="title" type="text" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1" required placeholder="task title"/>
                        </div>

                        <div className="w-11/12 flex flex-col items-start ">
                        <label htmlFor="description">Description:</label>
                        <input onChange={handleChange}id="description" name="description" type="text" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1" required placeholder="description"/>
                        </div>

                        <div className="w-11/12 flex flex-col items-start ">
                        <label htmlFor="priority"> Priority:</label>
                       
                        <select onChange={handleChange}name="priority" id="priority" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1">
                            {[1,2,3].map(num=><option key={num} value={num}>{num}</option>)}
                        </select>
                        </div>

                        <div className="w-11/12 flex flex-col items-start ">
                        <label htmlFor="deadline"> Deadline:</label>
                       
                        <input onChange={handleChange}name="deadline" id="deadline" type="date" className="w-full border rounded my-2 mt-1 h-[40px] px-2 py-1"  required/>
                        </div>

                        <input type="submit" value="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-6 rounded"/>
                        

                    </form>

                    <div className="absolute top-2 right-2"><button onClick={modalChange}>&#10006;</button></div>
                </div>
            </div>)
        }
    </div>
    </>)
    
}

export default Form ; 