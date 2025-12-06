import React, { useState, useEffect } from 'react';
import axios from 'axios';  // cindy added
const PeopleModal=({ isOpen, person, onUpdatePerson, onDeletePerson, onClose }) => {
const [isEditing, setIsEditing] = useState(false)
const [name, setName] = useState(person.name);
const [showGifts, setShowGifts] = useState(false);  // cindy added
const [gifts, setGifts] = useState([]);  // cindy added

useEffect(() => {
    setName(person.name);
}, [person]);


// cindy added
    useEffect(() => {
    if (showGifts) {
        axios.get(`http://127.0.0.1:8000/api/people/${person.id}/gifts/`)
            .then(res => setGifts(res.data));
    }
}, [showGifts]);
     // cindy added end

const handleSubmit =(e) => {
    e.preventDefault();
    onUpdatePerson(person.id, name);
    setIsEditing(false);
    onClose();
};

const handleDelete = () => {
    onDeletePerson(person.id);
    onClose();
};

if (!isOpen) return null;

return (
    <div className="people-modal">
<button className="p-modal-button" onClick={() => setIsEditing(!isEditing)}>
    {isEditing ? "Cancel" : "Edit Name"}
</button>

{/* cindy added - View Gifts button */}
<button className="add-btn" onClick={() => setShowGifts(!showGifts)}>
    {showGifts ? "Hide Gifts" : "View Gifts"}
</button>
{isEditing && (
<form className="edit-person" onSubmit={handleSubmit}>
<input type="text" className="edit-person-input" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
<button className="p-modal-button" type="submit">Save</button>
</form>
)}
{showGifts && (
    <div>
        <h4>Gifts for {name}</h4>
        {gifts.length === 0 ? (
            <p>No gifts yet</p>
        ) : (
            gifts.map((gift) => (
                <div key={gift.id}>
                    <p><strong>{gift.name}</strong></p>
                    <p>Link: {gift.link}</p>
                    <p>Cost: ${gift.cost}</p>
                </div>
            ))
        )}
    </div>
)}

<button className="p-modal-button" onClick={handleDelete} style={{ color: "red" }}>Delete</button>
<button className="p-modal-button" onClick={onClose}>Close</button>
</div>
    );
};

export default PeopleModal