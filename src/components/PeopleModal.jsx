import React, { useState, useEffect } from 'react';
const PeopleModal=({ isOpen, person, onUpdatePerson, onDeletePerson, onClose }) => {
const [isEditing, setIsEditing] = useState(false)
const [name, setName] = useState(person.name);

useEffect(() => {
    setName(person.name);
}, [person]);

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
    <h3>{name}</h3>
<button onClick={() => setIsEditing(!isEditing)}>
    {isEditing ? "Cancel" : "Edit Name"}
</button>
{isEditing && (
<form onSubmit={handleSubmit}>
<input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
<button type="submit">Save</button>
</form>
)}

<button onClick={handleDelete} style={{ color: "red" }}>Delete</button>
<button onClick={onClose}>Close</button>
</div>
    );
};

export default PeopleModal