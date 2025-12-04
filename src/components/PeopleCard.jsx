import { useState } from "react";
import PeopleModal from "./PeopleModal"

const PeopleCard = ({ person, onUpdatePerson, onDeletePerson }) => {
const [modalOpen,setModalOpen] = useState(false);    
    return (
    
    <div className="people-card" >
        <h3 onClick={()=>{setModalOpen(!modalOpen)}}>{person.name}</h3>
        <PeopleModal 
            isOpen={modalOpen}  
            person={person}
            onUpdatePerson={onUpdatePerson}
            onDeletePerson={onDeletePerson}
            onClose={() => setModalOpen(false)}
        />
    </div>
    )
}; 

export default PeopleCard;