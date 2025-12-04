import GiftCard from "./GiftCard";

const GiftList = ({ gifts }) => {
if (!gifts || gifts.length === 0) {
    return <p>No gifts found.</p>
}
    return (
        <div className="gift-list">
            {gifts.map((gift) => (
                <GiftCard key={gift.name} gift={gift} />
            ))}
        </div>
    );
};

export default GiftList;