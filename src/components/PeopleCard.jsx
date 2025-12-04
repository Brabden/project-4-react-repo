import { useState } from "react";
import PeopleModal from "./PeopleModal"



const PeopleCard = ({ person }) => {
const [modalOpen,setModalOpen] =useState(false);    
    return (
    
    <div className="people-card" >
        <h3 onClick={()=>{setModalOpen(!modalOpen)}}>{person.name}</h3>
        <PeopleModal isOpen={modalOpen}  person={person}/>

    </div>



)

}; 
export default PeopleCard;