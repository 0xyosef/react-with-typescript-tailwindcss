import React, {useState} from "react";
import {Istate as Props} from "../Home"

interface IProps{
    people:Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}
const AddCard :React.FC<IProps> = ({people,setPeople}) => {
    const [input,setInput]=useState({
        name:"",
        age:"",
        img:"",
        note:""
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
            setInput({
                ...input,
                [e.target.name]:e.target.value
            })
    }

   const handleClick = ():void => {
           if (     
                !input.name || !input.age || !input.img 
              ){
                   return
               }
           setPeople([
               ...people,
               {
                   name:input.name,
                   age:parseInt(input.age),
                   url:input.img,
                   note:input.note
               }
           ]);
           setInput({
               name:"",
               age:"",
               img:"",
               note:""
           })
   }

    return(
        <>
           <div className=" mt-3 flex flex-col  w-80  m-20 m-auto ">
               <input
                 type="text"
                 placeholder="Name"
                 className="p-2 m-1 m-auto border border-b-gray-600"
                 value={input.name}
                 onChange={handleChange}
                 name="name"
               />
               <input
                   type="number"
                   placeholder="Age"
                   className="p-2 m-1 m-auto border border-b-gray-600"
                   value={input.age}
                   onChange={handleChange}
                   name="age"
               />
               <input
                   type="text"
                   placeholder="url"
                   className="p-2 m-1 m-auto border border-b-gray-600"
                   value={input.img}
                   onChange={handleChange}
                   name="img"
               />
               <textarea
                   placeholder="Note"
                   className="p-2 m-1 m-auto mb-3 border border-b-gray-600"
                   value={input.note}
                   onChange={handleChange}
                   name="note"
               />
               <button className="bg-teal-800 rounded-md text-amber-50 mb-3 "
               onClick={handleClick}>
                   Add to List
               </button>
           </div>
        </>
    )
}
export default AddCard;
