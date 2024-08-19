const WorkItemChallenges = ({ challenges }) => {
  if (!challenges || challenges.length === 0) return null; // Early return if no challenges

  return (
    <div className="mt-8">
      <h2 className="text-xl mb-4">Challenges</h2>
      {challenges.map((challenge, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            {challenge.challengeTitle}
          </h3>
          <p className="text-sm text-white-dark">{challenge.challengeText}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkItemChallenges;
