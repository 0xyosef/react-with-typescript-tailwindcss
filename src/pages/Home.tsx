import React,{useState} from 'react';
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";

export interface Istate {
    people:{
        name:string
        age:number
        url:string
        note?:string
    }[]
}
function Home() {
    const [people,setPeople]=useState<Istate["people"]>([
        {
            name:"Yosef Mahmoud",
            age:20,
            url:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error"
        }
    ])

  return (
    <div className="">
        <div className="text-center m-6 ">
            <h1>People Invited to my Party</h1>
        </div>
        <div className="">
            <Cards people={people}/>
        </div>
        <div className="">
            <AddCard  people={people} setPeople={setPeople}/>
        </div>

    </div>
  );
}

export default Home;
