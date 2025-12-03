import GiftCard from "./GiftCard";

const GiftList = ({ gifts }) => {
    return (
        <div className="gift-list">
            {gifts.map((gift) => (
                <GiftCard key={gift.name} gift={gifts} />
            ))}
        </div>
    );
};

export default GiftList;