import FamilyMemberCard from "./FamilyMemberCard";

const FamilyMemberList = ({ familymember }) => {
    return (
        <div className="familymember-list">
            {familymember.map((familymembers) => (
                <FamilyMemberCard
                key={familymembers.name}
                familymember={familymembers}
                />
            ))}
        </div>
    );
};

export default FamilyMemberList;