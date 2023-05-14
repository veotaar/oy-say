import { useEffect } from 'react';
import Candidate from './Candidate';
import { useCandidates } from '../state/VotesProvider';

function CandidateList() {
  const candidates = useCandidates();

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(candidates));
  }, [candidates]);

  return (
    <div className="flex flex-col gap-4 p-3">
      {candidates.map((candidate) => (
        <Candidate key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
}

export default CandidateList;
