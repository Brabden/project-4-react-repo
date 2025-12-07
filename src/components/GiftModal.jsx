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
            <button className="p-modal-button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit Gift"}
            </button>

            {isEditing && (
                <form onSubmit={handleSubmit}>
                    <label className="form-header">Gift Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="gift-edit-input"
                    />

                    <label className="form-header">Link:</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className="gift-edit-input"
                    />

                    <label className="form-header">Cost:</label>
                    <input
                        type="text"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                        className="gift-edit-input"
                    />

                    <button type="submit" className="p-modal-button">Save Changes</button>
                </form>
            )}

            <button className="p-modal-button" onClick={handleDelete} style={{ color: "red" }}>
                Delete Gift
            </button>
            <button className="p-modal-button" onClick={onClose}>Close</button>
        </div>
    );
};

export default GiftModal;