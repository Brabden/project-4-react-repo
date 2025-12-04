import PeopleCard from "./PeopleCard";

const PeopleList = ({ people, onUpdatePerson, onDeletePerson }) => {
if (!people || people.length === 0) {
    return <p>No people found.</p>
}
    return (
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
    );
};

export default PeopleList;