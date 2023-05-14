import { createContext, useContext, useReducer } from 'react';
import { initialVotes } from './data';

const VoteContext = createContext(null);
const VoteDispatchContext = createContext(null);

function voteReducer(candidates, action) {
  switch (action.type) {
    case 'increase': {
      return candidates.map((candidate) => {
        if (candidate.id === action.payload.id) {
          return {
            ...action.payload,
            votes: action.payload.votes + 1,
          };
        }
        return candidate;
      });
    }
    case 'decrease': {
      return candidates.map((candidate) => {
        if (candidate.id === action.payload.id) {
          return {
            ...action.payload,
            votes: action.payload.votes - 1,
          };
        }
        return candidate;
      });
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export function VotesProvider({ children }) {
  const votes = localStorage.getItem('state') === null ? initialVotes : JSON.parse(localStorage.getItem('state'));

  const [candidates, dispatch] = useReducer(voteReducer, votes);

  return (
    // prettier-ignore
    <VoteContext.Provider value={candidates}>
      <VoteDispatchContext.Provider value={dispatch}>
        {children}
      </VoteDispatchContext.Provider>
    </VoteContext.Provider>
  );
}

export function useCandidates() {
  return useContext(VoteContext);
}

export function useVoteDispatch() {
  return useContext(VoteDispatchContext);
}
