// cindy updated

import { useState, useEffect } from 'react';

const GiftModal = ({ isOpen, gift, onUpdateGift, onDeleteGift, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: gift?.name || '',
        link: gift?.link || '',
        cost: gift?.cost || ''
    });

    useEffect(() => {
        if (gift) {
            setFormData({
                name: gift.name,
                link: gift.link,
                cost: gift.cost
            });
        }
    }, [gift]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateGift(gift.id, formData);
        setIsEditing(false);
        onClose();
    };

    const handleDelete = () => {
        onDeleteGift(gift.id);
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="gift-modal">
            <h3>{formData.name}</h3>
            <p>Link: {formData.link}</p>
            <p>Cost: ${formData.cost}</p>

            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit Gift"}
            </button>

            {isEditing && (
                <form onSubmit={handleSubmit}>
                    <label>Gift Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Link:</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                    />

                    <label>Cost:</label>
                    <input
                        type="number"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                    />

                    <button type="submit">Save Changes</button>
                </form>
            )}

            <button onClick={handleDelete} style={{ color: "red" }}>
                Delete Gift
            </button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default GiftModal;