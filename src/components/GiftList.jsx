import { useState, useEffect } from 'react'
import axios from 'axios';
import GiftCard from "./GiftCard";

const GiftList = ({ gifts, onUpdateGift, onDeleteGift }) => { // cindy updated, added onupdate/ondelete
if (!gifts || gifts.length === 0) {
    return <p>No gifts found</p>
}
    return (
        <div className="gift-list">
            {gifts.map((gift) => (
            <GiftCard 
                key={gift.id} /* cindy updated */
                gift={gift}
                onUpdateGift={onUpdateGift} /* cindy added */
                onDeleteGift={onDeleteGift} /* cindy added */
            />
            ))}
        </div>
    );
};

export default GiftList;