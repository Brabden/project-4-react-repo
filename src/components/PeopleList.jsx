import PeopleCard from "./PeopleCard";

const PeopleList = ({ people }) => {
    return (
        <div className="people-list">
            {people.map((peoples) => (
                <PeopleCard
                key={peoples.name}
                people={peoples}
                />
            ))}
        </div>
    );
};

export default PeopleList;