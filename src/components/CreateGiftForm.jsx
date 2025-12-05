// Create form for gifts - Cindy
import { useState } from 'react';
import axios from 'axios';

const CreateGiftForm = ({ personId, onGiftCreated }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/gifts', {
            name: name,
            link: link,
            cost: cost,
            person: personId
        });
        // Clear form
        setName('');
        setLink('');
        setCost('');
        onGiftCreated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add New Gift</h4>
            
            <input
                type="text"
                placeholder="Gift Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            
            <input
                type="text"
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            
            <input
                type="number"
                placeholder="Cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            
            <button type="submit">Add Gift</button>
        </form>
    );
};

export default CreateGiftForm;