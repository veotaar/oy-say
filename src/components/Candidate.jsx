import { useVoteDispatch } from '../state/VotesProvider';

function Candidate({ candidate }) {
  const dispatch = useVoteDispatch();
  return (
    <div className="rounded border border-gray-300 bg-white p-6 text-center shadow-sm">
      <h2 className="text-2xl text-gray-800">{candidate.candidate}</h2>
      <div className="flex items-center justify-between p-4">
        <button
          className="rounded bg-red-600 p-4 text-white hover:bg-red-700"
          type="button"
          onClick={() => dispatch({ type: 'decrease', payload: { ...candidate } })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        </button>
        <div className="text-3xl">{candidate.votes}</div>
        <button
          className="rounded bg-green-600 p-4 text-white hover:bg-green-700"
          type="button"
          onClick={() => dispatch({ type: 'increase', payload: { ...candidate } })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Candidate;
