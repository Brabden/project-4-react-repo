import { useState } from 'react';
import PeopleCard from "./PeopleCard";

const PeopleList = ({ people, onAddPerson, onUpdatePerson, onDeletePerson }) => {
    const [addName, setAddName] = useState('');

    if (!people || people.length === 0) {
        return <p>No people found.</p>
    }

    const handleChange = (e) => {
        setAddName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit e", e);
        console.log("handleSubmit name", addName);
        
        if (addName.trim()) {
            await onAddPerson(addName);
            setAddName('');
        }
    };

    return (
        <>
            <div className="people-list">
                {people.map((person) => (
                    <PeopleCard
                        key={person.id}
                        person={person}
                        onUpdatePerson={onUpdatePerson}
                        onDeletePerson={onDeletePerson}
                    />
                ))}
            </div>
            <div>

                <form className="add-person" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="person-to-add"
                        id="person-to-add"
                        onChange={handleChange}
                        value={addName}
                        placeholder="Add a person..."
                        className="add-person-input"
                    />
                    <button type="submit" className="add-person-btn">Add</button>
                </form>
            </div>
        </>
    );
};

export default PeopleList;