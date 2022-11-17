import React, {useState} from "react";
import {Istate as IProps} from "../Home"


const Cards:React.FC<IProps> = ({people}) => {
    const renderCard = ():JSX.Element[]=>{
        return people.map((person) =>{
             return (
                <>
                   <div className="grid max-w-md py-3 px-9 bg-white shadow-xl rounded-lg mt-14 ">
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img className="w-20 h-20 rounded-full border-2 border-indigo-500" src={person.url}/>
                        </div>
                       <div>
                           <h2 className="text-gray-800 text-3xl font-semibold ">{person.name}</h2>
                           <p className="ml-2 mt-2 text-gray-600">{person.note}</p>
                           <p className="ml-2 mt-1 text-gray-600">years old : <span className="font-bold"> {person.age}</span></p>
                       </div>
                   </div>
                </>
             )
        })
    }
    return (
      <>
          <div className="grid justify-center ">
              {renderCard()}
          </div>
      </>
    )
}
export default Cards;
