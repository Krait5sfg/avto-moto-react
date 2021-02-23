import {ActionType} from './action';
import {MOCK_COMMENTS} from '../mock/mock';

const initialState = {
  comments: MOCK_COMMENTS,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENTS:
      const newComments = [...action.payload, ...state.comments.slice()];
      return Object.assign({}, state, {comments: newComments});
    default:
      return state;
  }
}