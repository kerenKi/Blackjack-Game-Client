// Import
import { DRAW_CARD } from "../actions/Drawcard";

// Reducer
const draws = (state = [], action) => {
  switch (action.type) {
    case DRAW_CARD:
      return [...state, action.card];
    case 'GAME_OVER':
        return []       
    default:
      return state;
  }
};

// Export
export default draws;
